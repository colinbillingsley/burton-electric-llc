import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const P = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) => {
	return <p className={cn(`max-w-full`, className)}>{children}</p>;
};

export default P;
