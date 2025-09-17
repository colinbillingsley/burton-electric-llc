import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import {
	AlertTriangle,
	CloudLightning,
	Factory,
	Plug,
	PowerOffIcon,
} from "lucide-react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title:
		"Surge Protection Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC will protect your electrical devices from power surges by ensuring you have adequate surge protection. Call us at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Surge Protection Services",
		"Surge Protection",
		"Brentwood Surge Protection",
		"Franklin Surge Protection",
		"Nashville Surge Protection",
		...baseKeywords,
	],
};

const ICONSIZE: number = 28;

const powerSurges: { title: string; desc: string; icon: ReactNode }[] = [
	{
		title: "Overloaded outlets and circuits",
		desc: "Anywhere you have a tangled web of wires, it likely means that you have too many appliances and electronics plugged into the same socket, which can lead to power surges. If you are experience power surges, we will happily check to see if all of the outlets in a room are operation on the same circuit. If so, it might not be an outlet problem but a circuit problem.",
		icon: <Plug size={ICONSIZE} />,
	},
	{
		title: "Damaged wiring",
		desc: "Pests like mice can chew on the wiring inside the walls of your home or business and cause the wiring the fail. Damaged or exposed wires can cause power surges because the electricity flowing through them is not being directed in the way it normally would.",
		icon: <AlertTriangle size={ICONSIZE} />,
	},
	{
		title: "Lightning strikes",
		desc: "Lightning touching down near your power line can lead to an extra spike in electrical voltage. Your cable box, lamp or computer won`t stand a chance against these severe types of surges unless you have surge protection in place.",
		icon: <CloudLightning size={ICONSIZE} />,
	},
	{
		title: "High-power electrical devices",
		desc: "High-energy appliances or machines like elevators, refrigerators and air conditioners have all been known to cause spikes because when they power on they draw an abnormally large amount of electricity and overpowers any other appliances and electronics in its path.",
		icon: <Factory size={ICONSIZE} />,
	},
	{
		title: "Power outages",
		desc: "The massive burst of energy that turns the power back on for a whole neighborhood can do serious damage to whatever is still connected.",
		icon: <PowerOffIcon size={ICONSIZE} />,
	},
];

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Surge Protection Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Today&apos;s homes and businesses are filled with sensitive
							electronics that are easily damaged by common power surges, spikes
							or impulses. Of course, no home or business owner suspects that
							they will succumb to the damaging effects of an electrical surge,
							but isn&apos;t it better to be safe than sorry? When you consider
							that it could cost anywhere from 10 to 20 thousand dollars to
							replace all the electronics in your home or business, you better
							believe that investing in surge protection services is worth your
							while.
						</p>
						<p>
							Making sure that your home or business receives the best possible
							protection against electrical surges is not a job for
							do-it-yourselfers. You need to work with a skilled professional
							who understands electricity and the best methods to protect your
							home or business against it when it becomes unruly. To acquire the
							services of a trained, licensed and insured electrical
							professionals who can lend their surge protection expertise for an
							affordable rate, get in touch with Burton Electric LLC today.
						</p>
						<p>
							Burton Electric LLC has been proud to serve homes and businesses
							in the area, equipping with everything they need to protect
							themselves from surges for an affordable price. To find out more
							about how our team of skilled electricians can provide you with
							superior protection against surges, give Burton Electric LLC a
							call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Causes of Power Surges</H2>
						<p>
							You might be surprised to learn that the average home experiences
							approximately 20 power surges per day. Even though the majority of
							power surges your home or business experiences are minor, they are
							far from harmless. They all have the potential to damage your
							outlets, fry your appliances and electronics and they can spark
							electrical fires. Here are some of the more common causes of power
							surges.
						</p>

						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
							{powerSurges.map((surge, index) => (
								<li
									key={`surge-${index}`}
									className="space-y-4 p-6 border shadow-md rounded-md"
								>
									<div className="flex items-start gap-2">
										<i className="shrink-0">{surge.icon}</i>
										<span className="text-2xl font-medium">{surge.title}</span>
									</div>
									<p className="text-sm">{surge.desc}</p>
								</li>
							))}
						</ul>

						<p>
							As you can see, there is very little you can control when it comes
							to surges. All you can do is have the right protections in place,
							which is why you should call Burton Electric LLC about our surge
							protection services today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="For all your residential and commercial electrical work, Burton
						Electric LLC is here to help."
			/>
		</PageContainer>
	);
};

export default pages;
