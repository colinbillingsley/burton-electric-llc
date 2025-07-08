"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React, { ReactNode, useState } from "react";
import Link from "next/link";

const DropdownBoxes = ({
	items,
	icon,
}: {
	items: Array<{
		title: string;
		desc: string;
		links?: Array<{ href: string; title: string }>;
	}>;
	icon: ReactNode;
}) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="flex flex-col gap-4">
			{items.map((item, index) => {
				const isOpen = openIndex === index;
				return (
					<Card
						key={index}
						onClick={() => setOpenIndex(isOpen ? null : index)}
						className={cn(
							"cursor-pointer border border-border rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary overflow-hidden gap-0",
							isOpen && "bg-primary/5 border-primary shadow-md"
						)}
					>
						<CardHeader>
							<div className="flex justify-between items-center gap-2">
								<div className="flex items-center gap-4">
									<i>{icon}</i>
									<CardTitle className="text-sm lg:text-base">
										{item.title}
									</CardTitle>
								</div>
								<ChevronDown
									className={`transition-transform flex-shrink-0 ${
										isOpen ? "rotate-180" : ""
									}`}
									size={18}
								/>
							</div>
						</CardHeader>
						<CardContent
							className={`text-sm transition-all duration-200 space-y-6 ${
								isOpen ? "max-h-[50rem] opacity-100 pt-2" : "max-h-0 opacity-0"
							}`}
							aria-hidden={!isOpen}
						>
							<p className="tracking-wide leading-relaxed text-sm lg:text-base">
								{item.desc}
							</p>
							{item.links && (
								<div className="mt-auto flex items-center flex-wrap gap-2">
									{item.links.map((link, index) => (
										<Link
											href={link.href}
											key={`${link.href}-${index}`}
											prefetch
										>
											<Button className="text-xs sm:text-sm text-wrap w-fit h-fit whitespace-normal">
												{link.title}
											</Button>
										</Link>
									))}
								</div>
							)}
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default DropdownBoxes;
