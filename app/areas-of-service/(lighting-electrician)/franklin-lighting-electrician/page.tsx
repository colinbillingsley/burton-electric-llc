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
	title: "Franklin Lighting Electricians | Burton Electric LLC",
	description:
		"If you're looking for a lighting electrician in Franklin whose work you can trust, call Burton Electric LLC at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Lighting Electricians",
		"Nashville Lighting Electricians",
		"Franklin Lighting Electricians",
		"Lighting Electricians",
		...baseKeywords,
	],
};

const comServices: string[] = [
	"Decorative lighting and banners",
	"Electric sign repair",
	"Light pole inspections",
	"Lighting upgrades",
	"Night inspections",
	"Parking lot lighting",
	"Roadway lighting",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Lighting Electricians</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Homes and businesses in the Franklin area need to pay close
							attention to their lighting needs. Lighting can have a huge impact
							on how your property is perceived as well as how it functions. If
							you are in need of a local, trained professional who is able to
							design, install and repair residential or commercial lighting
							systems, look no further than Burton Electric LLC.
						</p>
						<p>
							Burton Electric LLC is a team made up of trained, licensed and
							insured lighting electricians that specialize in providing
							quality, efficient and reliable services to homes and businesses
							all over the Franklin area. Our wealth of experience designing,
							installing and repairing commercial and residential lighting
							systems is available to you at an affordable rate as soon as you
							give us a call.
						</p>
						<p>
							Our commitment to quick and quality work with transparent pricing
							is just a small reason we have consistently been one of the most
							popular and trusted electrical contracting firms in the area. To
							see what all the hype is about, give us a call today and we will
							be happy to provide you with a free, no obligation quote for the
							project you have in mind. Having been in the lighting business for
							many, many years, there is no project, residential or commercial,
							we don&apos;t have complete confidence in our ability to finish on
							time and on budget. So, call us today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Residential Lighting Services</H2>
						<p>
							Burton Electric LLC is proud to offer Franklin homeowners a number
							of interior and exterior lighting services. We can help you with
							repairs, retrofits, design and installations. No matter what your
							home needs from our residential lighting electricians, when you
							choose Burton Electric LLC for your project, you are making a
							choice to work with the area&apos;s most dedicated professionals.
						</p>
						<p>
							Our lighting electricians have undergone a significant amount of
							training so that they can always provide our clients with the
							highest quality residential lighting work. How do we define
							quality work? It needs to be safe, timely, make sense for your
							budget and work efficiently.
						</p>
						<p>
							If this is what you are looking for in a residential lighting
							electrician, call Burton Electric LLC today to request a free
							quote on your upcoming home improvement project.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Commercial Lighting Services</H2>
						<p>
							The lighting needs of a commercial property are almost always more
							complex compared to what&apos;s required on residential project.
							That&apos;s why our lighting electricians undergo so much
							training. We want to be able to help your business with its
							lighting in any way we can.
						</p>
						<p>
							Some of the things we can help your business with beyond the usual
							commercial lighting design, installation and maintenance services
							include:
						</p>

						<ul className="flex items-center gap-4 flex-wrap">
							{comServices.map((service, index) => (
								<li
									key={`comService-${index}`}
									className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
								>
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{service}</p>
								</li>
							))}
						</ul>

						<p>
							If you don&apos;t see the commercial lighting service you&apos;re
							looking for listed here, don&apos;t fret. When you have as much
							experience with commercial lighting as our electricians, there is
							no job too big or small.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial lighting needs, get
						Franklin's most trusted professionals on the case when you
						contact Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
