import ContactUs, {
	ContactContent,
	ContactTitle,
} from "@/app/components/ContactUs";
import Footer from "@/app/components/Footer";
import H1 from "@/app/components/H1";
import H2 from "@/app/components/H2";
import Important from "@/app/components/Important";
import MainContainer from "@/app/components/MainContainer";
import P from "@/app/components/P";
import PageContainer from "@/app/components/PageContainer";
import Section from "@/app/components/Section";
import React from "react";
import { MdSavings } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Solar Panel Installation Services</Important>
				</H1>

				<Section spacing="small" className="grid lg:grid-cols-2 gap-8">
					<div className="space-y-6">
						<P>
							Solar panels have been around since the 1970s. The first few solar
							panels weren’t especially good at converting solar energy into
							electricity, but a lot of progress has been made since then.
							Modern solar panels are excellent at harnessing energy from the
							sun and converting it into electricity to power your home or
							business. As conventional forms of energy continue to rise while
							the price of solar power continues to fall, we are in the middle
							of a paradigm shift towards a greener tomorrow.
						</P>
						<P>
							If you are ready to make the leap into this greener tomorrow, then
							investing in solar panels to help transition your home or business
							into solar power is a smart investment. Of course, making the
							switch to solar panel requires a deft, experienced hand. And
							whether you are a home or a business, proper installation is key
							if you are going to make it work. Lucky for you, you have already
							found the area’s foremost solar panel experts in Burton Electric
							LLC.
						</P>
						<P>
							Burton Electric LLC was quick to adopt comprehensive solar panel
							services, seeing the value in alternative sources of energy. As a
							result, we have helped more homes and businesses in the area make
							the switch than any other electrical company. If you want to be
							confident that you are maximizing all the power given away for
							free by the sun every day, then give us a call today and we will
							be happy to help figure out how we can make your property greener
							while adding value to it and reducing the amount of money you
							spend on utilities every month.
						</P>
					</div>
					<div className="space-y-6">
						<H2>Savings With Solar</H2>
						<P>
							Though there are plenty of people who are intrigued by solar
							energy because of what it can do to reduce their carbon footprint,
							there is a majority of people who decide to take the plunge not
							because their environmental conscience tells them to but because
							their wallet is urging them to.
						</P>
						<P>
							Solar panel systems can help you save money and protect against
							rising utility rates. On average, most homes and businesses pay
							back on their systems in just seven and a half years of operation,
							and they continue to save the rest of their system’s more than
							25-year lifespan.
						</P>

						<ul className="grid md:grid-cols-2 gap-8">
							<li className="space-y-4">
								<div className="flex items-start gap-3">
									<RiMoneyDollarCircleLine size={28} className="shrink-0" />
									<span className="text-2xl font-medium">
										Electricity rates
									</span>
								</div>
								<P>
									Let’s face it, even with energy efficient appliances and
									devices, there is no sign that electricity prices are going
									down any time soon. However, if you produce your own
									electricity to offset the costs from the electric company, you
									will soon see huge savings that benefit your family or
									business.
								</P>
							</li>
							<li className="space-y-4">
								<div className="flex items-start gap-3">
									<MdSavings size={28} className="shrink-0" />
									<span className="text-2xl font-medium">
										Local financial incentives
									</span>
								</div>
								<P>
									There are all kinds of state and local government incentives
									available to property owners who make the switch to solar
									energy, which we can help you acquire thanks to our extensive
									knowledge of these programs.
								</P>
							</li>
						</ul>
					</div>
				</Section>

				<Section>
					<H2>Are Solar Panels Right for You?</H2>
					<P>
						Some people aren’t sure that they can benefit from solar panels
						because their property doesn’t get a lot of direct sunlight. Solar
						panels don’t need direct sunlight, they need the photons present in
						natural daylight, so you don’t have to worry about that being an
						issue. We’ll make sure that it works to save you money when you
						contact Burton Electric LLC today about making the switch to solar.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						For all your residential and commercial electrical work, Burton
						Electric LLC is here to help.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
