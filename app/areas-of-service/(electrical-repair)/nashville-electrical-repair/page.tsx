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
import { AlertTriangle, PlugZap, Zap } from "lucide-react";
import React from "react";
import { BsOutlet } from "react-icons/bs";

const ICONSIZE: number = 32;
const STROKEWIDTH: number = 1.5;

const page = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Nashville Electrical Repair Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						There are few things more frustrating than unreliable electrical
						service in your Nashville home or business. Of course, sometimes you
						have to be grateful that it&apos;s only an inconvenience because
						problematic electricity can do serious damage to any type of
						building. If you have been experiencing difficulty with your home or
						business&apos;s electricity, it&apos;s worth giving Burton Electric
						LLC a call so that our licensed and insured electricians can conduct
						the repairs you need.
					</P>
					<P>
						Burton Electric LLC has been proud to provide homes and businesses
						all over the Nashville area with expert electrical repairs. We
						understand that malfunctioning electrical work can be a truly scary
						thing, which is why we are committed to identifying the issue and
						fixing it with maximum efficiency.
					</P>
					<P>
						Whenever you need electrical repairs, give us a call and we&apos;ll
						do whatever we can to provide a lasting resolution.
					</P>
				</Section>

				<Section>
					<H2>Signs Your Home or Business Needs Electrical Repairs</H2>
					<P>
						Unless you have experience working with electricity, it can often be
						difficult to recognize that your home or business needs electrical
						repairs. To put aside any doubts that you should call Burton
						Electric LLC to acquire our electrical repair services, here are the
						surefire signs that there&apos;s something not right with your
						electrical system.
					</P>

					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-12">
						<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
							<div className="flex flex-col items-center gap-3">
								<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
									<Zap
										size={ICONSIZE}
										strokeWidth={STROKEWIDTH}
										className="text-primary"
									/>
								</div>
								<p className="font-medium text-center">
									Circuit breakers keep tripping
								</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								If the power keeps going out, either in a single room or
								throughout the building, it is very likely that you have tripped
								circuit breakers. First, unplug or turn off any electronic or
								motor-driven appliances to prevent damaging your essentials from
								power surges when the power comes back. Reset the circuit
								breakers in your fuse box. If the breakers trip again right
								away, give us a call. In the event that it doesn&apos;t go off
								right away, but the breakers are tripped regularly, give us a
								call and we will be happy to troubleshoot it until the right
								repair is found.
							</P>
						</div>

						<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
							<div className="flex flex-col items-center gap-3">
								<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
									<PlugZap
										size={ICONSIZE}
										strokeWidth={STROKEWIDTH}
										className="text-primary"
									/>
								</div>
								<p className="font-medium text-center">
									Appliances spark when plugged in
								</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								If sparks fly out of your outlets when you plug in an appliance,
								this is extremely dangerous because this is how electrical fires
								start. Never attempt to put out an electrical fire with water
								because it will only make it worse. Instead, give us a call and
								we&apos;ll be glad to figure out whether it&apos;s your
								appliances, outlets or something else.
							</P>
						</div>

						<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
							<div className="flex flex-col items-center gap-3">
								<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
									<BsOutlet
										size={ICONSIZE}
										strokeWidth={0.25}
										className="text-primary"
									/>
								</div>
								<p className="font-medium text-center">
									Outlets and switches not working
								</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								Eventually, certain outlets and switches in your home or
								business will stop working due to age and wear and tear. If your
								outlets and switches suddenly go dead, we can easily replace
								them.
							</P>
						</div>

						<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
							<div className="flex flex-col items-center gap-3">
								<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
									<AlertTriangle
										size={ICONSIZE}
										strokeWidth={STROKEWIDTH}
										className="text-primary"
									/>
								</div>
								<p className="font-medium text-center">Burning smells</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								This is one of the more obvious signs that you need an
								electrician to come conduct some electrical repairs, but
								it&apos;s worth repeating nonetheless. Mysterious burning smells
								are symptomatic of overloaded or badly damaged wires.
							</P>
						</div>
					</div>

					<P>
						Under no circumstances should you ever attempt to do your own
						electrical repairs. You could badly injure yourself or cause severe
						damage to your property. Let Burton Electric LLC&apos;s trained and
						insured professionals handle itself instead.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Whenever your Nashville home or business&apos;s electricity is
						acting strangely, give Burton Electric LLC a call and we will make
						sure we find the problem and fix it.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
