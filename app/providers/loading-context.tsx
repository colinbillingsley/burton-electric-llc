"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type LoadingContextType = {
	isLoading: boolean;
	setIsLoading: (val: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
	isLoading: false,
	setIsLoading: () => {},
});

export const LoadingProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const pathname = usePathname();

	// Reset loading state when route changes
	useEffect(() => {
		setIsLoading(false);
	}, [pathname]);

	// Trigger loading only if going to a different route
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = (e.target as HTMLElement).closest("a[href]");
			if (!target) return;

			const href = target.getAttribute("href");
			const isExternal =
				target.getAttribute("target") === "_blank" ||
				href?.startsWith("http") ||
				href?.startsWith("mailto:") ||
				href?.startsWith("tel:");

			if (!isExternal && href && href !== pathname) {
				setIsLoading(true);
			}
		};

		window.addEventListener("click", handleClick);
		return () => window.removeEventListener("click", handleClick);
	}, [pathname]);

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading }}>
			{children}
		</LoadingContext.Provider>
	);
};

export const useLoading = () => useContext(LoadingContext);
