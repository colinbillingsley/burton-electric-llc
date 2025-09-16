"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function ScaleIn({ children }: { children: ReactNode }) {
	return (
		<motion.div
			initial={{ scale: 0.95, opacity: 0 }}
			whileInView={{ scale: 1, opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.3, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}
