interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M8 12H14V20H8V12Z"
          fill="white"
        />
        <path
          d="M18 8H24V24H18V8Z"
          fill="white"
        />
        <path
          d="M8 8H14V10H8V8Z"
          fill="white"
        />
        <path
          d="M8 22H14V24H8V22Z"
          fill="white"
        />
      </svg>
      <span className="text-foreground text-xl font-bold tracking-tight">
        Hash Web Design
      </span>
    </div>
  );
};
