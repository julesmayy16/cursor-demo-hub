import Button from "./Button";

interface PaginationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

function PaginationButton({ onClick, children, isActive = false, className = "" }: PaginationButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? "pagination-active" : "pagination"}
      className={className}
    >
      {children}
    </Button>
  );
}

export default PaginationButton;
