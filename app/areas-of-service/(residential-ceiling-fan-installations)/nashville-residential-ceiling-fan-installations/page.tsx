import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Gauge, Lightbulb, Palette, ThermometerSun } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title:
		"Nashville Residential Ceiling Fan Installations | Burton Electric LLC",
	description:
		"Burton Electric LLC will correctly install a brand-new ceiling fan for your Nashville home. Call (615) 830-1111 today",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Residential Ceiling Fan Installations",
		"Nashville Residential Ceiling Fan Installations",
		"Franklin Residential Ceiling Fan Installations",
		"Residential Ceiling Fan Installations",
		...baseKeywords,
	],
};

const ICONSIZE: number = 42;
const STROKEWIDTH: number = 1.5;

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Residential Ceiling Fan Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Whether you are looking to add a design flourish to your Nashville
							home or simply looking to make it a more comfortable without
							breaking the bank on energy costs, adding a ceiling fan is a great
							way accomplish these goals. That said, attempting to install a
							ceiling fan yourself anywhere in your home is a risky proposition.
							Ceiling fans are, by and large, heavy and cumbersome. Climbing up
							on your ladder with your new ceiling fan in-hand and trying to
							figure out how to wire it is a recipe for disaster.
						</p>
						<p>
							If you want to avoid any hazards to your health or the safety of
							your home, contact Burton Electric LLC today for our residential
							ceiling fan installation services. At Burton Electric LLC, we have
							been installing ceiling fans in homes all over the area for many
							years. Our licensed and insured electricians have invaluable
							experience completing these types of installations and can get it
							working safely in hardly no time at all.
						</p>
						<p>
							So, when you need a residential ceiling fan installed, call Burton
							Electric LLC today to receive a free, no obligation estimate from
							one of our expert electricians.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Why Install a Ceiling Fan?</H2>
						<p>
							If you are in the market for a new ceiling fan, you are most
							likely interested in staying cool throughout the summer months.
							But ceiling fans can do a lot more than keep you comfortable when
							the Nashville summer starts heating up. Some of the best reasons
							to install a ceiling fan in your home include:
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<ThermometerSun
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Indoor Comfort</p>
								<p className="text-muted-foreground">
									Yes, ceiling fans can create a nice breeze when the weather
									gets too warm, but they also have an important purpose when
									it&apos;s cold. Certain makes of ceiling fans can be set in
									reverse to push the hot air downward to keep your home warmer
									when the temperature starts dropping outside.
								</p>
							</div>
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<Gauge
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Save on energy</p>
								<p className="text-muted-foreground">
									If you are constantly fiddling with your thermostat, you are
									increasing the amount of energy you use. Rather than force the
									heavy machinery in your home to do all the heating and
									cooling, let a ceiling fan make the fine-tuned adjustments for
									you.
								</p>
							</div>
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<Lightbulb
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Additional lighting</p>
								<p className="text-muted-foreground">
									You know what goes great with a ceiling fan? Additional
									lighting! If you want to have better control over your
									home&apos;s temperature while improving its overall ambiance,
									our electricians have all the necessary know-how to rig up a
									beautiful new lighting system complete with ceiling fan.
								</p>
							</div>
							<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
								<Palette
									size={ICONSIZE}
									strokeWidth={STROKEWIDTH}
									className="shrink-0"
								/>
								<p className="text-2xl font-medium">Esthetic value</p>
								<p className="text-muted-foreground">
									With so many different makes and models of ceiling fans
									available on the market today, you just might find a
									beautiful, ornate ceiling fan that increases your home&apos;s
									esthetic value.
								</p>
							</div>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Why Contact Burton Electric LLC</H2>
						<p>
							There are several electrical companies in the Nashville area, so
							why choose us? Well, when you decide to work with Burton Electric
							LLC, you are guaranteed to have access to highly trained, licensed
							and insured professionals. What sets us apart from the competition
							is our dedication to safety, energy efficiency and always
							providing reliable service.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For residential ceiling fan installations with guaranteed results,
						get in touch with Burton Electric LLC today to receive a free quote."
			/>
		</PageContainer>
	);
};

export default page;
