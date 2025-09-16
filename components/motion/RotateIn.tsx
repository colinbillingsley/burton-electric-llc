"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function RotateIn({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ rotate: -10, opacity: 0 }}
			whileInView={{ rotate: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}
