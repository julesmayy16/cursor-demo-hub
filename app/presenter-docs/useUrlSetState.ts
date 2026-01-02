"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useCallback, useMemo, useState, useEffect } from "react";

interface UseUrlSetStateOptions {
  /**
   * The URL search param key to use (e.g., "open", "sections")
   */
  paramKey: string;
  /**
   * Whether to encode/decode individual values (for values with special chars)
   * Defaults to false
   */
  encodeValues?: boolean;
}

interface UseUrlSetStateReturn {
  /** Current set of values from URL */
  values: Set<string>;
  /** Raw param string for passing to child components */
  paramValue: string;
  /** Toggle a value in/out of the set */
  toggle: (value: string) => void;
  /** Add a value to the set */
  add: (value: string) => void;
  /** Remove a value from the set */
  remove: (value: string) => void;
  /** Replace all values */
  setAll: (newValues: Set<string>) => void;
}

/**
 * Parse URL param string into a Set
 */
function parseParamToSet(paramValue: string, encodeValues: boolean): Set<string> {
  if (!paramValue) {return new Set<string>();}
  const items = paramValue.split(",");
  return new Set(encodeValues ? items.map(decodeURIComponent) : items);
}

/**
 * Serialize Set to URL param string
 */
function serializeSetToParam(values: Set<string>, encodeValues: boolean): string {
  if (values.size === 0) {return "";}
  return encodeValues
    ? Array.from(values).map(encodeURIComponent).join(",")
    : Array.from(values).join(",");
}

/**
 * Hook for managing a Set of values persisted in URL search params.
 * Uses native History API to avoid re-renders on URL updates.
 */
export function useUrlSetState({
  paramKey,
  encodeValues = false,
}: UseUrlSetStateOptions): UseUrlSetStateReturn {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Get initial value from URL
  const urlParamValue = searchParams.get(paramKey) || "";
  
  // Local state to track values without triggering re-renders on URL change
  const [localValues, setLocalValues] = useState<Set<string>>(() => 
    parseParamToSet(urlParamValue, encodeValues)
  );

  // Sync local state with URL on initial load or back/forward navigation
  useEffect(() => {
    const urlValues = parseParamToSet(urlParamValue, encodeValues);
    // Only update if the sets are different (comparing serialized form)
    const localSerialized = serializeSetToParam(localValues, encodeValues);
    const urlSerialized = serializeSetToParam(urlValues, encodeValues);
    if (localSerialized !== urlSerialized) {
      setLocalValues(urlValues);
    }
  }, [urlParamValue, encodeValues]); // eslint-disable-line react-hooks/exhaustive-deps

  const paramValue = useMemo(
    () => serializeSetToParam(localValues, encodeValues),
    [localValues, encodeValues]
  );

  const updateUrl = useCallback(
    (newValues: Set<string>) => {
      // Update local state immediately (no re-render flash)
      setLocalValues(newValues);
      
      // Update URL using native History API (syncs with Next.js router without re-render)
      const params = new URLSearchParams(searchParams.toString());
      const serialized = serializeSetToParam(newValues, encodeValues);
      if (serialized) {
        params.set(paramKey, serialized);
      } else {
        params.delete(paramKey);
      }
      const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
      window.history.replaceState(null, "", newUrl);
    },
    [searchParams, pathname, paramKey, encodeValues]
  );

  const toggle = useCallback(
    (value: string) => {
      const newValues = new Set(localValues);
      if (newValues.has(value)) {
        newValues.delete(value);
      } else {
        newValues.add(value);
      }
      updateUrl(newValues);
    },
    [localValues, updateUrl]
  );

  const add = useCallback(
    (value: string) => {
      if (localValues.has(value)) {return;}
      const newValues = new Set(localValues);
      newValues.add(value);
      updateUrl(newValues);
    },
    [localValues, updateUrl]
  );

  const remove = useCallback(
    (value: string) => {
      if (!localValues.has(value)) {return;}
      const newValues = new Set(localValues);
      newValues.delete(value);
      updateUrl(newValues);
    },
    [localValues, updateUrl]
  );

  const setAll = useCallback(
    (newValues: Set<string>) => {
      updateUrl(newValues);
    },
    [updateUrl]
  );

  return {
    values: localValues,
    paramValue,
    toggle,
    add,
    remove,
    setAll,
  };
}
