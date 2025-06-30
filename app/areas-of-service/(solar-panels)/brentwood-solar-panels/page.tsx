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
import { Gauge, Leaf, PiggyBank, TrendingUp } from "lucide-react";
import React from "react";

const ICONSIZE: number = 42;
const STROKEWIDTH: number = 1.5;

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Solar Panels in Brentwood</Important>
				</H1>

				<Section spacing="small">
					<P>
						If your home or business is situated in an area of Brentwood that
						gets totally saturated with sunlight on clear days, then you are
						doing yourself a huge disservice every minute you aren&apos;t taking
						advantage of solar energy. In the past, solar energy was nearly
						always met with skepticism, but the technology has made leaps and
						bounds in the last few years. Now more than ever, solar panels are
						an effective way of powering your home or business, reducing your
						carbon footprint, saving you money on your utility bills and earning
						you all kinds of special tax credits.
					</P>
					<P>
						Of course, the way to reap all the benefits of making the switch to
						solar energy is to get trusted professionals to set it up for you so
						that you can be assured that everything is up to code and ready to
						provide reliable, green energy to your Brentwood home or business.
						Burton Electric LLC has the team you need to get your solar panels
						up and running.
					</P>
					<P>
						For the last several years, Burton Electric LLC has made a point of
						learning the intricacies of solar panels and solar energy systems.
						Thanks to our dedication to keeping up with alternative energy, we
						have successfully completed the installation of commercial and
						residential solar panels all over the Brentwood area.
					</P>
					<P>
						If you are ready to make the switch to solar energy, give Burton
						Electric LLC a call today.
					</P>
				</Section>

				<Section>
					<H2>Why You Should Get Solar Panels</H2>
					<P>
						If you are still mulling the decision to get solar panels, below are
						a few compelling reasons why it will be one of the smartest
						investments you&apos;ll ever make.
					</P>

					<div className="grid md:grid-cols-2 gap-4 my-10">
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<PiggyBank
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">Save money</P>
							<P className="text-muted-foreground">
								When your home or business has solar panels, and is able to rely
								on solar energy, you can reduce your utility bills by paying a
								lower rate.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<Gauge
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">Gain control</P>
							<P className="text-muted-foreground">
								With solar panels, you will rely less on your utility company
								for your electricity needs by harnessing the sun. You are in
								control of your own energy production.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<Leaf
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">Clean energy</P>
							<P className="text-muted-foreground">
								Energy is changing and the need for it to be clean has never
								been stronger. Solar is a clean, renewable and sustainable
								source of energy. Its power isn&apos;t just good for your home
								or business, it&apos;s good for the whole planet.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<TrendingUp
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="shrink-0"
							/>
							<P className="text-2xl font-medium">
								Increase your property&apos;s value
							</P>
							<P className="text-muted-foreground">
								Homes and commercial buildings with solar capabilities typically
								sell faster and command a higher asking price than the
								neighboring buildings who haven&apos;t invested in solar panels.
								People are willing to pay a premium in exchange for lower
								monthly energy bills, so, if you are thinking about selling
								sometime in the near future, it&apos;s worth your while to
								invest in solar panels now and get more when it goes to escrow.
							</P>
						</div>
					</div>

					<P>
						These are just a few reasons why solar panels have become
						increasingly popular throughout the area. If you have any questions
						about solar panels and how they can benefit your family or
						organization, please do not hesitate to contact Burton Electric LLC.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Burton Electric LLC can help with all things related to solar
						panels. Whether it&apos;s sales, repairs, maintenance, installation
						or design, just get in touch with us and we&apos;ll be happy to
						help.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
