import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title:
		"Security Lighting Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will install a security lighting system that will aid in keeping your property safe and secure. Give us a call at (615) 830-1111!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Security Lighting Services",
		"Security Lighting",
		"Brentwood Security Lighting",
		"Franklin Security Lighting",
		"Nashville Security Lighting",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Security Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<p>
							Is your home or business adequately protected against intruders
							and vandals? If you don&apos;t have a professionally installed
							security lighting system in place, you might want to think about
							it for a while before you answer the question. Even if your home
							or business is equipped with a state-of-the-art security system,
							strategically placed, motion sensor lights can go a long way in
							detecting and deterring any potential threats. It can also make
							concealment a challenge, increasing the chances that the
							perpetrators get caught and brought to justice.
						</p>
						<div className="space-y-6">
							<p>
								If you are ready to increase your home or business&apos;s
								security at an affordable rate, then give Burton Electric LLC a
								call today. Our team of licensed and insured electricians have
								been installing residential and commercial security lighting
								systems all over the area for many years. When we are tasked
								with increasing a home or business&apos;s security, we take it
								very seriously. Burton Electric LLC is proud to be known for our
								quality work, but we take extra special care with security
								lighting systems because you are paying for peace of mind.
							</p>
							<p>
								For a free estimate on our commercial or residential security
								lighting services, call Burton Electric LLC today.
							</p>
						</div>
					</Section>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<H2>Residential Security Lights</H2>
							<p>
								While there are plenty of homeowners who want to increase their
								home&apos;s security, several of them are reluctant to get
								security lights installed because they are worried it might
								detract from their property&apos;s curb appeal. If you are in
								this camp, you should know that when Burton Electric LLC
								installs security lighting, it&apos;s not going to give your
								home a prison-like appearance.
							</p>
							<p>
								Flood lights, spot lights and motion sensor lights can easily be
								positioned in an artful way. With the correct placement, your
								exterior security lighting can add protection and still be
								esthetically pleasing. Esthetics and protection aren&apos;t
								mutually exclusive, especially when you work with electricians
								who have an abundance of experience designing lighting systems
								that do both.
							</p>
							<p>
								When call Burton Electric LLC to inquire about our residential
								security lighting services, we can easily arrange for a
								consultation to figure out a plan that increases both your
								home&apos;s security and its curb appeal.
							</p>
						</div>

						<div className="space-y-6">
							<H2>Commercial Security Lights</H2>
							<p>
								We cannot understate the importance of security lighting on
								commercial properties. The last thing you should want as a
								business owner is for your staff to feel like they aren&apos;t
								safe when coming to or leaving work. Yes, the security lighting
								can also deter break-ins and theft at your place of work, but
								making sure your employees feel safe should be the priority.
							</p>
							<p>
								Curb appeal is also an important concern for business owners in
								the area, which is why Burton Electric LLC&apos;s experience
								installing esthetically pleasing security light systems is so
								valuable. We can place motion sensors and flood and spot lights
								around your property in a way that makes it feel inviting to
								customers, while deterring anyone with malicious intentions.
							</p>
							<p>
								To consult with one of our specialists on your commercial
								property&apos;s security lighting needs, give us a call today.
							</p>
						</div>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>

			<ContactUs
				desc="Increasing your home or business's security is as simple as
						picking up the phone and calling Burton Electric LLC. So, what are
						you waiting for?"
			/>
		</PageContainer>
	);
};

export default pages;
