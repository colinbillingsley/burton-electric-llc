import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Plug, Zap } from "lucide-react";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title:
		"Electrical Repairs Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Burton Electric LLC's electrical experts will correctly repair any issue with your home or business' electrical system. Call us at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Electrical Repairs",
		"Brentwood Electrical Repairs",
		"Franklin Electrical Repairs",
		"Nashville Electrical Repairs",
		...baseKeywords,
	],
};

const ICONSIZE = 28;

const signsOfRepairs: {
	title: string;
	desc: string;
	icon: ReactNode;
}[] = [
	{
		title: "Broken Outlets",
		desc: "Like anything in your home or business, outlets wear out. If you have a dead outlet or light switch, there is a broken wire that needs to be repaired. It's common for outlets to spark from time to time, but if it's happening regularly, it's best to give us a call before a fire or injury does significant damage.",
		icon: <Plug size={ICONSIZE} className="shrink-0" />,
	},
	{
		title: "Tripped Circuit Breakers",
		desc: "Circuit breakers automatically cut power when a fault is detected. If it's happening almost all the time, then there's no question that there is something wrong with the system, which requires our immediate attention if you want to come out unscathed.",
		icon: <Zap size={ICONSIZE} className="shrink-0" />,
	},
];

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Electrical Repair Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								If you are a homeowner, you know that there&apos;s nothing that
								detracts from your comfort more than when your electricity
								isn&apos;t working properly. Without reliable lighting and power
								for all your devices and appliances, it won&apos;t be long
								before you start thinking about moving.
							</p>
							<p>
								As for business owners, when you have to deal with electrical
								hiccups, it can be cause for serious concern. There isn&apos;t a
								business in the world that doesn&apos;t rely on electricity for
								their daily operations and if you are constantly dealing with
								interruptions with your electrical service, you can&apos;t help
								but wonder how this is affecting your business&apos;s growth and
								profitability.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								Of course, electrical problems can be more than just a nuisance.
								They are typically a sign that there is a serious hazard
								looming, which is why you must be proactive about finding
								reliable, licensed and insured electricians who can complete the
								necessary electrical repairs efficiently. And if you are reading
								this, then you are in the right place.
							</p>
							<p>
								Burton Electric LLC has been proud to serves homes and local
								business for many years, providing high quality and reliable
								electrical services you can trust. No matter what issue
								you&apos;re experiencing with your home or business&apos;s
								electricity, we guarantee that we will quickly identify the
								problem and find a lasting solution.
							</p>
							<p>
								Just give Burton Electric LLC a call today, tell us about the
								problem you&apos;re experiencing, and we will fix it for a
								reasonable price.
							</p>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Signs You Need Electrical Repairs</H2>
						<p>
							There are few signs that you need electrical repairs that are
							universally known. For example, if your home or business&apos;s
							outlets are emitting a burning smell, you need to pick up the
							phone and call Burton Electric LLC immediately. That said, there
							are few telltale signs that you need electrical repairs you may
							not be aware of. Here are a couple of these warning signs to be on
							the look out for, because the sooner you our electricians to come
							repair the issue, the safer your home or business will be.
						</p>
						<ul className="grid md:grid-cols-2 gap-8 mt-8">
							{signsOfRepairs.map((item, index) => (
								<li
									key={`repair-${index}`}
									className="space-y-6 h-full border rounded-md p-6 bg-white shadow-md"
								>
									<p className="text-2xl font-medium flex items-center gap-3">
										<i>{item.icon}</i>
										<span>{item.title}</span>
									</p>
									<p>{item.desc}</p>
								</li>
							))}
						</ul>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Though we rely on it all the time, electricity is not a force you
						want to mess with. Leave the repairs to the professionals at Burton
						Electric LLC because we can handle it safely, efficiently and
						effectively."
			/>
		</PageContainer>
	);
};

export default pages;
