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
	title:
		"Lighting Installation Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC's lighting experts will correctly, safely and efficiently install your property's new lighting system. Call us at (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Lighting Installation Services",
		"Lighting Installation",
		"Brentwood Lighting Installation",
		"Franklin Lighting Installation",
		"Nashville Lighting Installation",
		...baseKeywords,
	],
};

const residentialLighting: { title: string }[] = [
	{
		title: "Lighting Layouts",
	},
	{
		title: "Recessed Lighting",
	},
	{
		title: "LED Lighting",
	},
	{
		title: "Light Fixtures",
	},
	{
		title: "Light Switches",
	},
];

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Lighting Installation Services</p>
					</PageHeading>

					<Section
						my="sm"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8"
					>
						<p>
							Burton Electric LLC is so much more than your average commercial
							and residential electrical company. Though we take great pride in
							the electrical work we do, we are always thrilled when we get to
							combine our trade with our flair for design. Our commercial and
							residential electricians understand how important lighting can be
							in terms of setting the right mood for any given room in your home
							or business.
						</p>
						<p>
							But, for the right lighting to showcase your business or products
							or to set a relaxing ambiance in your home, they need to be safely
							installed. The last thing you want is a brand-new lighting scheme
							for your home or business only to have it either work sporadically
							or be a fire hazard. Choosing Burton Electric LLC&apos;s
							experienced electricians to handle the installation eliminates any
							of these concerns.
						</p>
						<p>
							Not only can we install a beautiful, new and energy efficient
							lighting system in your home or business, our electricians will
							make sure it&apos;s up to code and safe for an affordable rate.
							For high-quality lighting with convenient service, give Burton
							Electric LLC a call today to request a free estimate.
						</p>
					</Section>

					<Section my="sm" className="grid md:grid-cols-2 gap-12 md:gap-8">
						<div className="space-y-6">
							<H2>Residential Lighting Installations</H2>
							<p>
								When you have been conducting lighting installations as long as
								our electricians have, there is no room in the house we
								can&apos;t handle. Whether it&apos;s your kitchen, bathroom,
								living room, bedroom or anything in between, our experts are
								well versed in the lighting needs of these rooms. Or, if you
								have something a little less conventional in mind, we are always
								willing to collaborate with our clients to bring their ideas to
								life.
							</p>
							<p>
								Some of the more popular residential lighting we are asked to
								install include:
							</p>
							<ul className="space-y-2">
								{residentialLighting.map((resLighting, index) => (
									<li key={index} className="flex items-center gap-3">
										<Zap size={15} className="shrink-0 text-primary" />
										<p className="font-medium">{resLighting.title}</p>
									</li>
								))}
							</ul>
							<p>
								We can also totally revamp your home&apos;s exterior lighting to
								make your property more secure while boosting its curb appeal.
								Whatever your home needs lighting-wise, Burton Electric LLC is
								here to help.
							</p>
						</div>

						<div className="space-y-6">
							<H2>Commercial Lighting Installations</H2>
							<p>
								How your commercial property is lit is incredibly important no
								matter what type of work you are in. High-quality lighting
								designs affect how your business is perceived. From creating an
								engaging atmosphere to sell your products and service to
								protecting the safety of your customers and employees, there is
								no shortage of reasons why you should invest in a lighting
								installation.
							</p>
							<p>
								When you choose Burton Electric LLC to install new lighting on
								your commercial property, safety is always our top priority as
								is our desire to understand your lighting needs. When we have an
								understanding of your commercial indoor and outdoor lighting, we
								can put your business in a position to succeed for years to
								come.
							</p>
							<p>
								One of the most popular reasons businesses invest in lighting
								installations from Burton Electric LLC is to reduce operating
								costs. Thanks to new technologies, new lighting can reduce
								energy costs by 35 to 75 percent. So, if you want to start
								saving money every month, get in touch with Burton Electric LLC.
							</p>
						</div>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs desc="Whether your home or business needs new lighting, Burton Electric LLC is ready to provide quality work." />
		</PageContainer>
	);
};

export default pages;
