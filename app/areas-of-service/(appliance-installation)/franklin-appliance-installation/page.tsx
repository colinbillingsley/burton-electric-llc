import CenterDiv from "@/components/CenterDiv";
import H2 from "@/components/H2";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Zap } from "lucide-react";
import { Metadata } from "next";
import { appliances } from "../brentwood-appliance-installation/page";
import ContactUs from "@/components/ContactUs";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";

export const metadata: Metadata = {
	title: "Franklin Appliance Installation | Burton Electric LLC",
	description:
		"If you would like a new appliance installed for your Franklin home or business, call Burton Electric LLC today! (615) 830-1111",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood Appliance Installation",
		"Nashville Appliance Installation",
		"Franklin Appliance Installation",
		...baseKeywords,
	],
};

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin Appliance Installation</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Whether you are building a new home or business in the Franklin
							area from scratch or giving an existing one a complete makeover,
							chances are you have used this opportunity to treat yourself to
							new appliances. What few people realize about purchasing new
							appliances, however, is that getting them working isn&apos;t as
							simple as placing in its desired location and plugging it in.
							Nowadays, home and commercial appliances are far more
							sophisticated than they used to be. All these amazing features and
							design breakthroughs typically mean they use more power than
							previous makes and models. As a result, your home or business may
							not have the electrical infrastructure necessary to power your
							brand-new appliance.
						</p>
						<p>
							It would be a shame for your new appliances to work at half
							capacity, especially when you consider that it can do serious
							damage to the appliance itself as well as your Franklin home or
							business&apos;s electrical system. Rather than risk doing
							unnecessary damage to your investments, give Burton Electric LLC a
							call today.
						</p>
						<p>
							Our team of licensed, insured and experienced electricians have
							been helping homes and businesses all over the Franklin area
							ensure that their new appliances are safely installed, receiving
							the electricity they need to function at maximum capacity. Just
							give us a call today and tell us what kind of appliance you need
							installed. From there, we will provide with a free, no obligation
							quote on our expert appliance installation services.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Appliances We Install</H2>
						<p>
							Burton Electric LLC can carry out a range of appliance
							installations including:
						</p>
						<ul className="flex items-center gap-4 flex-wrap">
							{appliances.map((app, index) => (
								<li
									key={`app-${index}`}
									className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
								>
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{app}</p>
								</li>
							))}
						</ul>
						<p>
							If you don&apos;t see the appliance you need installed listed
							here, don&apos;t fret. When you have been installing appliances
							for as long as we have, you end up being very confident in your
							ability to handle any installation. Just give us a call and let us
							know what you need installed and we&apos;ll let you know if we can
							help.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Why Burton Electric LLC Should Install Your Appliances</H2>
						<p>
							Home and business owners in the Franklin area have plenty of
							choices when they are looking for professional appliance
							installation services, so why should they seek out the help of
							Burton Electric LLC? Well, it&apos;s simple.
						</p>
						<p>
							Friendly and responsive service. Our technicians are renowned
							around the area for their ability to listen to the concerns of
							clients and provide them with clear, concise answers to any
							questions. Your experience working with us matters to us, so you
							can expect us to put our best foot forward at all times.
						</p>
						<p>
							Extensive knowledge. Thanks to our familiarity with the makes and
							models of most major brands, you can trust us to handle and
							install even the trickiest appliance components.
						</p>
						<p>
							Safety is our priority. Installations are no place to cut corners.
							Choosing Burton Electric LLC to install your appliances means you
							are making sure everything is up to code and secure for years to
							come.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="To make sure your new appliances are receiving the power they need
						to last, give Burton Electric LLC a call today and let a trained
						professional handle its installation."
			/>
		</PageContainer>
	);
};

export default page;
