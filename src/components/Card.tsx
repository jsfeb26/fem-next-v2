import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: Props) => {
  return (
    <div
      className={clsx(
        "rounded-3xl px-10 py-4 drop-shadow-xl bg-white",
        Boolean(className) && className
      )}
    >
      {children}
    </div>
  );
};
