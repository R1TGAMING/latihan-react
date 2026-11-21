import React from "react";

const Header = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <header
      className={
        "flex  fixed items-center justify-between left-0 right-0 px-4 py-4 " +
        className
      }
    >
      {children}
    </header>
  );
};

export default Header;
