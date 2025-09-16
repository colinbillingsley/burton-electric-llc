import CenterDiv from "@/components/CenterDiv";
import { FadeIn } from "@/components/motion/FadeIn";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import { SlideInFromRight } from "@/components/motion/SlideInFromRight";
import { StaggeredList } from "@/components/motion/StaggerdList";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { burtonAddress, burtonEmail, burtonPhone } from "@/data/generalInfo";
import { baseKeywords, icon } from "@/data/seo";
import {
	Clock,
	Facebook,
	IdCard,
	Instagram,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

const ICONSIZE: number = 18;
const STROKEWIDTH: number = 1.25;

export const metadata: Metadata = {
	title: "Contact Burton Electric LLC at (615) 830-1111 | Burton Electric LLC",
	description: "Contact Burton Electric LLC by calling (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [...baseKeywords],
};

const contactData = [
	{
		icon: MapPin,
		title: "Address",
		value: burtonAddress,
	},
	{
		icon: Phone,
		title: "Phone",
		value: burtonPhone,
	},
	{
		icon: Mail,
		title: "Email",
		value: burtonEmail,
	},
];

const page = () => {
	return (
		<PageContainer>
			<CenterDiv className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
				<div className="space-y-8">
					<FadeIn className="space-y-4">
						<PageHeading>
							<span>Get in touch with</span>
							<p>Burton Electric LLC</p>
						</PageHeading>
						<p className="text-muted-foreground max-w-2xl">
							Whether you have questions about our services or want to schedule
							a consultation, we&apos;re here to help. Give us a call, send an
							email, or visit us at our office.
						</p>
					</FadeIn>

					<FadeIn className="py-8 border-y-2 space-y-4">
						<div className="space-y-8">
							{contactData.map((item, index) => (
								<div key={index} className="flex items-center gap-4">
									<div className="flex items-center rounded-md bg-primary p-4 text-primary-foreground">
										<item.icon size={ICONSIZE} strokeWidth={STROKEWIDTH} />
									</div>
									<div className="flex flex-col gap-2 text-secondary">
										<span className="font-bold">{item.title}</span>
										<span className="text-sm">{item.value}</span>
									</div>
								</div>
							))}
						</div>

						<div>
							<div className="flex flex-col gap-2 text-secondary py-4">
								<div className="flex items-center gap-2">
									<IdCard size={16} />
									<span className="font-bold">Licenses</span>
								</div>
								<span className="text-sm">
									CE contractors license #:{" "}
									<span className="font-medium">75283</span>
								</span>
								<span className="text-sm">
									Metro Nashville #: <span className="font-medium">DC1525</span>
								</span>
							</div>
							<div className="flex flex-col gap-2 text-secondary py-4">
								<div className="flex items-center gap-2">
									<Clock size={16} />
									<span className="font-bold">Hours of Operation</span>
								</div>
								<span className="text-sm">
									Monday - Friday: 8:00AM - 5:00PM
								</span>
								<span className="text-sm">
									Saturday - Sunday: By Appointment Only
								</span>
							</div>
						</div>

						<div className="flex items-center gap-2">
							<Link
								href="https://www.instagram.com/burtonelectric/"
								target="_blank"
								className="text-primary hover:text-primary-darker transition-colors"
							>
								<Instagram strokeWidth={1.25} />
							</Link>

							<Link
								href={"https://www.facebook.com/profile.php?id=100063890317405"}
								target="_blank"
								className="text-primary hover:text-primary-darker transition-colors"
							>
								<Facebook strokeWidth={1.25} />
							</Link>
						</div>
					</FadeIn>
				</div>

				<SlideInFromRight className="w-full h-[300px] md:h-[700px] rounded-md overflow-hidden">
					<iframe
						title="Burton Electric LLC Map"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51539.29325037439!2d-86.7851469!3d36.1160054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30.1!3m3!1m2!1s0x886489c1f6b9cf55%3A0x35780e4276fd32ec!2sBurton%20Electric%20LLC!5e0!3m2!1sen!2sus!4v1718862652192!5m2!1sen!2sus"
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</SlideInFromRight>
			</CenterDiv>
		</PageContainer>
	);
};

export default page;
