import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="px-6 py-10 mt-20 bg-secondary text-secondary-foreground font-[family-name:var(--font-poppins)]">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Column 1: Company Info */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">Burton Electric LLC</h4>
					<p className="text-sm text-muted-foreground">
						Serving Nashville and surrounding areas for over 25 years.
					</p>
				</div>

				{/* Column 2: Quick Links */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">Quick Links</h4>
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
							<Link href="/about" className="hover:text-primary">
								About
							</Link>
						</li>
						<li>
							<Link href="/faq" className="hover:text-primary">
								FAQ
							</Link>
						</li>
						<li>
							<Link href="/contact" className="hover:text-primary">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Column 3: Contact Info */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">Contact Us</h4>
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
						<p className="text-sm text-muted-foreground">Mon–Fri 8AM–5PM</p>
						<p className="text-sm text-muted-foreground">
							Sat-Sun: By Appointment Only
						</p>
					</div>
				</div>
			</div>

			{/* Bottom row */}
			<div className="text-center text-xs text-muted-foreground mt-10">
				© {new Date().getFullYear()} Burton Electric LLC. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
