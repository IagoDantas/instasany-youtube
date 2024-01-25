import { twMerge } from "tailwind-merge";

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function GridContainer({ children, className }: GridContainerProps) {

  const defaultClass = "w-full mx-auto px-3 max-w-grid"
  const combinedClasses = twMerge(defaultClass, className)

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

