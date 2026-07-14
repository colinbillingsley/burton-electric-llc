import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const PageHeading = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        ` space-y-2 [&_p]:text-4xl [&_p]:md:text-6xl [&_p]:font-bold [&_span]:text-lg [&_span]:md:text-xl [&_span]:font-bold text-secondary`,
        className,
      )}
    >
      <h1>
        <div>{children}</div>
      </h1>
    </div>
  );
};

export default PageHeading;
