interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

function Input({ value, onChange, onInput, placeholder = "", className = "" }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onInput={onInput}
      placeholder={placeholder}
      className={`flex-grow rounded-lg bg-dev-card p-4 text-base text-dev-text placeholder-dev-secondary ${className}`}
      style={{ border: '1px solid rgba(6, 48, 43, 0.3)' }}
    />
  );
}

export default Input;

