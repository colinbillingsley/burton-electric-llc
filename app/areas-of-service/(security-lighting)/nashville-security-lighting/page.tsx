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
	title: "Nashville Security Lighting Services | Burton Electric LLC",
	description:
		"Outdoor lighting will improve your Nashville's security. Call Burton Electric LLC today at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Security Lighting Services",
		"Nashville Security Lighting Services",
		"Franklin Security Lighting Services",
		"Security Lighting Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Security Lighting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							How secure is your Nashville home or business? You may have an
							alarm system and the most advanced lock technology, but how
							effective are these assets in deterring people from messing with
							your property? More often than not, the best defense against
							people who would do harm to your Nashville home or business is
							making sure the property is equipped with adequate security
							lighting. The prowlers that might vandalize or break-in to your
							home or business need a cover of darkness to work under, and when
							you take that away from them, you can rest easy.
						</p>
						<p>
							When you decide it&apos;s time to make sure you are protected
							against whatever is lurking in the Nashville night and equip your
							property with powerful, efficient security lighting, contact
							Burton Electric LLC. Burton Electric LLC is made up of licensed
							and insured electricians who have an extensive amount of
							experience installing motion sensor lights and digital timer
							switches in homes and businesses around the area. Our company is
							committed to providing quality, reliable security lighting at an
							affordable price because we know what&apos;s at stake. Your life
							or your livelihood could be derailed without quality security
							lighting, which is why we want to provide it to you.
						</p>
						<p>
							For a free estimate on our security lighting services, give Burton
							Electric LLC a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Motion Sensor Lights</H2>
						<p>
							Motion sensor flood lights are typically the most popular type of
							security lighting that Nashville homes and businesses opt for
							because they offer a strong deterrent to criminals and
							trespassers. The motion sensor light detects movement and
							automatically floods the area with bright light for a preset
							amount of time. So, if there is anyone or anything lurking in the
							shadows along your property, surprising them with a sudden burst
							of light is often all you need to send them running in the
							opposite direction.
						</p>
						<p>
							A lot of our clients are concerned that when they added motion
							sensor lights to their property that their new motion sensor
							lights will be more of a nuisance to occupants than a deterrent,
							switching on for false alarms every time some wildlife runs across
							the property. A legitimate concern, but not one you need to worry
							about when you choose Burton Electric LLC to install your motion
							sensor security lighting.
						</p>
						<p>
							When Burton Electric LLC is hired to install motion sensor lights
							to any residential or commercial property in the Nashville area,
							we take the time to adjust the sensitivity to make sure that your
							lights are only tripped by a potential threat. It&apos;s not an
							easy task but that&apos;s why hiring electricians as experienced
							as the ones at Burton Electric LLC makes a huge difference.
						</p>
						<p>
							To learn more about the motion sensor lights we offer to improve
							your home or business&apos;s security, please give us a call
							today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Whenever there is electrical work to be done, you need to make sure
						it's done by licensed and insured electricians like the ones
						working for Burton Electric LLC. This is especially true when
						installing security lighting because you need to make sure it's
						been done correctly if it's going to protect your family or
						your business. So, give us a call today if you want peace of mind at
						an unbeatable price."
			/>
		</PageContainer>
	);
};

export default page;
