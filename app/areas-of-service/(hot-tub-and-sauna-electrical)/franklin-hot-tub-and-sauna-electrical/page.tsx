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
import { Droplets, HeartPulse, SmilePlus } from "lucide-react";
import React from "react";

const ICONSIZE: number = 32;

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Franklin Hot Tub and Sauna Electrical Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Whenever a residential or commercial property owner in the Franklin
						area decides to add a hot tub and sauna, their goal is no doubt to
						decrease stress since hot tubs and saunas provide their users with
						relaxation. Of course, the only way hot tubs and saunas can
						effectively provide their users with more relaxation is by making
						sure that they are working correctly.
					</P>
					<P>
						A hot tub and sauna can be relaxing and therapeutic assets that adds
						value to any home or business in the Franklin area, but not if they
						are a hazard. If they make the lights flicker or, worse, they cause
						blackouts every time you turn them on, your new hot tub or sauna
						won&apos;t be able to provide you with any additional relaxation.
						Instead, the stress of figuring out what&apos;s wrong with your home
						or business&apos;s electricity will eclipse whatever hopes you had
						for your new spa.
					</P>
					<P>
						The good news is that this type of issue with a new hot tub or sauna
						is very easy to avoid. All you have to do is pick up the phone and
						call Burton Electric LLC. Burton Electric LLC has been proud to
						serve the Franklin area with exceptional and affordable hot tub and
						sauna electrical services. We have helped all sorts of homes and
						businesses in the area increase their livability with this specialty
						electrical service. We can even help repair the electrical work of
						existing hot tubs and saunas. Just give us a call and tell us about
						your current situation. We&apos;ll be happy to devise a plan that
						makes sense for you. So, call us today if you want to operate your
						home or business&apos;s hot tub or sauna without having to worry
						about the power it&apos;s getting.
					</P>
				</Section>

				<Section>
					<H2>Why You Should Get a Hot Tub or Sauna</H2>
					<P>
						If you are still on the fence as to whether or not your home or
						business could benefit from investing in a hot tub or sauna, then
						let us review some of the more common reasons why people take the
						plunge.
					</P>

					<div className="grid lg:grid-cols-3 gap-4">
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<SmilePlus size={ICONSIZE} className="shrink-0" />
							<P className="text-2xl font-medium">Stress relief</P>
							<P className="text-muted-foreground">
								If you are reading this, you are certainly well aware that there
								is no shortage of things to stress you out. Are you adequately
								equipped to fight back against the pervasive stress of modern
								life? When you have a hot tub, all it takes is a dip to melt all
								the tension you&apos;ve been carrying with you all day. Or, if
								you prefer, you can sweat it out in the stress relieving steam
								of your new sauna.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<HeartPulse size={ICONSIZE} className="shrink-0" />
							<P className="text-2xl font-medium">
								Reduce muscle and joint pain
							</P>
							<P className="text-muted-foreground">
								If you suffer from muscle or joint pain, you know how
								uncomfortable it is. With a sauna or hot tub, you can take
								advantage of the warm water and steamy atmosphere to reduce the
								swelling that causes these aches and pains.
							</P>
						</div>
						<div className="p-4 space-y-4 border-2 border-muted bg-white shadow-md rounded-sm">
							<Droplets size={ICONSIZE} className="shrink-0" />
							<P className="text-2xl font-medium">Improve circulation</P>
							<P className="text-muted-foreground">
								Warm water causes blood vessels to dilate, boosting your
								circulation and the flow of oxygen around your body for better
								overall health.
							</P>
						</div>
					</div>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						When you are ready to start living better with a hot tub or sauna on
						your property, making sure it&apos;s working properly is as simple
						as calling Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
