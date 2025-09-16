import { burtonAddress, burtonPhone, hours } from "@/data/generalInfo";
import { Clock, MapPin, Phone } from "lucide-react";
import React from "react";
import { SlideDown } from "../motion/SlideDown";

const TopHeader = () => {
	return (
		<SlideDown>
			<header className="hidden md:flex items-center justify-between bg-primary text-primary-foreground w-full p-4 text-sm">
				<div className="flex items-center gap-2">
					<Clock className="size-3" />
					<p>{hours}</p>
				</div>
				<div className="flex items-center gap-2">
					<Phone className="size-3" />
					<p>{burtonPhone}</p>
				</div>
				<div className="flex items-center gap-2">
					<MapPin className="size-3" />
					<p>{burtonAddress}</p>
				</div>
			</header>
		</SlideDown>
	);
};

export default TopHeader;
