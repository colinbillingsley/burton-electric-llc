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
import { AlertTriangle, Flame, PlugZap, Zap } from "lucide-react";
import { Metadata } from "next";
import React from "react";

const ICONSIZE: number = 32;
const STROKEWIDTH: number = 1.5;

export const metadata: Metadata = {
	title: "Brentwood Electrical Repair | Burton Electric LLC",
	description:
		"Burton Electric LLC provides safe, effective electrical repair services in Brentwood. Call (615) 830-1111.",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Brentwood Electrical Repair",
		"Nashville Electrical Repair",
		"Franklin Electrical Repair",
		"Electrical Repair",
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
					<Important>Brentwood Electrical Repair Services</Important>
				</H1>

				<Section spacing="small">
					<P>
						Problems with your Brentwood home or business can be more than just
						a nuisance. Electrical problems can be a massive hazard, wreaking
						thousands of dollars&apos; worth of damage. And since no one in
						their right mind wants to see their home or business go up in flames
						due to an electrical fire. So, whenever you have something unusual
						happening with your electricity, it is imperative that you contact
						Burton Electric LLC as soon as possible.
					</P>
					<P>
						Whenever your home or business in the Brentwood area is experiencing
						irregularities with its electricity, Burton Electric LLC&apos;s
						reliable, licensed and insured electricians will be on-site as soon
						as they can to repair the issue. More and more home and business
						owners trust our electrical repair services whenever issues arise
						because they know they are always getting trusted, detail-oriented
						electrical repair services. Whether it&apos;s major or minor, we
						will make sure that the issue is resolved for good.
					</P>
					<P>
						So, if you have a problem with your electricity, give Burton
						Electric LLC a call today and we&apos;ll find a solution to make
						your home or business safe again.
					</P>
				</Section>

				<Section>
					<H2>Common Electrical Repairs</H2>
					<P>
						There are a variety of different things that can go wrong with your
						home or business&apos;s electrical system. For the most part, if you
						don&apos;t have any experience working with electricity, it can be
						difficult to determine the exact nature and severity of the problem.
						Below are some of the most common electrical issues that Burton
						Electric LLC&apos;s professionals can repair with ease.
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
								<p className="font-medium text-center">Frequent Surges</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								Electrical surges can be caused by anything from lightning,
								damaged power lines, faulty appliances and bad electrical wiring
								in the house. While most surges only last a microsecond,
								frequent surges can do serious damage to your devices and
								appliances. If it happens all the time, the culprit is probably
								an electric device connected to the grid or the wiring itself.
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
								<p className="font-medium text-center">Circuit Overloads</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								If your circuit breaker trips regularly, you can be relieved
								knowing that it&apos;s doing its job to protect your home or
								business. Of course, it&apos;s indicative that there&apos;s
								something wrong. There are a number of different reasons why
								this could be happening, which is why our electricians can be a
								huge asset in troubleshooting the different possible causes
								until we find the right repair.
							</P>
						</div>

						<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
							<div className="flex flex-col items-center gap-3">
								<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
									<Flame
										size={ICONSIZE}
										strokeWidth={STROKEWIDTH}
										className="text-primary"
									/>
								</div>
								<p className="font-medium text-center">Warm Outlets</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								When your outlets start giving off heat whenever they are in
								use, you have to first of all avoid plugging anything in that
								particular outlet and check others around the immediate vicinity
								for heat or burn marks. Faulty wiring and faulty outlets can
								easily start an electric fire, which can do serious damage to
								your home or business.
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
								<p className="font-medium text-center">Strange smells</p>
							</div>

							<P className="text-sm text-center text-muted-foreground max-w-xs">
								If you detect any strange burning smells around your home or
								business, particularly from an outlet, you need to call us
								immediately so that we can take a look at it before serious
								damage is done to your home or business.
							</P>
						</div>
					</div>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						Attempting to do your own electrical repairs can have serious
						consequences. You are very likely to hurt yourself or make the
						situation worse, which is why you need to call Burton Electric LLC
						whenever you suspect there&apos;s a problem.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
