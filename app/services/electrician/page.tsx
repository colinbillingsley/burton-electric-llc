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

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Trusted and Professional Electricians</Important>
				</H1>

				<Section spacing="small" className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<P>
							When you need electrical work done on your residential or
							commercial property, the only person who should touch it is a
							licensed electrician. Of course, we understand that there are
							plenty temptations to pursue alternatives.
						</P>
						<P>
							The average person, whether they fall into the residential or
							commercial client categories, is typically under the impression
							that hiring an electrician is too expensive. As a result, they
							will try to fix or install their own wiring themselves. And if
							they aren’t confident in their ability to do it themselves, they
							will choose to hire an unlicensed electrical contractor offering
							them a low price.
						</P>
						<P>
							Now, we understand why a home or business owner would always be
							interested in saving money, but when you consider the risks
							involved in doing it yourself or hiring an unlicensed electrician,
							is the low price really worth the risk? One of the first rules of
							gambling is never take a risk you can’t afford to lose. And we are
							willing to bet that your residential or commercial property isn’t
							something you can afford to lose. But you need to be prepared for
							that possibility whenever you are led astray by the promise of
							lower prices.
						</P>
					</div>
					<div className="space-y-6">
						<P>
							If something goes wrong with your DIY electrical project, there is
							a high probability of injury or damage to your property. And you
							can bet that your insurance company won’t be too keen to pick up
							the bill when they find out the damage to your building and to
							yourself was completely self-inflicted and avoidable. So, if you
							like the price tag of doing it yourself, factor in hospital bills,
							the cost of fire restoration services and more before you go
							through with it.
						</P>
						<P>
							Furthermore, an unlicensed electrician doesn’t have a license for
							a reason. Getting your electrical license is more than memorizing
							facts and passing an exam. It holds the electrician responsible
							and liable to penalties in the event of illegal, immoral or
							incompetent actions. Those who fail to obtain a license are denied
							for a good reason. Do you really want them working on your home or
							business?
						</P>
						<P>
							If you want to have confidence an electrical project once it’s
							completed, you need to hire Burton Electric LLC’s electricians. We
							are a full-service electrical contractor company that has been
							providing residential and commercial clients with expert, reliable
							electrical services for many years.
						</P>
						<P>
							We specialize in all types of electrical work. Just give us a call
							today, tell us what you need and one of our fully licensed and
							insured electricians will provide you with a free estimate.
						</P>
					</div>
				</Section>

				<Section>
					<H2>Residential and Commercial Electricians</H2>
					<P>
						One of the things that sets Burton Electric LLC apart from other
						electrical companies in the area is that we are equally comfortable
						working in residential and commercial settings. There is no job too
						big or too small for our expertise. After all, we would rather
						provide you with affordable, professional electrical services than
						see disaster strike your home or business.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						For all your electrical needs, get in touch with Burton Electric LLC
						today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
