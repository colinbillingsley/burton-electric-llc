import React, { ReactNode } from "react";
import Section from "./Section";
import H2 from "./H2";
import P from "./P";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactUs = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) => {
	return (
		<Section
			spacing="small"
			className={cn(
				`bg-gradient-to-br from-primary to-[#885619] text-white space-y-4 px-8 py-14 rounded-sm relative overflow-hidden`,
				className
			)}
		>
			{children}
			<Link href="/contact-us" prefetch>
				<Button variant={"outline"}>Contact Us</Button>
			</Link>
			<Image
				src={"/burton-logo.png"}
				width={350}
				height={350}
				alt="Burton Electric Logo"
				className="absolute right-0 -top-8 opacity-5 hidden md:block"
			/>
		</Section>
	);
};

export const ContactTitle = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) => {
	return <H2 className={cn(``, className)}>{children}</H2>;
};

export const ContactContent = ({
	children,
	className,
}: {
	children?: ReactNode;
	className?: string;
}) => {
	return <P className={cn(`font-medium`, className)}>{children}</P>;
};

export default ContactUs;
