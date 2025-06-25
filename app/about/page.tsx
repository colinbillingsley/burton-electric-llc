import React from "react";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import Important from "../components/Important";
import Section from "../components/Section";
import { MdFamilyRestroom, MdOutlineAttachMoney } from "react-icons/md";
import { BsCalendarCheck } from "react-icons/bs";
import { LuMessageSquareMore } from "react-icons/lu";

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					About
					<Important>Burton Electric LLC</Important>
				</H1>

				<Section className="grid lg:grid-cols-2 items-start justify-center gap-8">
					<div className="space-y-8">
						<p className="max-w-2xl">
							Welcome to Burton Electric LLC, where tradition meets expertise in
							electrical services. As a proud fourth-generation electrician, I
							bring over 25 years of experience in providing top-quality
							electrical solutions to homes and businesses in our local
							community. From a young age, I learned the trade from my family,
							and that hands-on experience has shaped my passion for delivering
							reliable, safe, and efficient electrical services.
						</p>
						<p className="max-w-2xl">
							For the past two decades, we’ve built a reputation for outstanding
							customer service and high-quality work, specializing in both
							commercial and residential electrical services. Whether you need a
							quick repair, a major installation, or ongoing maintenance, we’re
							here to ensure your electrical systems are running smoothly and
							safely.
						</p>
						<p className="max-w-2xl">
							As a local business, we value our customers and the trust they
							place in us. Our commitment to integrity, professionalism, and
							personalized service sets us apart, and we’re proud to continue
							the legacy of excellence that has been passed down through
							generations.
						</p>
						<p className="max-w-2xl">
							Thank you for choosing Burton Electric. We look forward to serving
							you!
						</p>
					</div>
					<img
						src="/gallery-images/img28.jpg"
						alt="image of 2 burton electrical vans on a jobsite"
						className="rounded-xl block w-full"
					/>
				</Section>

				<Section className="">
					<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
						<div className="flex flex-col justify-center items-center gap-6 p-4 text-primary rounded-md shadow-lg border border-primary">
							<MdFamilyRestroom size={48} />
							<span className="text-center font-medium">Family Owned</span>
							<p className="text-center text-sm">
								Proudly serving Nashville with a personal touch only a
								family-run business can offer.
							</p>
						</div>

						<div className="flex flex-col justify-center items-center gap-6 p-4 text-primary rounded-md shadow-lg border border-primary">
							<BsCalendarCheck size={48} />
							<span className="text-center font-medium">
								Available by Appointment
							</span>
							<p className="text-center text-sm">
								We work around your schedule — book a time that fits your needs.
							</p>
						</div>

						<div className="flex flex-col justify-center items-center gap-6 p-4 text-primary rounded-md shadow-lg border border-primary">
							<LuMessageSquareMore size={48} />
							<span className="text-center font-medium">
								Free Consultations Available
							</span>
							<p className="text-center text-sm">
								No obligations. Let's talk through your project and explore the
								best solution.
							</p>
						</div>

						<div className="flex flex-col justify-center items-center gap-6 p-4 text-primary rounded-md shadow-lg border border-primary">
							<MdOutlineAttachMoney size={48} />
							<span className="text-center font-medium">Budget Friendly</span>
							<p className="text-center text-sm">
								Top-quality electrical work that won’t break the bank.
							</p>
						</div>
					</div>
				</Section>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
