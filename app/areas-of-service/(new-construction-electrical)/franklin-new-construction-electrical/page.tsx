import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Franklin New Construction Electrical Services | Burton Electric LLC",
	description:
		"For any new construction project in Franklin, you can rely on Burton Electric LLC for efficient electrical work. Call us at (615) 830-1111 today!",
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

const page = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Franklin New Construction Electrical Services</p>
					</PageHeading>

					<Section my="sm" className="space-y-4">
						<p>
							Building a new home or business in the Franklin area is a
							considerably difficult task. From grading and preparing the site
							for construction to putting the finishing touches on the
							structure, there is a lot to stay on top of it. One of the most
							difficult things to do when building a new home or business is
							making sure that it has been properly wired to safely distribute
							power to the building&apos;s occupants.
						</p>
						<p>
							Under no circumstances should you ever let an unlicensed
							contractor handle the installation of your new building&apos;s
							electrical system. Doing so is negligent and a surefire way that
							some kind of tragic accident befalls the property. Wiring a new
							construction requires strict adherence to electrical safety
							standards and the observation of Franklin&apos;s building codes.
							The risk of an electrical fire from faulty wiring is high, which
							is why you need to hire licensed electrical professionals to
							provide new construction electrical services.
						</p>
						<p>
							If you are looking for electricians who have plenty of experience
							providing new construction electrical services and intimate
							knowledge of Franklin&apos;s zoning and building codes, then get
							in touch with Burton Electric LLC today. We have helped all kinds
							of developers and construction companies in the area successfully
							wire their new structures to safely receive and distribute power.
						</p>
						<p>
							There is no substitute for experienced tradespeople and that is
							especially true whenever you need new construction electrical
							services. Give us a call today to explain your upcoming
							construction project, its electrical needs and we will be glad to
							provide you with a free estimate.
						</p>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Why Work With Us</H2>
						<p>
							New construction projects inevitably means a lot of irons in the
							fire. Whether you do it deliberately or not, corners have a
							tendency to be cut in throughout the construction process. One
							area where you absolutely cannot afford to cut corners is in the
							installation of your new building&apos;s electrical hardware. Why
							should you only work with the electricians at Burton Electric LLC
							when you need new construction electrical services?
						</p>

						<p>
							First, our licenses protects both you and the electrician in the
							event that anything goes wrong. It&apos;s a sad fact of life that
							accident do happen. And in the event that something does go wrong,
							do you really want to add an unlicensed contractor&apos;s hospital
							bills to your budget? Working with us means that you are not
							liable for any damages in the event of an accident, which is
							always a possibility given how volatile and hazardous electricity
							can be.
						</p>

						<p>
							Beyond the peace of mind our electricians bring in the event of
							the worst, having experienced electricians on-site guarantees that
							all the work they do will conform to all the necessary safety
							rules and regulations. Not only does this make for a smoother and
							cleaner installation, but it also provides an assurance to the
							safety of the final product.
						</p>
					</Section>
				</CenterDiv>
			</SlideInFromLeft>
			<ContactUs
				desc="If you need new construction electrical services, give us call today
						and we can either set up a consultation or provide you with a free
						quote."
			/>
		</PageContainer>
	);
};

export default page;
