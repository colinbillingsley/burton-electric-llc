"use client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const DropdownLink = ({
	name,
	subLinks,
}: {
	name: string;
	subLinks: { href: string; name: string }[];
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();
	const isActive = pathname.includes(name.toLowerCase());

	function handleClick() {
		setIsOpen(!isOpen);
	}

	return (
		<DropdownMenu open={isOpen} onOpenChange={handleClick}>
			<DropdownMenuTrigger
				className={`group flex items-center gap-1 p-2 hover:text-black w-full transition-colors ${
					isOpen
						? `text-black ${
								isActive ? "text-primary font-bold" : "font-medium"
						  }`
						: `text-muted-foreground ${
								isActive ? "text-primary font-bold" : "font-medium"
						  }`
				}`}
			>
				<span>{name}</span>
				<ChevronDown
					size={12}
					className={`${
						isOpen ? "rotate-180" : "rotate-0"
					} transition-transform`}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center" className="grid grid-cols-2 gap-0">
				{subLinks.map((sublink) => (
					<DropdownMenuItem
						key={sublink.name.toLowerCase().replace(" ", "-")}
						className="transition-all"
						onClick={handleClick}
					>
						<NavLink href={sublink.href} className="p-4">
							{sublink.name}
						</NavLink>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default DropdownLink;
