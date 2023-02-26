import clsx from "clsx";

export interface Props extends React.HTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={clsx(
        "border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        Boolean(className) && className
      )}
      {...props}
    />
  );
};
