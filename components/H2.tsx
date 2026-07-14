import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const H2 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        `text-secondary text-xl md:text-2xl font-semibold`,
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default H2;
