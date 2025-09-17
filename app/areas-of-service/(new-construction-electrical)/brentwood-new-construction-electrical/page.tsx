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
	title: "Brentwood New Construction Electrical Services | Burton Electric LLC",
	description:
		"For any new construction project in Brentwood, you can rely on Burton Electric LLC for efficient electrical work. Call us at (615) 830-1111 today!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Brentwood New Construction Electrical Services",
		"Nashville New Construction Electrical Services",
		"Franklin New Construction Electrical Services",
		"New Construction Electrical Services",
		...baseKeywords,
	],
};

const newConstruct: string[] = [
	"Service panels",
	"Outlet installation",
	"Light switches and fixtures",
	"Specialty services",
];

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Brentwood New Construction Electrical Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Most things depend on a strong start if they are going to succeed
							and your Brentwood home or business&apos;s electrical system is no
							different. More often than not, electrical issues are the result
							of an improper installation that causes an accelerated
							degradation. Of course, there&apos;s not much you can do to make
							sure a residential or commercial building&apos;s electrical
							infrastructure is properly installed when purchasing or leasing an
							existing home or commercial space in the Brentwood area, but you
							can when you are building something from scratch.
						</p>
						<p>
							When you take the time to make sure your new structure has been
							properly equipped with all it needs to receive and distribute
							power safely and reliably, you can be confident that you have made
							a good investment. After all, there are few things that bother
							residents, staff and clientele quite like frequent interruptions
							in their electrical service.
						</p>
						<p>
							To make sure that your new construction receives the best possible
							electrical installation services, give Burton Electric LLC a call
							today. Our team of licensed and insured electricians have worked
							closely with Brentwood developers and contractors for many years,
							assisting them in making sure that their buildings have everything
							they need to receive and distribute power as needed.
						</p>
						<p>
							If you are about to break ground on a new home or commercial in
							the Brentwood and you want to make sure that the electrical system
							is primed to last for a long time, call Burton Electric LLC today
							and ask us about our new construction electrical services.
						</p>
					</Section>

					<Section my="sm" className="space-y-6">
						<H2>
							What&apos;s Included in Our New Construction Electrical Services?
						</H2>
						<p>
							Whenever we are tasked in adding the electrical systems to a new
							construction, there is a lot of ground to cover. Whether you have
							already plotted out how you want the electrical system installed
							and simply need the appropriate skilled tradespeople to carry out
							the nitty gritty installation work or you need us to assist you
							with how the electrical infrastructure fits into the design, we
							can help you with:
						</p>

						<ul className="space-y-4">
							{newConstruct.map((construct, index) => (
								<li key={`light-${index}`} className="flex items-center gap-2">
									<Zap size={15} className="shrink-0 text-primary" />
									<p className="font-medium">{construct}</p>
								</li>
							))}
						</ul>

						<p>
							When you have been in this trade as long as some of Burton
							Electric LLC&apos;s electricians, it is always exciting to get the
							opportunity to work with a blank slate. We relish the opportunity
							to find innovative new ways of distributing power throughout
							structures of any size. So, no matter what you have in mind for
							your new Brentwood home or business, give us a call today and we
							will be happy to provide you with a free quote on our new
							construction electrical services.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Safety and Quality</H2>
						<p>
							Safety and quality are the two things that guide Burton Electric
							LLC. Everything we do is governed by making it safe and the
							highest quality possible, including new construction electrical
							services. So, this is what you can expect when you work with us.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="Making sure that your new home or business's electrical system
						is expertly installed is a recipe for sustained success in the
						future. So, give us a call today if you want to avoid electrical
						issues in the near future."
			/>
		</PageContainer>
	);
};

export default page;
