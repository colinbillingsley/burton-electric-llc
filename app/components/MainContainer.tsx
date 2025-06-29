import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MainContainer = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				`min-h-screen w-full px-8 sm:px-20 pt-8 font-[family-name:var(--font-poppins)]`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default MainContainer;
