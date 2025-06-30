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
					<Important>Brentwood Electrical Contractors</Important>
				</H1>

				<Section spacing="small">
					<P>
						If you are building a new residential or commercial building in the
						Brentwood area, or planning to remodel an existing building, and the
						time has come for your plans to be reviewed by an electrical
						professional, who are you going to call? An electrician or an
						electrical contractor?
					</P>
					<P>
						Most people will say they are going to call an electrician, most
						likely because they have no idea that there is a difference between
						the two. You might be surprised to learn that an electrician and an
						electrical contractor aren&apos;t one and the same. Yes, they both
						provide essential, professional services related to electricity, but
						that&apos;s where the similarities end.
					</P>
					<P>
						An electrician is someone who is able to fix and install electrical
						components throughout your Brentwood home or business. An electrical
						contractor, on the other hand, is responsible for performing all
						types of electrical work, including installing, removing and
						repairing electrical wiring in a construction setting. In new
						constructions, for example, an electrical contractor will review the
						building&apos;s blueprint and put together a basic plan for its
						electrical system.
					</P>
					<P>
						Now that you know the difference between electricians and electrical
						contractors, you are probably wondering where you can find reliable
						electrical contractors in the Brentwood area. Well, good news! You
						have already found them.
					</P>
					<P>
						Burton Electric LLC is an electrical contracting firm that has been
						proud to serve Brentwood homes and businesses for many years. We
						have built our firm from scratch into one of the most trusted
						electrical contracting firms in the area thanks to our team&apos;s
						dedication to quality workmanship. Quality and courtesy have been
						the foundation of our business since day, which is why we continue
						to be the top choice for any residential or commercial client that
						requires electrical design, installation or maintenance services.
					</P>
					<P>
						Give us a call today to receive a free quote on our registered,
						licensed and insured electrical contracting services.
					</P>
				</Section>

				<Section>
					<H2>Residential Electrical Contracting Services</H2>
					<P>
						Whether you are building a brand-new home or remodeling an existing
						one, you need to make sure it&apos;s receiving power efficiently and
						safely. Everything going in to your home needs to receive the right
						voltage to make sure it works correctly for years to come and that
						is precisely where we come in.
					</P>
					<P>
						No matter what you need from our residential electrical contractors,
						we guarantee we have the training and experience necessary to get it
						done in hardly any time at all. Just give us a call, tell us what
						you need and we&apos;ll give you a free estimate on our services.
					</P>
				</Section>

				<Section>
					<H2>Commercial Electrical Contracting Services</H2>
					<P>
						If you&apos;re expanding your business, upgrading your equipment,
						building a new location or remodeling an existing one, you need to
						make sure that you are receiving the right amount of power in a safe
						manner. And that&apos;s where our commercial electrical contractors
						can come in handy. Give us a call today, let us know what you need
						from us and we&apos;ll be happy to provide you with a free estimate.
					</P>
				</Section>

				<ContactUs>
					<ContactTitle>Contact Burton Electric LLC Today!</ContactTitle>
					<ContactContent>
						For reliable, professional and affordable residential and commercial
						electrical contracting services in the Brentwood area, get in touch
						with Burton Electric LLC today.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default page;
