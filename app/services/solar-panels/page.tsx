import CenterDiv from "@/components/CenterDiv";
import ContactUs from "@/components/ContactUs";
import H2 from "@/components/H2";
import { SlideInFromLeft } from "@/components/motion/SlideInFromLeft";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { CircleDollarSign, PiggyBankIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
	title:
		"Solar Panels Nashville, Brentwood, and Franklin | Burton Electric LLC",
	description:
		"Solar panels provide environmentally friendly, cost-effective energy. Call Burton Electric LLC at (615) 830-1111 today to learn more!",
	icons: {
		icon: icon,
	},
	keywords: [
		"Solar Panel Services",
		"Solar Panels",
		"Brentwood Solar Panels",
		"Franklin Solar Panels",
		"Nashville Solar Panels",
		...baseKeywords,
	],
};

const pages = () => {
	return (
		<PageContainer>
			<SlideInFromLeft amount={0}>
				<CenterDiv>
					<PageHeading>
						<p>Solar Panel Installation Services</p>
					</PageHeading>

					<Section my="sm" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div className="space-y-6">
							<p>
								Solar panels have been around since the 1970s. The first few
								solar panels weren&apos;t especially good at converting solar
								energy into electricity, but a lot of progress has been made
								since then. Modern solar panels are excellent at harnessing
								energy from the sun and converting it into electricity to power
								your home or business. As conventional forms of energy continue
								to rise while the price of solar power continues to fall, we are
								in the middle of a paradigm shift towards a greener tomorrow.
							</p>
							<p>
								If you are ready to make the leap into this greener tomorrow,
								then investing in solar panels to help transition your home or
								business into solar power is a smart investment. Of course,
								making the switch to solar panel requires a deft, experienced
								hand. And whether you are a home or a business, proper
								installation is key if you are going to make it work. Lucky for
								you, you have already found the area&apos;s foremost solar panel
								experts in Burton Electric LLC.
							</p>
							<p>
								Burton Electric LLC was quick to adopt comprehensive solar panel
								services, seeing the value in alternative sources of energy. As
								a result, we have helped more homes and businesses in the area
								make the switch than any other electrical company. If you want
								to be confident that you are maximizing all the power given away
								for free by the sun every day, then give us a call today and we
								will be happy to help figure out how we can make your property
								greener while adding value to it and reducing the amount of
								money you spend on utilities every month.
							</p>
						</div>
						<div className="space-y-6">
							<H2>Savings With Solar</H2>
							<p>
								Though there are plenty of people who are intrigued by solar
								energy because of what it can do to reduce their carbon
								footprint, there is a majority of people who decide to take the
								plunge not because their environmental conscience tells them to
								but because their wallet is urging them to.
							</p>
							<p>
								Solar panel systems can help you save money and protect against
								rising utility rates. On average, most homes and businesses pay
								back on their systems in just seven and a half years of
								operation, and they continue to save the rest of their
								system&apos;s more than 25-year lifespan.
							</p>

							<ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<li className="space-y-4">
									<div className="flex items-start gap-3">
										<CircleDollarSign size={28} className="shrink-0" />
										<span className="text-2xl font-medium">
											Electricity rates
										</span>
									</div>
									<p>
										Let&apos;s face it, even with energy efficient appliances
										and devices, there is no sign that electricity prices are
										going down any time soon. However, if you produce your own
										electricity to offset the costs from the electric company,
										you will soon see huge savings that benefit your family or
										business.
									</p>
								</li>
								<li className="space-y-4">
									<div className="flex items-start gap-3">
										<PiggyBankIcon size={28} className="shrink-0" />
										<span className="text-2xl font-medium">
											Local financial incentives
										</span>
									</div>
									<p>
										There are all kinds of state and local government incentives
										available to property owners who make the switch to solar
										energy, which we can help you acquire thanks to our
										extensive knowledge of these programs.
									</p>
								</li>
							</ul>
						</div>
					</Section>

					<Section my="sm" className="space-y-4">
						<H2>Are Solar Panels Right for You?</H2>
						<p>
							Some people aren&apos;t sure that they can benefit from solar
							panels because their property doesn&apos;t get a lot of direct
							sunlight. Solar panels don&apos;t need direct sunlight, they need
							the photons present in natural daylight, so you don&apos;t have to
							worry about that being an issue. We&apos;ll make sure that it
							works to save you money when you contact Burton Electric LLC today
							about making the switch to solar.
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
