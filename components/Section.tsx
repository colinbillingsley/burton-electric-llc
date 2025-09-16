import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const Section = ({
	children,
	className,
	my = "lg",
}: {
	children: ReactNode;
	className?: string;
	my?: "sm" | "md" | "lg";
}) => {
	function determineMySpacing(my: "sm" | "md" | "lg") {
		switch (my) {
			case "sm":
				return "py-10 lg:py-12";
			case "md":
				return "py-14 lg:py-22";
			case "lg":
				return "py-24 lg:py-32";
		}
	}
	return (
		<section className={cn(`${determineMySpacing(my)}`, className)}>
			{children}
		</section>
	);
};

export default Section;
