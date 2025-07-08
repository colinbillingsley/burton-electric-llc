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
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title:
		"Nashville Hot Tub and Sauna Electrical Services | Burton Electric LLC",
	description:
		"Burton Electric LLC has the skills and expertise to correctly install the electrical systems for any hot tub or sauna in Nashville",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Hot Tub and Sauna Electrical Services",
		"Nashville Hot Tub and Sauna Electrical Services",
		"Franklin Hot Tub and Sauna Electrical Services",
		"Hot Tub and Sauna Electrical Services",
		"Nashville Electrician",
		"Nashville Electrical Contractor",
		"Nashville Residential Electrician",
		"Brentwood Electrician",
		"Brentwood Electrical Contractor",
		"Brentwood Residential Electrician",
		"Franklin Electrician",
		"Franklin Electrical Contractor",
		"Franklin Residential Electrician",
	],
};

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Nashville Electrical Retrofitting Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Investing in your comfort is always a smart investment. And whether
						you want to spend money on something that will ease your aching
						muscles or help you sweat out any toxins in your body, you&apos;ll
						be glad you did when you see how much value these amenities can add
						to your Nashville home. Of course, adding a hot tub or sauna to your
						Nashville is an exciting proposition but you shouldn&apos;t go ahead
						with it unless the installation is conducted under the supervision
						of a local electrical professional.
					</P>
					<P>
						Installing a hot tub or sauna will require any number of electrical
						troubleshooting, repair and installation of safety electrical
						outlets, wiring upgrades and wiring maintenance to make sure that
						you can enjoy your new home spa to the fullest. After all, the last
						thing you want is to be in the middle of a soak or a steam and
						suddenly be without power because your new home spa blew a fuse. So,
						rather than get left in the dark, make sure that your new hot tub or
						sauna are installed by Burton Electric LLC&apos;s team of skilled,
						licensed and insured electricians.
					</P>
					<P>
						Burton Electric LLC has been proud to serve the Nashville area for
						many years. Our team specializes in a variety of electrical tasks,
						but none bring us the same sense of delight quite like wiring a hot
						tub or sauna. We are always thrilled to help install, or repair for
						that matter, hot tubs and saunas anywhere in the Nashville area
						because we know that you depend on it for your comfort. So, if you
						want to start feeling better about yourself, give Burton Electric
						LLC a call today because our hot tub and electrical services are the
						first step to maximizing your comfort.
					</P>
				</Section>

				<Section>
					<H2>Commercial Hot Tub and Sauna Electrical Services</H2>
					<P>
						Though our hot tub and sauna electrical services are most commonly
						acquired by people in the area who have decided to take measures to
						add more comfort and convenience to their lives by getting one of a
						hot tub or sauna installed into their homes, there is no question
						that our team of licensed and insured electricians can handle
						commercial jobs as well.
					</P>
					<P>
						If you run a gym, a spa, a hotel or some other type of commercial
						property that offers these tension-melting amenities to clients,
						Burton Electric LLC will be more than happy to help you install or
						repair the electrical components necessary for these features to
						provide the therapeutic relaxation so many people depend on.
					</P>
					<P>
						All you have to do if you are a commercial client that requires our
						commercial hot tub and sauna electrical services is contact Burton
						Electric LLC today and specify that you are a commercial client that
						requires multiple hot tubs or saunas repairs or installed. Once we
						know the scale of your project, we will be able to give you a free
						quote on our services.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Burton Electric LLC believes that your comfort should be a priority,
						which is why we are ready to help install or repair the electrical
						work of your hot tub or sauna as soon as you give us a call today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
