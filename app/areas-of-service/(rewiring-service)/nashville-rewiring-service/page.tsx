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

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Nashville Rewiring Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Things wear out with the passage of time and your Nashville home or
						business&apos;s wiring is no exception. As your wiring ages and
						starts to break down, the bigger threat it poses to your residential
						or commercial building and everyone who occupies it. Rather than
						continue to test your luck it&apos;s worth your while to get Burton
						Electric LLC&apos;s rewiring services.
					</P>
					<P>
						For the last several years, Burton Electric LLC has been proud to
						provide high-quality and efficient rewiring services to residential
						and commercial clients in the Nashville area. The reason people
						continue to seek out Burton Electric LLC&apos;s licensed and insured
						electricians whenever they need rewiring services is largely due to
						the fact that our dedication to our profession has garnered a
						reputation for being the best. And the best is exactly what you can
						expect when you choose Burton Electric LLC for our rewiring
						services.
					</P>
					<P>
						To get a free estimate on our rewiring services, give Burton
						Electric LLC a call today.
					</P>
				</Section>

				<Section>
					<H2>Signs You Need Burton Electric LLC&apos;s Rewiring Services</H2>
					<P>
						If you have never had to rewire your Nashville home or business, it
						can be difficult to know whether or not you could benefit from our
						rewiring services. And since you don&apos;t want the smoke alarm
						going off in the middle of the night because of an electrical fire,
						here is what you need to look out for. If any one or more of the
						symptoms below describe your home or business, give Burton Electric
						LLC a call immediately.
					</P>
					<P>
						Frequent blown fuses or tripped breakers. While there a couple of
						different explanations for why your home or business&apos;s fuses
						are getting blown or the breakers tripped regularly, it usually
						indicative of a worn out electrical system or one that can&apos;t
						handle the amount of electricity your various appliances and devices
						are demanding to operate.
					</P>
					<P>
						Buzzing or sizzling sounds in your wiring or outlets. This is a
						surefire sign that you are overdue for a rewiring. As soon as you
						hear buzzing, call Burton Electric LLC.
					</P>
					<P>
						Loose outlets. If plugs wiggle and fall out of electrical outlets,
						it&apos;s about time you upgrade to modern outlets, which are
						included in most cases of rewiring.
					</P>
					<P>
						The building is over 40 years old. If you live in an older home or
						work in an older building, the existing electrical system is very
						likely wearing out. It is very possible that the existing system
						relies on aluminum wires instead of copper, which means your system
						is not adequately equipped to meet modern energy demands, increasing
						the risk of fire and shock.
					</P>
					<P>
						You only have two-pronged outlets. All of your outlets should be
						grounded, i.e., three-pronged, to reduce the threat of
						electrocution. If you only have two-pronged outlets, it is high time
						you get rewired and upgraded.
					</P>
					<P>
						Burning smell. Burned or overheated wires give off a noticeable
						burning odor and it won&apos;t be long before a fire breaks out.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Reduce the risk of electrical fires and get Burton Electric
						LLC&apos;s highly skilled electricians to rewire your Nashville home
						or business today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
