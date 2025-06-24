"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const ServiceCollapsible = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Card
			onClick={() => setIsOpen((prev) => !prev)}
			className={`h-fit transition-transform hover:cursor-pointer`}
		>
			<CardHeader>
				<div className="flex items-center justify-between gap-2">
					<CardTitle>{title}</CardTitle>
					<ChevronDown
						size={18}
						className={`${
							isOpen ? "rotate-180" : "rotate-0"
						} transition-transform`}
					/>
				</div>
			</CardHeader>

			<CardContent
				className={`${
					isOpen ? "h-fit" : "opacity-0 hidden"
				} transition-transform`}
			>
				<p>{description}</p>
			</CardContent>
		</Card>
	);
};

export default ServiceCollapsible;
