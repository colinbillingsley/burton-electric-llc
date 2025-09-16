import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Appliance Installation | Burton Electric LLC",
	description:
		"Burton Electric LLC are the electrical contractors who specialize in panel upgrades and energy efficiency. Call us at (615) 830-1111 today.",
	icons: {
		icon: icon,
	},
	keywords: [
		"Appliance Installation",
		"Brentwood Appliance Installation",
		"Franklin Appliance Installation",
		"Nashville Appliance Installation",
		...baseKeywords,
	],
};

const applianceInstalls: { title: string }[] = [
	{
		title: "Refrigerators",
	},
	{
		title: "Dryers",
	},
	{
		title: "Washers",
	},
	{
		title: "Dishwashers",
	},
	{
		title: "Stoves and Ovens",
	},
	{
		title: "Built-in Microwaves",
	},
];

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Appliance Installation</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<p>
							If you have just purchased or are about to buy a brand-new
							appliance for your home or local business, there&apos;s no
							question that you are excited for the day it arrives so that you
							can enjoy your upgraded amenities. Of course, if you haven&apos;t
							planned to have an electrician on hand to install the appliance in
							question, you going to be disappointed to learn that you
							won&apos;t be able to use the new appliance until you get a
							professional to swing by.
						</p>
						<p>
							Modern appliances are more energy efficient and digitally focused
							than ever before. Whether it&apos;s an industrial strength
							dishwasher or a new washer and dryer for your family, appliances
							today do more and function at a much different rate than those you
							have been using. And with those technological advancements comes
							new challenges to make sure it&apos;s compatible with your home or
							business&apos;s electrical infrastructure.
						</p>
						<p>
							For your new commercial or residential appliance to work properly,
							you will need to install a new circuit or replace the existing
							wires. And since you should never attempt to conduct any
							electrical work yourself, especially if you want to avoid fires
							and shocks, give Burton Electric LLC a call so that you can enjoy
							your new appliance.
						</p>
						<p>
							Burton Electric LLC is a local electrical company made up of
							licensed and insured electrical professionals. We have completed
							all kinds of commercial and residential appliance installations
							over the years and we hope to have the opportunity to impress you
							with our impeccable customer service. Letting our electricians
							handle your appliance installation means the product and your home
							or business won&apos;t be susceptible to fires or electrical
							surges.
						</p>
						<p>
							Plus, when we install your commercial or residential appliance to
							the manufacturer&apos;s specifications, your warranty will be
							protected as some manufacturers require appliances to be installed
							by licensed electricians. Call Burton Electric LLC today to get a
							free estimate on our installation services.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Able to Install Any Appliance</H2>
						<p>
							Burton Electric LLC&apos;s electricians consistently rank among
							the best in the area thanks to our professional versatility. We
							are comfortable working on residential and commercial projects,
							always delivering high-quality work and courteous services. So,
							whether you are a homeowner who is completing a renovation or you
							are opening a new business, we can help install:
						</p>
						<ul>
							{applianceInstalls.map((appInstall, index) => (
								<li key={index} className="flex items-center gap-3">
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{appInstall.title}</p>
								</li>
							))}
						</ul>

						<p>
							Thanks to our team&apos;s extensive experience installing
							appliances, we work with most makes and models of appliances.
							Though we are confident we have the ability to install any
							appliance, we invite you to give us a call and tell us the make
							and model of your new appliance. We have yet to be stumped by a
							concerned client, so you can expect a free, no-obligation estimate
							on our services when you call.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Upgrading your appliances is always a good idea. New appliances are
						more efficient and safer. Plus, they can add value to your home and
						improve your business's image. All it takes to get the new
						appliances working is a phone call to Burton Electric LLC, so what
						are you waiting for?"
			/>
		</PageContainer>
	);
};

export default pages;
