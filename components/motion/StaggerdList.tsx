"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StaggeredList({
	children,
	className,
	amount = 0.3,
	stagger = 0.1,
	duration = 0.4,
}: {
	children: ReactNode[];
	className?: string;
	amount?: number;
	stagger?: number;
	duration?: number;
}) {
	return (
		<motion.ul
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: amount }}
			variants={{
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: { staggerChildren: stagger },
				},
			}}
			className={cn(`py-4`, className)}
		>
			{children.map((child, i) => (
				<motion.li
					key={i}
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: { opacity: 1, y: 0, transition: { duration: duration } },
					}}
				>
					{child}
				</motion.li>
			))}
		</motion.ul>
	);
}
