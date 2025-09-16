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
		"Hot Tub and Sauna Electrical Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"If you're having a new hot tub or sauna installed, choose Burton Electric LLC help you set up the electrical system. Call (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Hot Tub and Sauna Electrical Services",
		"Hot Tub and Sauna Electrical",
		"Brentwood Hot Tub and Sauna Electrical",
		"Franklin Hot Tub and Sauna Electrical",
		"Nashville Hot Tub and Sauna Electrical",
		...baseKeywords,
	],
};

const relatedTasks: string[] = [
	"Electrical troubleshooting",
	"Repair and installation of safety electrical outlets",
	"Wiring upgrades",
	"Wiring maintenance",
];

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Hot Tub and Sauna Electrical Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<p>
								Do you have difficulty relaxing or making time for yourself? If
								you do, adding a hot tub or sauna to your home can be a great
								way of making time to relax a lot easier. However, a hot tub or
								sauna can quickly become a huge headache if it&apos;s not
								installed correctly.
							</p>
							<p>
								The relaxation-enhancing properties of a hot tub or sauna
								won&apos;t be fully realized if you can&apos;t get it working,
								if it overloads your home&apos;s electrical circuit every time
								you turn it on or if it&apos;s causing your energy bills to get
								exponentially more expensive. The good news is that these
								unsavory outcomes are all very simple to avoid. All you have to
								do is call Burton Electric LLC and ask us about our hot tub and
								sauna electrical services.
							</p>
						</div>
						<div className="space-y-6">
							<p>
								By and large, most people don&apos;t think they need to consult
								with a trained, licensed and insured electrician when they add a
								hot tub or sauna to their property. Regardless of its make or
								model, whenever you are adding a hot tub or sauna to your home,
								having one of Burton Electric LLC&apos;s electricians there to
								make sure that everything has been properly installed and wired
								properly is key if you want to prevent safety, electrical and
								security issues in the future.
							</p>
							<p>
								So, if you have a hot tub or sauna that you were about to
								install, please hold off and wait for one of our electricians to
								arrive to do it for you.
							</p>
						</div>
					</Section>
					<Section my="sm" className="space-y-4">
						<H2>Trustworthy Work</H2>
						<p>
							Trustworthy Work The reason people tend to call Burton Electric
							LLC once their hot tub or sauna is ready to be installed is
							because we are known for our reliability. No matter what type of
							electrical job we have been contracted to conduct, our primary
							concern is being reliable and providing the highest level of
							service to our customers. This is especially true with hot tub and
							sauna electrical services because we know that your comfort and
							relaxation is at stake.
						</p>
						<p>
							Though we are primarily called in to conduct hot tub and sauna
							electrical installations, we can also help you with any number of
							electricity-related tasks including:
						</p>

						<ul className="space-y-2">
							{relatedTasks.map((task, index) => (
								<li key={index} className="flex items-center gap-2">
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{task}</p>
								</li>
							))}
						</ul>

						<p>
							Our hot tub and electrical services are fast, convenient,
							affordable, but most of all, you can always count on their
							quality. For a free estimate, give us a call today.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Commercial Hot Tub and Sauna Electrical Services</H2>
						<p>
							Though we typically work with residential hot tubs and saunas, our
							hot tub and sauna electrical services can be used by any gym, spa
							or hotel in the area that has been experiencing electrical
							difficulties with these essential amenities. We guarantee to
							determine the issue and fix it in hardly no time at all when you
							contact us today.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="You bought a hot tub or sauna because you wanted to relax, right?
						Well, let us make sure that everything is in good working order so
						that you can focus on feeling refreshed when you call us today."
			/>
		</PageContainer>
	);
};

export default pages;
