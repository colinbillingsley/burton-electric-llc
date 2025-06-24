import React from "react";
import MainContainer from "../components/MainContainer";
import Section from "../components/Section";
import Footer from "../components/Footer";
import H1 from "../components/H1";
import ContactForm from "../components/contact-page/ContactForm";
import H2 from "../components/H2";
import { Mail, MapIcon, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	FaCcDiscover,
	FaCcMastercard,
	FaCcVisa,
	FaCreditCard,
} from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { IoIosCash } from "react-icons/io";
import { FaMoneyCheckAlt } from "react-icons/fa";
import PageContainer from "../components/PageContainer";
import Important from "../components/Important";

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<span className="font-medium">Get in touch with</span>
					<Important>Burton Electric LLC</Important>
				</H1>

				<Section className="grid grid-cols-1 gap-10">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
						<div className="space-y-4 w-full">
							<H2>Contact Information</H2>
							<div className="flex items-center gap-2">
								<MapIcon size={18} />
								<p>Nashville, Tennessee 37221</p>
							</div>

							<div className="flex items-center gap-2">
								<Phone size={18} />
								<p>(615)-830-1111</p>
							</div>

							<div className="flex items-center gap-2">
								<Mail size={18} />
								<p>burtonelectricllc@gmail.com</p>
							</div>

							<p>
								<span className="font-medium">CE contractors license # : </span>
								75283
							</p>

							<p>
								<span className="font-medium">Metro Nashville # : </span>DC1525
							</p>
						</div>

						<div className="space-y-4 w-full">
							<H2>Hours of Operation</H2>
							<p>
								<span className="font-medium">Monday - Friday : </span>
								8:00AM - 5:00PM
							</p>

							<p>
								<span className="font-medium">Saturday - Sunday : </span>
								By Appointment Only
							</p>
						</div>
					</div>

					<Card className="rounded-sm border-secondary/5 border-2 shadow-lg text-center">
						<CardHeader>
							<CardTitle className="text-2xl border-b-2 border-primary/50">
								Accepted Methods of Payment
							</CardTitle>
						</CardHeader>

						<CardContent className="space-y-4">
							<div className="flex items-center justify-center flex-wrap gap-4">
								<FaCcVisa size={48} className="text-[#1434CB]" title="Visa" />
								<FaCcMastercard
									size={48}
									className="text-[#EB001B]"
									title="Master Card"
								/>
								<FaCcDiscover
									size={48}
									className="text-[#F79C1F]"
									title="Discover Card"
								/>
								<SiAmericanexpress
									size={38}
									className="rounded-md text-[#016FD0]"
									title="American Express"
								/>
								<IoIosCash size={48} className="text-lime-600" title="Cash" />
								<FaMoneyCheckAlt
									size={48}
									className="text-gray-700"
									title="Check"
								/>
								<FaCreditCard
									size={48}
									className="text-gray-700"
									title="Debit"
								/>
							</div>
							<p className="font-medium tracking-wide">
								We also accept Venmo and Invoicing
							</p>
						</CardContent>
					</Card>
					<ContactForm />
				</Section>

				<Section>
					<div className="w-full h-[300px] md:h-[400px] rounded-md overflow-hidden border">
						<iframe
							title="Burton Electric LLC Map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51539.29325037439!2d-86.7851469!3d36.1160054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886489c1f6b9cf55%3A0x35780e4276fd32ec!2sBurton%20Electric%20LLC!5e0!3m2!1sen!2sus!4v1718862652192!5m2!1sen!2sus"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</Section>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
