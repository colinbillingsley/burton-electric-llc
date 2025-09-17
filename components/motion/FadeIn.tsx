"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({
	children,
	className,
	amount = 0.2,
	duration = 0.5,
}: {
	children: ReactNode;
	className?: string;
	amount?: number;
	duration?: number;
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, amount: amount }}
			transition={{ duration: duration }}
			className={cn(``, className)}
		>
			{children}
		</motion.div>
	);
}
