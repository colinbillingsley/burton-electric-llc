import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import React from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { appliances } from "../brentwood-appliance-installation/page";

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Franklin Appliance Installation</Important>
				</H1>

				<Section spacing="small">
					<P>
						Whether you are building a new home or business in the Franklin area
						from scratch or giving an existing one a complete makeover, chances
						are you have used this opportunity to treat yourself to new
						appliances. What few people realize about purchasing new appliances,
						however, is that getting them working isn&apos;t as simple as
						placing in its desired location and plugging it in. Nowadays, home
						and commercial appliances are far more sophisticated than they used
						to be. All these amazing features and design breakthroughs typically
						mean they use more power than previous makes and models. As a
						result, your home or business may not have the electrical
						infrastructure necessary to power your brand-new appliance.
					</P>
					<P>
						It would be a shame for your new appliances to work at half
						capacity, especially when you consider that it can do serious damage
						to the appliance itself as well as your Franklin home or
						business&apos;s electrical system. Rather than risk doing
						unnecessary damage to your investments, give Burton Electric LLC a
						call today.
					</P>
					<P>
						Our team of licensed, insured and experienced electricians have been
						helping homes and businesses all over the Franklin area ensure that
						their new appliances are safely installed, receiving the electricity
						they need to function at maximum capacity. Just give us a call today
						and tell us what kind of appliance you need installed. From there,
						we will provide with a free, no obligation quote on our expert
						appliance installation services.
					</P>
				</Section>

				<Section>
					<H2>Appliances We Install</H2>
					<P>
						Burton Electric LLC can carry out a range of appliance installations
						including:
					</P>
					<ul className="flex items-center gap-4 flex-wrap">
						{appliances.map((app, index) => (
							<li
								key={`app-${index}`}
								className="flex items-center gap-2 px-4 py-2 border border-primary shadow-sm w-fit rounded-lg hover:cursor-default"
							>
								<BsLightningChargeFill
									size={15}
									className="shrink-0 text-primary"
								/>
								<P className="font-medium">{app}</P>
							</li>
						))}
					</ul>
					<P>
						If you don&apos;t see the appliance you need installed listed here,
						don&apos;t fret. When you have been installing appliances for as
						long as we have, you end up being very confident in your ability to
						handle any installation. Just give us a call and let us know what
						you need installed and we&apos;ll let you know if we can help.
					</P>
				</Section>

				<Section>
					<H2>Why Burton Electric LLC Should Install Your Appliances</H2>
					<P>
						Home and business owners in the Franklin area have plenty of choices
						when they are looking for professional appliance installation
						services, so why should they seek out the help of Burton Electric
						LLC? Well, it’s simple.
					</P>
					<P>
						Friendly and responsive service. Our technicians are renowned around
						the area for their ability to listen to the concerns of clients and
						provide them with clear, concise answers to any questions. Your
						experience working with us matters to us, so you can expect us to
						put our best foot forward at all times.
					</P>
					<P>
						Extensive knowledge. Thanks to our familiarity with the makes and
						models of most major brands, you can trust us to handle and install
						even the trickiest appliance components.
					</P>
					<P>
						Safety is our priority. Installations are no place to cut corners.
						Choosing Burton Electric LLC to install your appliances means you
						are making sure everything is up to code and secure for years to
						come.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						To make sure your new appliances are receiving the power they need
						to last, give Burton Electric LLC a call today and let a trained
						professional handle its installation.
					</ContactContent>
				</ContactUs>
			</MainContainer>
		</PageContainer>
	);
};

export default page;
