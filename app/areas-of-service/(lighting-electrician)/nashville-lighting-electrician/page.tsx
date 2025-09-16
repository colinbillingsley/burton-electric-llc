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
	title: "Nashville Lighting Electricians | Burton Electric LLC",
	description:
		"If you're looking for a lighting electrician in Nashville whose work you can trust, call Burton Electric LLC at (615) 830-1111 today!",
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

const lightingInstallations: string[] = [
	"Incandescent",
	"Fluorescent",
	"Metal halide",
	"High-pressure sodium",
	"Neon",
	"LED lights",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Nashville Lighting Electricians</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Good lighting is something that all buildings, both residential
							and commercial, in the Nashville area need to have if they are
							going to offer their occupants the best quality of life. In fact,
							the basic function of lighting design is to make you feel good.
							Whether it&apos;s warm lighting in the bedroom to help you get
							cozy or bright lighting to help you stay focused at work, a
							well-designed lighting plan can do wonders.
						</p>
						<p>
							Of course, the design of your Nashville home or business&apos;s
							lighting is a fraction of the battle. After all, a design is
							nothing but pencil on paper. When you are ready to bring the
							design to life, you need the expertise of commercial and
							residential lighting electricians. Only trained, licensed and
							insured lighting electricians should handle the installation and
							necessary maintenance because they are the only ones with the
							skills to safely make your design work as you planned.
						</p>
						<p>
							If you want to work with the most reliable, professional and
							affordable lighting electricians Nashville has to offer, get in
							touch with Burton Electric LLC today. Our lighting electricians
							have built up a solid reputation for quality work and impeccable
							service over the years thanks to our dedication to our trade. We
							appreciate the importance of lighting in both commercial and
							residential settings, which is why we always put our best foot
							forward to make sure that your system is safely installed and that
							any issues you are facing are dealt with in an efficient manner.
						</p>
						<p>
							For all your residential and commercial lighting needs, get in
							touch with Burton Electric LLC today.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>Lighting Installations</H2>
						<p>
							Whether you are building a new home or commercial building
							somewhere in the Franklin area or renovating an existing space,
							this is the perfect time to get new lighting. With so much
							experience installing lights, Burton Electric LLC can complete any
							type of lighting installation that you have planned. Our team is
							familiar and can help you with installing:
						</p>
						<ul className="flex items-center gap-4 flex-wrap">
							{lightingInstallations.map((service, index) => (
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
							All you have to do is pick up the phone and call Burton Electric
							LLC to arrange for a free consultation. We will cross examine your
							ideas against our professional experience to develop an
							installation plan as well as help you choose the best quality
							products that fit your vision and budget. We pride ourselves on
							our ability to conduct even the most elaborate lighting
							installations without going over budget because our client&apos;s
							trust and satisfaction is too important to us.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Lighting Maintenance</H2>
						<p>
							Whenever your home or business&apos;s lighting system isn&apos;t
							working to the best of its ability, getting it back to normal is
							as simple as calling Burton Electric LLC. There are plenty of
							reasons why your lights might be malfunctioning, so we&apos;ll
							conduct a thorough inspection of your home and business to locate
							the issue and resolve it in no time at all.
						</p>
						<p>
							No matter the problem with your home or business&apos;s lights,
							experienced help is only a phone call away.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="The top commercial and residential lighting electricians are ready
						to serve when you get in touch with Burton Electric LLC today."
			/>
		</PageContainer>
	);
};

export default page;
