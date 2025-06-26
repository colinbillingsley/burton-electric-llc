"use client";

import Image from "next/image";
import { useLoading } from "../providers/loading-context";

const LoadingOverlay = () => {
	const { isLoading } = useLoading();

	if (!isLoading) return null;

	return (
		<div className="fixed inset-0 z-[9999] bg-secondary/50 flex flex-col items-center justify-center gap-6 text-white">
			<Image
				src={"/burton-logo.png"}
				alt="Burton Electric Logo"
				width={200}
				height={200}
			/>
			<span className="animate-pulse text-2xl font-semibold tracking-wide">
				Loading...
			</span>
		</div>
	);
};

export default LoadingOverlay;
