import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlideUp } from "./motion/SlideUp";

const ContactUs = ({
	title = "Contact Us Today!",
	desc = "Have a project in mind or need expert electrical services? Reach out to our team and we'll be happy to help.",
}: {
	title?: string;
	desc?: string;
}) => {
	return (
		<SlideUp>
			<div className="flex flex-col-reverse md:flex-row items-center gap-16 bg-white border-t-2 border-muted text-secondary py-10 md:py-20 px-10 mt-10">
				<Image
					src={"/burton-logo-dark.png"}
					width={250}
					height={250}
					alt="Burton Electric Logo"
					className="object-contain"
				/>

				<div className="flex flex-col gap-4">
					<h3 className="text-3xl md:text-4xl font-bold">{title}</h3>
					<p>{desc}</p>
					<Link
						href={"/contact-us"}
						className="w-fit flex items-center gap-2 px-4 py-3 bg-primary text-secondary-foreground text-sm font-medium rounded-sm mt-auto"
					>
						<span>Contact Us</span>
						<ArrowRight size={15} />
					</Link>
				</div>
			</div>
		</SlideUp>
	);
};

export default ContactUs;
