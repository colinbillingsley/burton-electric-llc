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
					<Important>Franklin Residential Ceiling Fan Installations</Important>
				</H1>

				<Section spacing="small">
					<P>
						If you are dissatisfied with how much you are spending on energy
						every month and your Franklin home&apos;s lighting could use a
						slight makeover, then you might want to consider replacing it with a
						ceiling fan. Ceiling fans can provide excellent lighting for every
						room in your home while reducing your energy costs. Plus, depending
						on the style of ceiling fan you choose, it can add value to your
						home.
					</P>
					<P>
						Given all the good ceiling fans can provide to your Franklin home,
						you must be kicking yourself for not having one installed sooner.
						Well, better late than ever, especially when you choose Burton
						Electric LLC to complete your residential ceiling fan installation.
					</P>
					<P>
						Burton Electric LLC is an electrical company made up of trained,
						licensed and insured electricians that have completed hundreds of
						residential ceiling fan installations over the years. Thanks to our
						extensive experience completing these types of installations, our
						electricians are guaranteed to get it done faster, safer and at a
						better price than any other electrical company in the Franklin area.
					</P>
					<P>
						When you are ready to get more beautiful lighting, energy savings
						and exceptional decor added to your home in one fell swoop, get in
						touch with Burton Electric LLC.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Seasonal Benefits of Ceiling Fans</H2>
					<P>
						Normally, when people think about any time of fan, they think of it
						as a means of cooling down. And while your newly installed ceiling
						fan can certainly help circulate cool air throughout your home
						during warmer weather, you can also rotate the blades in the other
						direction to push warm air down. As you may already be aware of,
						heat rises. But when you have some force pushing the hot air down,
						it helps keep your rooms warmer throughout the winter season.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Endless Design Options</H2>
					<P>
						One of the reasons why residential ceiling fan installations can
						increase the value of your home is because they come in a ton of
						different designs. And best of all, there isn&apos;t a make, model
						or design of ceiling fan that we haven&apos;t successfully
						installed. So, if you find a residential ceiling fan that you
						absolutely fall in love with, you don&apos;t have to pause to
						consider whether it will end up collecting dust. We will take care
						with making sure it&apos;s compatible with your home&apos;s
						electrical infrastructure.
					</P>
				</Section>

				<Section spacing="small">
					<H2>Here to Help</H2>
					<P>
						Obviously, when people call us up for our residential ceiling fan
						installation services, our licensed and insured electricians will be
						prepared to make sure it is correctly wired and safely secured. But
						our expertise goes far beyond just the installation of ceiling fans.
						When you have been installing ceiling fans for as long as we have,
						you can&apos;t help but pick up little kernels of wisdom along the
						way. So, no matter what questions you might have for us, please do
						not hesitate to ask us. Our goal is to provide any help we can,
						whenever we can.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For reliable and affordable residential ceiling fan installation
						services, give Burton Electric LLC a call to request a free quote.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
