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
	title: "Franklin Electrical Retrofitting | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical retrofitting services improve the electrical systems of Franklin properties. Call (615) 830-1111 today.",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Electrical Retrofitting Services",
		"Nashville Electrical Retrofitting Services",
		"Franklin Electrical Retrofitting Services",
		"Electrical Retrofitting Services",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Electrical Retrofitting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Are you sick and tired of paying astronomical utility bills every
							month? The first thing you should do is examine your electricity
							usage. For example, if you regularly leave your lights on all
							night or your air filters are badly clogged, saving money on
							electricity might be as simple as making these little adjustments.
						</p>
						<p>
							Of course, it&apos;s far more likely that your Franklin home or
							business is running with out-of-date and inefficient technology.
							If your home or business&apos;s electrical infrastructure
							hasn&apos;t been updated to keep up with the changes of modern
							energy demands, then you need contact Burton Electric LLC so that
							one of our trained, licensed and insured commercial and
							residential electricians can conduct an inspection to see if you
							qualify for an electrical retrofit.
						</p>
						<p>
							Electrical retrofitting is, in laymen&apos;s terms, the process of
							replacing any inefficient, power-sucking assets of your Franklin
							home or business with energy efficient models. If your home or
							business is eligible for our electrical retrofitting services, it
							won&apos;t be long before you notice a huge improvement in your
							energy efficiency, i.e., lower utility bills.
						</p>
						<p>
							To find out if you could benefit from an electrical retrofit, get
							in touch with Burton Electric LLC today to arrange your commercial
							or residential inspection.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Lighting Retrofits</H2>
						<p>
							One of the most common types of electrical retrofits Burton
							Electric LLC&apos;s team of commercial and residential
							electricians are contracted to complete are lighting retrofits. A
							lighting retrofit is the process of replacing components in your
							Franklin home or business&apos;s lighting system with counterparts
							that use significantly less energy.
						</p>
						<p>
							Though Burton Electric LLC is known for our affordable rates, the
							reduced energy consumption will result in utility bill decreases,
							which, over a length of time, will allow you to recover any costs
							associated with our lighting retrofitting services.
						</p>
						<p>
							By and large, when we redo a home or business&apos;s lighting
							system, we will implement LED lights because they are by far the
							most efficient types of lights available on the market today.
							However, we have been doing electrical retrofits long enough that,
							if you want, we can lay out some different lighting options so
							that you can get the exact lighting you want for less.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Panel Retrofits</H2>
						<p>
							Sometimes, your home or business&apos;s lights aren&apos;t the
							issue. It is also highly likely that you have an obsolete
							electrical panel. In the event that your electrical panel is
							out-of-date, you need to do something. The best thing to do is
							call Burton Electric LLC to get our electrical panel retrofit
							experts to take a look at it.
						</p>
						<p>
							An electrical panel is what supplies your appliances, devices and
							other technologies with electricity. And if it hasn&apos;t been
							updated in who knows when, then it is very possible that it&apos;s
							struggling to keep up with modern electrical demands. If you
							suspect the problem lies within your panel, give us a call and
							we&apos;ll be happy to inspect it. If you are eligible for a
							retrofit, we&apos;ll get started right away. If not, we&apos;ll
							continue the inspection until the issue is found.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Start saving on your utilities and arrange for our electrical
						retrofitting services today."
			/>
		</PageContainer>
	);
};

export default page;
