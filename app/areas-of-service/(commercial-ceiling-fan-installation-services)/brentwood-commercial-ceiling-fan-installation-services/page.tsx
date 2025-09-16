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
		"Brentwood Commercial Ceiling Fan Installation Services | Burton Electric LLC",
	description:
		"Burton Electric LLC's expert electricians will effectively install a new ceiling fan for your Brentwood business space. Call (615) 830-1111 today",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Commercial Ceiling Fan Installations",
		"Nashville Commercial Ceiling Fan Installations",
		"Franklin Commercial Ceiling Fan Installations",
		"Commercial Ceiling Fan Installations",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood Commercial Ceiling Fan Installations</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Though you may have never considered it before, your business
							could really benefit from installing commercial grade ceiling
							fans. Regardless of what industry your Brentwood business is in,
							getting commercial ceiling fans installed is worth considering.
						</p>
						<p>
							If you run an office, your employees&apos; productivity can
							decrease by 10 percent with poor ventilation and uncomfortably
							high temperatures. Retail facilities and shopping malls must
							always be mindful of their customer&apos;s experience and
							providing them with a comfortable place to do their shopping is
							essential to retaining their business. Same goes for the
							hospitality industry since no one wants to stay at a stuffy hotel
							or eat in a restaurant with atrocious air quality.
						</p>
						<p>
							But most important of all, installing commercial ceiling fans into
							your Brentwood business could really help you cut down on how much
							you are spending on energy every month. Since there is no business
							that wants to run up operational costs at an exponential rate, it
							is worth your while to investigate getting commercial ceiling fans
							installed.
						</p>
						<p>
							Of course, you should not expect to buy a couple of ceiling fans
							and for them to start working right away. Even if you consider
							yourself a world class handyman, installing a commercial ceiling
							fan yourself is akin to rigging up a fire hazard. Plus, installing
							multiple ceiling fans can be a long process if you are learning
							how to do it on the fly, which can interfere with your operations.
							Rather than risk your business to save a couple of bucks, make
							sure your commercial ceiling fans are expertly installed by Burton
							Electric LLC&apos;s licensed and insured electricians.
						</p>
						<p>
							Our commercial electricians have been completing commercial
							ceiling fan installations for all types and sizes of businesses in
							the Brentwood area for many years. You can outfit your business
							with your desired size and style of commercial ceiling fan in a
							safe, efficient and affordable manner so that you can start
							spending less on energy and providing a better environment for
							clients and employees.
						</p>
						<p>
							To request a free quote on your commercial ceiling fan
							installation needs, contact Burton Electric LLC today and
							we&apos;ll be help with whatever you need.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>How Commercial Ceiling Fans Save Businesses Money</H2>
						<p>
							We don&apos;t need to tell you that providing your clients and
							employees with a comfortable environment is costly. Whether
							it&apos;s sweltering hot or freezing cold, your business&apos;s
							air conditioner or heater is working overtime to keep the
							interiors at a comfortable temperature. This ends up expending a
							lot of energy that you must pay for.
						</p>
						<p>
							Ceiling fans are a great way to ease the strain placed on your
							business&apos;s heater and air conditioner. In cold and warm
							weather, they can be set to circulate the air the heater or air
							conditioner has already produced. When you have commercial ceiling
							fans working in conjunction with your heater and air conditioner,
							they won&apos;t have to work as hard and you&apos;ll start to see
							energy savings all year round.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Save money and keep your business free from potential hazards when
						you choose Burton Electric LLC to install your commercial ceiling
						fans."
			/>
		</PageContainer>
	);
};

export default page;
