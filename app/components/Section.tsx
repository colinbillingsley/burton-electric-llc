import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Section = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<section className={cn(`my-25 sm:my-40`, className)}>{children}</section>
	);
};

export default Section;
