import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Section = ({
	children,
	className,
	spacing,
}: {
	children: ReactNode;
	className?: string;
	spacing?: "small" | "default" | "large";
}) => {
	function spacingType(spacing: string) {
		switch (spacing) {
			case "small":
				return "my-12";
			case "default":
				return "my-22";
			case "large":
				return "my-32";
		}
	}
	return (
		<section
			className={cn(
				`${spacingType(spacing || "default")} space-y-6`,
				className
			)}
		>
			{children}
		</section>
	);
};

export default Section;
