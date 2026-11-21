import type React from "react";

const Card = ({
  text,
  className,
  children,
}: {
  text: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={"bg-slate-200 rounded-xl min-w-xs p-6  " + className}>
      <h2 className="text-center text-3xl font-bold">{text}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
