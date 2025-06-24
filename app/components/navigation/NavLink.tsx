"use client";
import { usePathname } from "next/navigation";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils"; // assuming you're using this to merge classes
import Link from "next/link";

interface NavLinkProps extends React.ComponentPropsWithoutRef<"a"> {
	href: string;
	title: string;
}

// 👇 Use forwardRef so Radix can properly hook into it
const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
	({ href, title, className, ...props }, ref) => {
		const pathname = usePathname();
		const isActive = pathname === href;

		return (
			<Link
				ref={ref}
				href={href}
				className={cn(
					"p-2 font-medium hover:bg-accent hover:text-black w-full",
					isActive && "bg-primary text-white",
					className
				)}
				{...props}
			>
				{title}
			</Link>
		);
	}
);

NavLink.displayName = "NavLink";

export default NavLink;
