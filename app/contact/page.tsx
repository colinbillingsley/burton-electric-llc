import React, { ReactNode } from "react";
import MainContainer from "../components/MainContainer";
import Section from "../components/Section";
import Footer from "../components/Footer";
import H1 from "../components/H1";
import ContactForm from "../components/contact-page/ContactForm";
import { Mail, MapIcon, Phone } from "lucide-react";
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
import { IoLogoVenmo } from "react-icons/io5";
import { GrContactInfo } from "react-icons/gr";
import { LuClock4 } from "react-icons/lu";

const paymentMethods: { title: string; icon: ReactNode }[] = [
	{
		title: "Visa",
		icon: <FaCcVisa title="Visa" />,
	},
	{
		title: "MasterCard",
		icon: <FaCcMastercard title="Master Card" />,
	},
	{
		title: "Discover",
		icon: <FaCcDiscover title="Discover Card" />,
	},
	{
		title: "American Express",
		icon: <SiAmericanexpress title="American Express" />,
	},
	{
		title: "Cash",
		icon: <IoIosCash title="Cash" />,
	},
	{
		title: "Check",
		icon: <FaMoneyCheckAlt title="Check" />,
	},
	{
		title: "Debit",
		icon: <FaCreditCard title="Debit" />,
	},
	{
		title: "Venmo",
		icon: <IoLogoVenmo title="Venmo" />,
	},
];

const STROKEWIDTH = 1.75;

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<span className="font-medium">Get in touch with</span>
					<Important>Burton Electric LLC</Important>
				</H1>

				<div className="grid grid-cols-1 gap-10 mt-10">
					<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="space-y-4 w-full p-4 sm:p-8 border border-primary/25 rounded-md text-sm md:text-base">
							<GrContactInfo
								size={32}
								strokeWidth={STROKEWIDTH}
								className="text-primary"
							/>

							<span className="block font-semibold text-2xl">
								Contact Information
							</span>

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

						<div className="space-y-4 w-full p-4 sm:p-8 border border-primary/25 rounded-md">
							<LuClock4
								size={32}
								strokeWidth={STROKEWIDTH}
								className="text-primary"
							/>
							<span className="block font-semibold text-2xl">
								Hours of Operation
							</span>
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
				</div>

				<Section className="bg-accent/30 p-4 sm:p-16 flex flex-col items-center gap-10">
					<div className="flex flex-col lg:flex-row items-center gap-6 justify-center">
						<p className="text-2xl sm:text-3xl font-semibold lg:self-start p-3">
							Accepted Methods of Payment
						</p>
						<ul className="grid grid-cols-2 lg:grid-cols-3 text-gray-600">
							{paymentMethods.map((payment, index) => (
								<li
									key={`${payment.title}-${index}`}
									className="flex items-center gap-2 p-3 text-sm sm:text-base"
								>
									<i className="text-5xl">{payment.icon}</i>
									<span>{payment.title}</span>
								</li>
							))}
						</ul>
					</div>

					<span className="font-medium text-base sm:text-lg">
						We also accept invoices
					</span>
				</Section>

				<Section>
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
