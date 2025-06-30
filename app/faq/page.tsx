"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import PageContainer from "../components/PageContainer";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Important from "../components/Important";
import Footer from "../components/Footer";
import { cn } from "@/lib/utils";
import { RiQuestionAnswerLine } from "react-icons/ri";
import Section from "../components/Section";
import ContactUs, {
	ContactContent,
	ContactTitle,
} from "../components/ContactUs";

const faqs = [
	{
		question: "When Is it Time to Call an Electrician?",
		answer:
			"No one wants to call in professional help when they’re not needed. There are a lot of home and business owners who think that their electrical issue is no big deal and that they can get by if they ignore the problem, hoping it will eventually sort itself out, or they decide to take matters into their own hands. Under no circumstances should you ever attempt to conduct your own electrical work. Even if it’s just a small problem, unqualified repairs won’t meet safety standards and could sow the seeds of more serious problems down the line. So, when should you call an electrician? Whenever you have an electrical problem! It’s of no inconvenience to us to provide the reassurance you need. Besides, more often than not more frequently tripping circuit breakers, flickering lights, faulty wiring, etc., warrant our immediate attention.",
	},
	{
		question: "Can I Do Electrical Work on My Own?",
		answer:
			"Under no circumstances should you ever attempt to do your own commercial or residential electrical work. It is guaranteed to be a recipe for disaster. You wouldn’t do your own dental work, would you? Our electricians are highly trained professionals who can guarantee a safe solution. Furthermore, if you do your own electrical work and it causes a fire or another type of injury, you will be liable for the damages. It’s not worth the risk when Burton Electric LLC’s excellent electricians are only a phone call away.",
	},
	{
		question:
			"How Do I Know What Size Electrical Service System I Need for My Property?",
		answer:
			"Figuring out the electrical loads of homes and businesses is essential. And to determine the size of electrical panel involves an audit of your appliances and a little bit of math as well. Your circuits should only be loaded up to 80% of the total circuit capabilities. So, if you have a 15-amp circuit, the safe operating amperage would be no greater than 12 amps. Confused yet? If so, give Burton Electric LLC a call and we’ll be happy to assist you in your energy load audit.",
	},
	{
		question: "What Should I Do if My Breaker Panel Is Hot?",
		answer:
			"If you can safely turn the power off, do so and give us a call immediately. You might need an upgrade or some maintenance. Either way, this is a job for the professionals.",
	},
	{
		question: "What Is a Surge Protector, and Do I Need One?",
		answer:
			"A surge protector is a piece of equipment that suppresses the excess voltage in your system to prevent it from causing harm to your appliances and devices. You should get some to protect your appliances and devices from power surges.",
	},
];

const FaqPage = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<PageContainer>
			<MainContainer>
				<H1>
					General Electrican
					<Important>Frequently Asked Questions</Important>
				</H1>
				<p className="text-muted-foreground my-4 max-w-2xl">
					Have questions about electrical systems, safety, or services? Here are
					answers to some of the most common questions people have about general
					electrical work.
				</p>

				<Section spacing="small" className="flex flex-col space-y-4">
					{faqs.map((faq, index) => {
						const isOpen = openIndex === index;
						return (
							<Card
								key={index}
								onClick={() => setOpenIndex(isOpen ? null : index)}
								className={cn(
									"cursor-pointer border border-border rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary overflow-hidden gap-0",
									isOpen && "bg-primary/5 border-primary shadow-md"
								)}
							>
								<CardHeader>
									<div className="flex justify-between items-center gap-2">
										<div className="flex items-center gap-4">
											<RiQuestionAnswerLine size={24} className="shrink-0" />
											<CardTitle className="text-sm lg:text-base">
												{faq.question}
											</CardTitle>
										</div>
										<ChevronDown
											className={`transition-transform shrink-0 ${
												isOpen ? "rotate-180" : ""
											}`}
											size={18}
										/>
									</div>
								</CardHeader>
								<CardContent
									className={`text-sm transition-all ${
										isOpen
											? "max-h-[50rem] opacity-100 pt-2"
											: "max-h-0 opacity-0"
									}`}
									aria-hidden={!isOpen}
								>
									<p
										className={`tracking-wide leading-relaxed text-sm lg:text-base`}
									>
										{faq.answer}
									</p>
								</CardContent>
							</Card>
						);
					})}
				</Section>

				<ContactUs>
					<ContactTitle>Contact Us Today!</ContactTitle>
					<ContactContent>
						Didn&apos;t see your question answered here? Please feel free to
						call Burton Electric LLC and ask your question directly to one of
						our licensed electricians.
					</ContactContent>
				</ContactUs>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default FaqPage;
