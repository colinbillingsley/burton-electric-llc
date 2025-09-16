"use client";
import { MapPin } from "lucide-react";
import { ServiceAreaType } from "../page";
import Link from "next/link";

const ICONSIZE: number = 16;
const STROKEWIDTH: number = 1.25;

export const ServiceCard = ({ title, desc, links }: ServiceAreaType) => {
	function determineCity(link: string) {
		if (link.includes("nashville")) return "Nashville, TN";
		else if (link.includes("franklin")) return "Franklin, TN";
		else return "Brentwood, TN";
	}

	return (
		<div className="h-full flex flex-col items-start gap-3 px-3 py-6 border-b border-b-gray-200 bg-transparent hover:bg-muted/35 transition-colors duration-300">
			<h3 className="text-lg font-semibold">{title}</h3>
			<p className="text-sm text-gray-600">{desc}</p>
			<ul className="mt-auto flex items-center gap-4 flex-wrap text-sm">
				{links.map((link) => (
					<Link
						href={link.href}
						className="flex items-center gap-1 px-2 py-1 bg-primary/10 hover:bg-primary/20 rounded-md transition-all"
						key={link.href}
					>
						<MapPin
							className="text-primary"
							size={ICONSIZE}
							strokeWidth={STROKEWIDTH}
						/>
						<span>{determineCity(link.href)}</span>
					</Link>
				))}
			</ul>
		</div>
	);
};
