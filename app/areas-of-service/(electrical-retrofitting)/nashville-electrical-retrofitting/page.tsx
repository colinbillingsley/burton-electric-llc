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
	title: "Nashville Electrical Retrofitting | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical retrofitting services improve the electrical systems of Nashville properties. Call (615) 830-1111 today.",
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

const signsNeeded: string[] = [
	"Do your lights flicker regularly?",
	"Are your breakers constantly tripping?",
	"Do your fuses blow often?",
	"Does your panel box make a crackling sound?",
	"Are your electrical service conductors overheating?",
	"Are your outlets non-grounded?",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Electrical Retrofitting Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							How old is your Nashville home or business? It&apos;s not a
							question home and business owners ask themselves regularly but
							it&apos;s important that they do especially when you consider how
							much our dependence on electricity has grown over the years. With
							more devices to power than ever before, your Nashville home or
							business&apos;s electrical infrastructure might not be equipped to
							handle all your energy demands.
						</p>
						<p>
							If your home or business has been having trouble keeping up with
							modern energy demands, you might be due for an electrical
							retrofit. An electrical retrofit may involve installing a new
							electrical panel, a complete or partial re-wiring or another
							solution as determined by one of Burton Electric LLC&apos;s
							skilled commercial and residential electricians to make your home
							or business better equipped to manage your energy demands.
						</p>
						<p>
							Electrical retrofitting is a very complex and potentially
							hazardous process, which is why if you think you could benefit
							from more efficient technology, you need to contact Burton
							Electric LLC today. Burton Electric LLC has been proud to help
							Nashville homes and businesses get more efficient power. Our
							licensed and insured electricians have been conducting all kinds
							of retrofits for commercial and residential clients across the
							area. We guarantee quality work, reliable service and that you
							will be treated with the utmost respect by our team of certified
							professionals.
						</p>
						<p>
							You don&apos;t have to be resigned to paying high energy bills for
							as long as you own your Nashville property. You can give Burton
							Electric LLC a call and let our electrical retrofitting services
							save you money.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Signs Your Home or Business Needs Retrofitting</H2>
						<p>
							Not every home or business in the Nashville is a candidate for
							electrical retrofitting. So, if you are curious as to whether or
							not your building could benefit from our electrical retrofitting
							services, here are questions you should ask yourself:
						</p>

						<ul className="space-y-4">
							{signsNeeded.map((sign, index) => (
								<li key={`sign-${index}`} className="flex items-center gap-2">
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{sign}</p>
								</li>
							))}
						</ul>

						<p>
							If you answered yes to one or more of these questions, it is
							highly likely that you are in need of our electrical retrofitting
							services. The next step is to call Burton Electric LLC and let us
							know where you are struggling with blown fuses, flickering lights
							or another symptom of an out of date system. We&apos;ll arrange
							for a time to conduct an inspection to determine exactly what type
							of retrofitting will provide your residential or commercial with
							most energy saving benefits.
						</p>
						<p>
							Thanks to our many years in the field, we have helped tons of home
							and business owners in the area cut down on their energy costs. We
							might also be able to save you money by making your property
							eligible for grants and tax breaks. There are plenty of benefits
							that await when you get our electrical retrofitting services, so
							give us a call today!
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Take your first step to lowering energy bills every month when you
						book a retrofit consultation with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
