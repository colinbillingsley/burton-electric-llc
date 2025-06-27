import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Important = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={cn(
				`text-4xl sm:text-5xl md:text-7xl font-bold block text-primary`,
				className
			)}
		>
			{children}
		</span>
	);
};

export default Important;
