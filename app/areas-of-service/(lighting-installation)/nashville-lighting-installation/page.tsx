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
import { BsLightningChargeFill } from "react-icons/bs";

const expected: string[] = [
	"Safety and security",
	"General comfort",
	"Energy efficiency",
	"Kitchen lighting",
	"Curb appeal",
];

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Nashville Lighting Installations</Important>
				</H1>

				<Section spacing="small">
					<P>
						The lighting in your Nashville home or business is more important
						than you might give it credit for. A lack of proper lighting can
						make your home feel sterile, cold and uncomfortable. When a business
						doesn&apos;t give much thought to how its lighting is designed, they
						may not be so inclined to see what you have to offer.
					</P>
					<P>
						If your lighting isn&apos;t doing your Nashville home or business
						justice, then calling Burton Electric LLC to find out what you can
						do to improve it is really worth your while. Lighting is an
						important aspect of interior design because it enhances the esthetic
						appeal and creates the mood and atmosphere of any space. And, like
						any project that involves electricity, when you are ready to upgrade
						your home or business&apos;s current lighting, you are going need to
						get a licensed and insured electrician to make sure the installation
						is a success.
					</P>
					<P>
						Burton Electric LLC&apos;s skilled and fully certified electricians
						have successfully completed thousands of lighting installations for
						residential and commercial clients all over the Nashville area.
						Thanks to all of our experience completing residential and
						commercial lighting installations, we are very comfortable working
						on projects of any size or scope. All you need to do is give Burton
						Electric LLC a call today, tell us what you have in mind or what you
						don&apos;t like about your current lighting and we&apos;ll provide
						you with a free estimate on our installation services.
					</P>
				</Section>

				<Section>
					<H2>What You Can Expect After a Lighting Installation</H2>
					<P>
						Once you invest in Burton Electric LLC&apos;s lighting installation
						services, there are a range of benefits homes and businesses can
						expect to reap. Whether inside or outside, you should notice
						improvements in:
					</P>
					<ul className="space-y-4">
						{expected.map((item, index) => (
							<li key={`expected-${index}`} className="flex items-center gap-2">
								<BsLightningChargeFill
									size={15}
									className="shrink-0 text-primary"
								/>
								<P className="font-medium">{item}</P>
							</li>
						))}
					</ul>
					<P>
						Whether you need additional exterior lighting, a redesign of your
						interior lighting or accent lighting to highlight your home or
						business, Burton Electric LLC&apos;s expert electricians will be
						available to assist you every step of the way. From the initial
						design to future maintenance, our primary objective is to make sure
						all of our clients, residential and commercial, know that they can
						depend on us no matter what they need. And when you have installed
						as many different lighting systems as we have, the professional
						advice we are sitting on is expansive. So, if you have a question
						about what we can do for your home or business&apos;s needs,
						don&apos;t hesitate to ask us.
					</P>
				</Section>

				<Section>
					<H2>Custom Lighting Installations</H2>
					<P>
						Burton Electric LLC understands and appreciates that no two homes or
						businesses are exactly the same. This means that going in to a
						lighting installation with preconceived notions of what you need can
						be counterproductive. We approach every installation as a custom job
						as means of making sure all your lighting needs are being met.
					</P>
					<P>
						So, to get the lighting you have always wanted installed by a
						trained professional who excels at collaboration, call Burton
						Electric LLC today.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For all your lighting installation needs, Burton Electric LLC is
						here to help you make your residential or commercial property more
						energy efficient and beautiful with our professional expertise.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
