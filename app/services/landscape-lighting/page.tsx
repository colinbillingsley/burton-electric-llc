import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import { Metadata } from "next";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { VscError } from "react-icons/vsc";

export const metadata: Metadata = {
	title:
		"Landscape Lighting Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will help you install a lighting system that will greatly enhance the exterior your property. Call us at (615) 830-1111 today!",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
		"Landscape Lighting Services",
		"Landscape Lighting",
		"Brentwood Landscape Lighting",
		"Franklin Landscape Lighting",
		"Nashville Landscape Lighting",
		"Nashville Electrician",
		"Nashville Electrical Contractor",
		"Nashville Residential Electrician",
		"Brentwood Electrician",
		"Brentwood Electrical Contractor",
		"Brentwood Residential Electrician",
		"Franklin Electrician",
		"Franklin Electrical Contractor",
		"Franklin Residential Electrician",
	],
};

const dos: { desc: string }[] = [
	{
		desc: "Use a variety of intensities throughout the property to give a sense of texture and depth.",
	},
	{
		desc: "Think about shadow as well as light because the interplay between the two elements is an essential part of creating atmosphere.",
	},
	{
		desc: "Choose LED lights for your landscape lighting because they offer an extremely long service life.",
	},
];

const donts: { desc: string }[] = [
	{
		desc: "Don't only light walkways, patios and trees. Doing so can isolate these elements and surround them in an eerie darkness, which can make it difficult to unwind after a long day at work and can also invite vandals towards your commercial building.",
	},
	{
		desc: "Don't under-light landscaping features. Using one light to illuminate trees, lawn statues or water features causes harsh shadows that won't create your desired ambiance.",
	},
];

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Landscape Lighting Services</Important>
				</H1>

				<Section
					spacing="small"
					className="grid md:grid-cols-2 gap-12 md:gap-8"
				>
					<div className="space-y-4">
						<P>
							You no doubt already know what a well designed and maintained
							landscape can do for your commercial or residential property, but
							are you getting all that you can out your landscape if it&apos;s
							not properly lit? We regret to inform you that if you haven&apos;t
							invested in landscape lighting, only half of your landscape&apos;s
							value-boosting potential has been tapped.
						</P>

						<P>
							There are a ton of benefits you can expect to reap once you invest
							in landscape lighting, namely safety and security. When your
							commercial or residential property is covered in darkness, the
							chances of someone missing a step or tripping over something
							decorative and hurting themselves is high. Providing visitors and
							residents with the necessary light to see their surroundings
							lowers the chances of injury and increases safety. And when you
							eliminate dark pockets in a yard or green space, doing away with
							any potential hiding spots, you can deter people from trespassing
							or loitering on your property.
						</P>
					</div>

					<div className="space-y-4">
						<P>
							Now, these are obviously two very practical benefits of investing
							in landscape lighting, but don&apos;t forget the esthetic value
							outdoor lighting can add. There are a number of different lighting
							techniques that can be applied to your property to create a
							nighttime scene that looks like it should be on a canvas in a
							museum rather than exist in real life.
						</P>
						<P>
							Of course, the only way to reap the many benefits of landscape
							lighting is to find experienced, licensed and insured electrical
							contractors who can design, install and maintain these types of
							systems. If you want to work with landscape lighting experts that
							are both affordable and highly recommended by commercial and
							residential clients all over the area, get in touch with Burton
							Electric LLC today.
						</P>
						<P>
							Burton Electric LLC has completed hundreds of outdoor lighting
							installations and we are ready to start collaborating on a design
							to perfectly accent your home or business today.
						</P>
					</div>
				</Section>

				<Section>
					<H2>Do&apos;s and Don&apos;ts of Landscape Lighting</H2>
					<P className="mb-12">
						Before you call Burton Electric LLC to start planning your outdoor
						lighting system, let us review some of the basic principles of
						landscape lighting to help you form an idea that&apos;s both
						practical and beautiful.
					</P>

					<div className="grid lg:grid-cols-2 gap-12 md:gap-8">
						<div className="h-full p-8 space-y-4 bg-gradient-to-br from-emerald-500 to-emerald-300 text-white rounded-lg shadow-lg">
							<span className="text-2xl font-medium block">Do:</span>
							<ul className="space-y-3">
								{dos.map((dos, index) => (
									<li key={`do-${index}`} className="flex items-start gap-3">
										<IoMdCheckmarkCircleOutline
											size={18}
											className="shrink-0"
										/>
										<P>{dos.desc}</P>
									</li>
								))}
							</ul>
						</div>

						<div className="h-full p-8 space-y-4 bg-gradient-to-br from-red-500 to-red-300 text-white rounded-lg shadow-lg">
							<span className="text-2xl font-medium block">Don&apos;t:</span>
							<ul className="space-y-3">
								{donts.map((dos, index) => (
									<li key={`donts-${index}`} className="flex items-start gap-3">
										<VscError size={18} className="shrink-0" />
										<P>{dos.desc}</P>
									</li>
								))}
							</ul>
						</div>
					</div>

					<ContactUs className="my-28">
						<ContactTitle>Contact Us Today!</ContactTitle>
						<ContactContent>
							Getting your outdoor lighting perfect is about as difficult to do
							as wiring it all yourself. So, spare yourself the headache and let
							Burton Electric LLC&apos;s experts design, install and maintain
							your residential or commercial property&apos;s landscape lighting.
						</ContactContent>
					</ContactUs>
				</Section>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
