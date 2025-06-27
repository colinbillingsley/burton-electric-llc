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

export const appliances: string[] = [
	"Refrigerators",
	"Ovens",
	"Air conditioners",
	"Dishwashers",
	"Washers and Dryers",
	"Built-in microwaves",
	"Electric heaters",
	"Dehumidifiers",
	"Pool pumps",
	"Garbage disposals",
	"And many more",
];

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Brentwood Appliance Installation</Important>
				</H1>

				<Section spacing="small">
					<P>
						If you&apos;ve never had to install a new appliance in your
						Brentwood home or business, you are probably under the assumption
						that it&apos;s a relatively simple process to get it up and running.
						Just plug it and your new fridge is good to go, right? Well,
						it&apos;s not that easy. Whenever you have to install a new
						appliance, it is always best to have a licensed and insured
						electrician on-site to assist you with the installation.
					</P>
					<P>
						Why would you need an electrician to help you install the appliance
						in question? The circuit in which you are attempting to install the
						device may not be able to provide adequate and efficient
						electricity, which can do damage to the building&apos;s electrical
						system and the appliance itself. If the circuit you want the
						appliance to connect to can&apos;t supply the amps necessary to
						power it properly, then an electrician will be able to design new
						wiring and receptacles to meet the energy needs of the appliance.
					</P>
					<P>
						So, if you want to make sure that your new appliances are working
						properly and at maximum efficiency, you need to give Burton Electric
						LLC a call. Our licensed and insured residential and commercial
						electricians have a ton of experience installing all major makes and
						models of appliances. When you hire Burton Electric LLC&apos;s
						electricians to install your appliances, we guarantee that we will
						work our absolute hardest to make sure that your new appliance is
						set up for success.
					</P>
					<P>
						Our expert electricians are among the most trusted tradespeople in
						the Brentwood area because the only thing they are interested in is
						delivering quality work and keeping customers satisfied. Their
						dedication to their craft is unfortunately uncommon nowadays, but at
						least it helps Burton Electric LLC be the obvious choice for
						commercial and residential electrical services in the Brentwood
						area.
					</P>
					<P>
						To request a free estimate on our appliance installation services,
						call Burton Electric LLC today.
					</P>
				</Section>

				<Section>
					<H2>Appliance Installation and Panel Upgrades</H2>
					<P>
						When people in Brentwood purchase new appliances for either their
						home or business, they rarely take the time to think about whether
						or not their electrical system will be able to keep up with its
						energy demands. It&apos;s a fair oversight because few people have
						the training to recognize that the panel in their home or business
						won&apos;t be able to provide the electricity necessary to safely
						and efficiently power this new appliance.
					</P>
					<P>
						In the event that you need to upgrade your home or business&apos;s
						electrical panel, Burton Electric LLC&apos;s electricians are very
						experienced when it comes to upgrades. So, we can equip you with a
						panel that can make up for your home or business&apos;s new energy
						demands. When you do, you can rest assured knowing that you are up
						to code and your appliances are working at maximum efficiency.
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
						If you don’t see the appliance you need installed listed here, don’t
						fret. When you have been installing appliances for as long as we
						have, you end up being very confident in your ability to handle any
						installation. Just give us a call and let us know what you need
						installed and we’ll let you know if we can help.
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
