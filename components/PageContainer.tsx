import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const PageContainer = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				`mt-10 min-h-screen h-full w-full font-[family-name:var(--font-poppins)]`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default PageContainer;
