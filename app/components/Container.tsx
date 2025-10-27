import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  variant?: "content" | "post";
  className?: string;
}

function Container({ children, variant = "content", className = "" }: ContainerProps) {
  const variantStyles = {
    content: "box-border flex w-full flex-col items-start gap-10 px-20 pt-5",
    post: "box-border flex w-full flex-col items-start justify-center gap-2 pl-16 pr-4 pt-3 md:px-20 md:pt-5",
  };

  return (
    <div className={`${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

export default Container;

