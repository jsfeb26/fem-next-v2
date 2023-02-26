import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const GlassPane = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        Boolean(className) && className
      )}
    >
      {children}
    </div>
  );
};
