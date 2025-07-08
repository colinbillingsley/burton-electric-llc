import PageContainer from "../components/PageContainer";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Important from "../components/Important";
import Footer from "../components/Footer";
import { RiQuestionAnswerLine } from "react-icons/ri";
import Section from "../components/Section";
import ContactUs, {
	ContactContent,
	ContactTitle,
} from "../components/ContactUs";
import DropdownBoxes from "../components/our-services-page/DropdownBoxes";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Frequently Asked Questions | Burton Electric LLC",
	description:
		"Here are some answers to electrical-related questions Burton Electric LLC frequently receives from Nashville, Brentwood and Franklin residents.",
	icons: {
		icon: "/burton-logo.png",
	},
	keywords: [
		"Burton Electric LLC",
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

const faqs = [
	{
		title: "When Is it Time to Call an Electrician?",
		desc: "No one wants to call in professional help when they're not needed. There are a lot of home and business owners who think that their electrical issue is no big deal and that they can get by if they ignore the problem, hoping it will eventually sort itself out, or they decide to take matters into their own hands. Under no circumstances should you ever attempt to conduct your own electrical work. Even if it's just a small problem, unqualified repairs won't meet safety standards and could sow the seeds of more serious problems down the line. So, when should you call an electrician? Whenever you have an electrical problem! It's of no inconvenience to us to provide the reassurance you need. Besides, more often than not more frequently tripping circuit breakers, flickering lights, faulty wiring, etc., warrant our immediate attention.",
	},
	{
		title: "Can I Do Electrical Work on My Own?",
		desc: "Under no circumstances should you ever attempt to do your own commercial or residential electrical work. It is guaranteed to be a recipe for disaster. You wouldn't do your own dental work, would you? Our electricians are highly trained professionals who can guarantee a safe solution. Furthermore, if you do your own electrical work and it causes a fire or another type of injury, you will be liable for the damages. It's not worth the risk when Burton Electric LLC's excellent electricians are only a phone call away.",
	},
	{
		title:
			"How Do I Know What Size Electrical Service System I Need for My Property?",
		desc: "Figuring out the electrical loads of homes and businesses is essential. And to determine the size of electrical panel involves an audit of your appliances and a little bit of math as well. Your circuits should only be loaded up to 80% of the total circuit capabilities. So, if you have a 15-amp circuit, the safe operating amperage would be no greater than 12 amps. Confused yet? If so, give Burton Electric LLC a call and we'll be happy to assist you in your energy load audit.",
	},
	{
		title: "What Should I Do if My Breaker Panel Is Hot?",
		desc: "If you can safely turn the power off, do so and give us a call immediately. You might need an upgrade or some maintenance. Either way, this is a job for the professionals.",
	},
	{
		title: "What Is a Surge Protector, and Do I Need One?",
		desc: "A surge protector is a piece of equipment that suppresses the excess voltage in your system to prevent it from causing harm to your appliances and devices. You should get some to protect your appliances and devices from power surges.",
	},
];

const FaqPage = () => {
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
					<DropdownBoxes
						items={faqs}
						icon={<RiQuestionAnswerLine size={24} className="shrink-0" />}
					/>
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
