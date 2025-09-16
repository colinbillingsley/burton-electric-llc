import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const ServiceCard = ({
	href,
	title,
	desc,
}: {
	href: string;
	title: string;
	desc: string;
}) => {
	return (
		<div className="flex flex-col gap-4 p-4 border-2 border-input rounded-md h-full bg-white hover:bg-muted/50 transition-colors">
			<h3 className="font-semibold">{title}</h3>
			<p className="text-gray-600 text-sm">{desc}</p>
			<Link
				href={href}
				className="w-fit flex items-center gap-1 text-primary hover:text-primary-darker text-sm mt-auto transition-colors"
			>
				<span>Learn More</span> <ChevronRight size={14} />
			</Link>
		</div>
	);
};
