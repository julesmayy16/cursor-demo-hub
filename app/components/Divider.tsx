interface DividerProps {
  className?: string;
}

function Divider({ className = "" }: DividerProps) {
  return (
    <div 
      className={`w-full pb-5 ${className}`}
      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
    />
  );
}

export default Divider;

