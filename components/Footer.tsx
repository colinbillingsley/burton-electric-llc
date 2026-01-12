"use client";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="py-24 lg:py-32 px-8 bg-secondary">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="grid grid-cols-1 gap-4 md:gap-0">
					<div className="flex items-start gap-4">
						<Image
							src="/burton-logo-white.png"
							alt="Burton Electric Logo"
							width={60}
							height={60}
							className="object-contain"
						/>

						<div className="text-white space-y-2">
							<p className="font-bold text-lg">Burton Electric LLC</p>
							<span className="text-muted-foreground text-sm">
								Serving Nashville and surrounding areas for over 25 years.
							</span>
						</div>
					</div>
					<div className="flex items-center gap-2 text-primary">
						<Link
							href="https://www.instagram.com/burtonelectric/"
							target="_blank"
							className="p-2 rounded-full hover:bg-primary-darker/10 transition-colors"
						>
							<Instagram strokeWidth={1.25} />
						</Link>

						<Link
							href={"https://www.facebook.com/profile.php?id=100063890317405"}
							target="_blank"
							className="p-2 rounded-full hover:bg-primary-darker/10 transition-colors"
						>
							<Facebook strokeWidth={1.25} />
						</Link>
					</div>
				</div>

				<div className="text-white space-y-2">
					<p className="font-bold text-lg">Quick Links</p>
					<ul className="flex flex-col gap-1 text-sm text-muted-foreground">
						<li>
							<Link href="/" className="hover:text-primary">
								Home
							</Link>
						</li>
						<li>
							<Link href="/services" className="hover:text-primary">
								Services
							</Link>
						</li>
						<li>
							<Link href="/about-us" className="hover:text-primary">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/faq" className="hover:text-primary">
								FAQ
							</Link>
						</li>
						<li>
							<Link href="/contact-us" className="hover:text-primary">
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<div className="text-white space-y-2">
					<p className="font-bold text-lg">Contact Us</p>
					<p className="text-sm text-muted-foreground">
						Phone:{" "}
						<a href="tel:+16158301111" className="text-primary">
							615-830-1111
						</a>
					</p>
					<p className="text-sm text-muted-foreground">
						Email:{" "}
						<a
							href="mailto:info@burtonelectricllc@gmail.com"
							className="hover:text-primary"
						>
							burtonelectricllc@gmail.com
						</a>
					</p>

					<div className="">
						<p className="text-sm text-muted-foreground">Hours:</p>
						<p className="text-sm text-muted-foreground">Mon-Fri 8AM-5PM</p>
						<p className="text-sm text-muted-foreground">
							Sat-Sun: By Appointment Only
						</p>
					</div>
				</div>
			</div>

			{/* Bottom row */}
			<div className="text-center text-xs text-muted-foreground mt-12">
				<span>
					&copy; {new Date().getFullYear()} Burton Electric LLC. All rights
					reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
