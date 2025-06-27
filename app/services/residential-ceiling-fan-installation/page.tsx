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
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdLight, MdOutlineEnergySavingsLeaf } from "react-icons/md";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					Residential
					<Important>Ceiling Fan Installation Services</Important>
				</H1>

				<Section spacing="small" className="grid md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<P>
							Whether you want a ceiling fan in your kitchen, bathroom, bedroom
							or even outdoors, it is almost always a smart investment. Ceiling
							fans aren’t just an excellent piece of decor for any area of your
							home, they can also increase the energy efficiency and overall
							comfort of virtually any home in the area.
						</P>
						<P>
							With these benefits your home is waiting to reap, you are probably
							ready to rush to the store to grab yourself that brand-new ceiling
							fan you’ve been thinking about buying, but we must ask you to be
							patient and get in touch with Burton Electric LLC first. Whether
							you want a ceiling fan with lights or without, a ceiling fan with
							remote controls or one for your outdoor space, you need to think
							about who is going to install it.
						</P>
					</div>
					<div className="space-y-6">
						<P>
							Installing a ceiling fan isn’t as simple as climbing up on your
							ladder and plugging it in. You need an intimate understanding of
							how your home’s electrical infrastructure works to successfully
							install a ceiling fan. Without an expertise in all things
							electrical, you won’t be installing a ceiling fan so much as a
							fire hazard. Plus, there is a serious risk of injury when you do
							take the matter of installation in your own hands. Rather than put
							yourself and your home in danger over a new ceiling fan, give
							Burton Electric LLC a call.
						</P>
						<P>
							Burton Electric LLC’s licensed and insured electricians have a ton
							of experience installing ceiling fans in homes all over the area.
							Our electricians can successfully install ceiling fans wherever
							you need them, even there is no existing wiring. We can run the
							ceiling fan wiring wherever it’s needed. Regardless of size or
							style, our electricians have the expertise necessary to safely
							connect your new ceiling fan in a safe, efficient and affordable
							manner.
						</P>
						<P>
							To request a free quote on Burton Electric LLC’s residential
							ceiling fan installation services, give us a call today.
						</P>
					</div>
				</Section>

				<Section>
					<H2>What A Ceiling Fan Can Do for Your Home</H2>
					<P>
						You probably don’t realize how much good a professionally installed
						residential ceiling fan can do for your home. A few of the
						highlights include:
					</P>
					<ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
						<li className="space-y-4">
							<div className="flex items-start gap-2">
								<MdOutlineEnergySavingsLeaf size={32} className="shrink-0" />
								<span className="text-2xl font-medium">Energy Savings</span>
							</div>
							<P>
								In the winter, heated air rises and collects around the ceiling.
								Ceiling fans circulate the warm air and push it back down to
								where you are. In the summer, ceiling fans create a cool breeze
								to keep air circulating so that it does not become too damp or
								stagnant. When you let a ceiling fan redistribute the hot or
								cool air in your home, you are taking a significant amount of
								strain off your air conditioner and heater.
							</P>
						</li>
						<li className="space-y-4">
							<div className="flex items-start gap-2">
								<HiOutlineLightBulb size={32} className="shrink-0" />
								<span className="text-2xl font-medium">Light Up a Room</span>
							</div>
							<P>
								While it’s not totally necessary to get a ceiling fan with
								lights, they are always a great source of overhead lighting. So,
								if you want to save energy while changing up the ambiance of a
								certain room, just let us know and we’ll take care of it.
							</P>
						</li>
						<li className="space-y-4">
							<div className="flex items-start gap-2">
								<MdLight size={32} className="shrink-0" />
								<span className="text-2xl font-medium">Decoration</span>
							</div>
							<P>
								Want to draw guests’ eyes upward to make the room look larger?
								Ceiling fans of all shapes and sizes can do this for you.
							</P>
						</li>
					</ul>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						Call Burton Electric LLC today to get a free quote on our
						residential ceiling fan installation services.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
