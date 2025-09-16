"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SlideInFromLeft({
	children,
	className,
	amount = 0.2,
}: {
	children: ReactNode;
	className?: string;
	amount?: number;
}) {
	return (
		<motion.div
			initial={{ x: -50, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true, amount: amount }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={cn(``, className)}
		>
			{children}
		</motion.div>
	);
}
