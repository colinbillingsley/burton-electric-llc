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
		"Standby Generators Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"A standby generator will ensure you have access to consistent, uninterrupted power for your home or business. Call Burton Electric LLC at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Standby Generator Services",
		"Standby Generators",
		"Brentwood Standby Generators",
		"Franklin Standby Generators",
		"Nashville Standby Generators",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Standby Generators</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								Whether you run a business, use sensitive medical equipment at
								home or simply want the peace of mind of never losing power, a
								standby generator might be the best purchase you ever make.
								Investing in a standby generator is like paying for insurance
								against being left in the cold and dark. Whatever your reason
								for investing in a standby generator, when the whole
								neighborhood loses power, you&apos;ll be patting yourself on the
								back until the power comes back for being prepared.
							</p>
							<p>
								Standby generators are appliances permanently installed near
								your home or business and are connected directly to the
								electrical panel. They are powered either by natural gas or
								liquid propane and contain an internal transfer switch that will
								automatically start the backup power the minute normal
								electrical service is interrupted. Given their intricate nature,
								it is extremely important that you get a professional to set it
								up and maintain it. After all, what&apos;s the point of
								investing in a standby generator if you can&apos;t depend on it
								in times of need?
							</p>
						</div>
						<div className="space-y-6">
							<p>
								If you are committed to getting a standby generator, trust
								Burton Electric LLC&apos;s electricians to make sure you are
								getting one that&apos;s guaranteed to work. When home and
								business owners in the area take shopping for and installing a
								standby generator into their own hands, it is very common that
								they purchase one that&apos;s ill-equipped to give them the
								energy that they need. Or, worse, it&apos;s even more likely
								that they incorrectly install the generator, creating a serious
								safety hazard rather than safety net.
							</p>
							<p>
								When you let Burton Electric LLC&apos;s licensed and insured
								electricians come by your home or business to conduct a load
								assessment, we can make sure that you get the standby generator
								that&apos;s capable of supporting all your energy demands and
								you&apos;ll never have to worry about whether or not it&apos;ll
								work because we are the area&apos;s foremost standby generator
								experts. Give us a call today to arrange for your load
								assessment.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Why a Standby Generator is Better Than a Portable Generator</H2>
						<p>
							There are plenty of home and business owners in the area that
							don&apos;t see a difference between these two types of generators.
							All they see is the price of a portable generator and think
							that&apos;s good enough for them. Here&apos;s the thing though,
							portable generators are a temporary solution at best. Standby
							generators, because they are automatically connected to
							home&apos;s electrical system and are powered by either natural
							gas or propane, they provide a seamless transition of power.
						</p>
						<p>
							A portable generator, meanwhile, requires home and business owners
							to get the generator out and manually connect it to their
							electrical system via a transfer switch or cord connect. And since
							portable generators run on regular gasoline, it will need to be
							refueled regularly and there is the possibility that it causes
							carbon monoxide to fill the space you&apos;re occupying.
						</p>
						<p>
							For reliable power in a time of need, standby generators are worth
							the price.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="If you have any questions about residential or commercial standby
						generators, don't hesitate to give Burton Electric LLC a call
						today."
			/>
		</PageContainer>
	);
};

export default pages;
