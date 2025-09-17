"use client";
import { usePathname } from "next/navigation";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"; // assuming you're using this to merge classes
import Link from "next/link";

interface NavLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	href: string;
	children: React.ReactNode;
}

// 👇 Use forwardRef so Radix can properly hook into it
const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ href, children, className, ...props }, ref) => {
		const pathname = usePathname();
		const isActive = pathname === href;

		return (
			<Link
				prefetch
				ref={ref}
				href={href}
				className={cn(
					"p-2 font-medium hover:text-black w-full transition-colors",
					isActive
						? "text-primary font-bold"
						: "bg-transparent text-muted-foreground",
					className
				)}
				{...props}
			>
				{children}
			</Link>
		);
	}
);

NavLink.displayName = "NavLink";

export default NavLink;
