import React from "react";
import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className,
}) => {
  // Map heading levels to Tailwind CSS text size classes
  const textSizeClasses = {
    1: "text-5xl", // 3rem; /* 48px */
    2: "text-4xl", // 2.25rem; /* 36px */
    3: "text-3xl", // 1.875rem; /* 30px */
    4: "text-2xl", // 1.5rem; /* 24px */
    5: "text-xl", // 1.25rem; /* 20px */
    6: "text-lg", // 1.125rem; /* 18px */
  };

  return (
    <div className={clsx(textSizeClasses[level], className, "my-2 font-bold")}>
      {children}
    </div>
  );
};

export default Heading;
