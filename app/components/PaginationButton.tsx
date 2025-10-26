interface PaginationButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

function PaginationButton({ onClick, children, className = "" }: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg bg-white px-4 py-2 text-dev-primary transition-colors duration-100 ease-in hover:bg-dev-primary hover:text-white ${className}`}
    >
      {children}
    </button>
  );
}

export default PaginationButton;
