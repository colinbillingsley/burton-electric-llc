import { CheckCircle, Clock, FileBadge, Star, Users } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Section from "../Section";
import Link from "next/link";
import { FadeIn } from "../motion/FadeIn";
import { StaggeredList } from "../motion/StaggerdList";
import { SlideInFromLeft } from "../motion/SlideInFromLeft";
import { SlideInFromRight } from "../motion/SlideInFromRight";
import CenterDiv from "../CenterDiv";

const STROKEWIDTH: number = 1.25;

const BuiltOnTrust = () => {
	return (
		<Section className="bg-white">
			<CenterDiv>
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					<div>
						<FadeIn>
							<div className="inline-flex items-center bg-primary/15 border border-primary/50 rounded-full px-4 py-2 mb-8">
								<Users className="h-4 w-4 text-primary mr-2" />
								<span className="text-primary-darker text-sm font-medium">
									Locally Owned & Operated
								</span>
							</div>

							<h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
								Built on{" "}
								<span className="text-primary">Trust & Excellence</span>
							</h2>

							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								With over 25 years of experience in the electrical industry,
								Burton Electric LLC has been Nashville&apos;s trusted partner
								for safe, reliable electrical solutions.
							</p>
						</FadeIn>

						<StaggeredList className="space-y-4 mb-8">
							{[
								"Licensed & fully insured professionals",
								"Commitment to safety and code compliance",
								"Transparent pricing with no hidden fees",
								"Serving Nashville and surrounding areas",
							].map((item, index) => (
								<div key={index} className="flex items-center">
									<div className="bg-primary/10 rounded-full p-1 mr-4">
										<CheckCircle className="h-5 w-5 text-primary" />
									</div>
									<span className="text-gray-700">{item}</span>
								</div>
							))}
						</StaggeredList>

						<SlideInFromLeft>
							<Link href={"/about-us"}>
								<Button size={"lg"}>Learn More About Us</Button>
							</Link>
						</SlideInFromLeft>
					</div>

					<SlideInFromRight>
						<div className="relative">
							<div className="bg-gray-50 rounded-3xl p-8 border border-input">
								<div className="grid grid-cols-2 gap-6">
									<div className="bg-white rounded-2xl p-6 text-center shadow-sm">
										<Clock
											className="h-12 w-12 text-primary mx-auto mb-4"
											strokeWidth={STROKEWIDTH}
										/>
										<div className="text-2xl font-bold text-gray-900 mb-2">
											25+
										</div>
										<div className="text-gray-600">Years Experience</div>
									</div>
									<div className="bg-white rounded-2xl p-6 text-center shadow-sm">
										<FileBadge
											className="h-12 w-12 text-primary mx-auto mb-4"
											strokeWidth={STROKEWIDTH}
										/>
										<div className="text-2xl font-bold text-gray-900 mb-2">
											100%
										</div>
										<div className="text-gray-600">Licensed & Insured</div>
									</div>
									<div className="bg-white rounded-2xl p-6 text-center shadow-sm">
										<Star
											className="h-12 w-12 text-yellow-500 mx-auto mb-4"
											strokeWidth={STROKEWIDTH}
										/>
										<div className="text-2xl font-bold text-gray-900 mb-2">
											5.0
										</div>
										<div className="text-gray-600">Customer Rating</div>
									</div>
									<div className="bg-white rounded-2xl p-6 text-center shadow-sm">
										<Users
											className="h-12 w-12 text-green-600 mx-auto mb-4"
											strokeWidth={STROKEWIDTH}
										/>
										<div className="text-2xl font-bold text-gray-900 mb-2">
											1000+
										</div>
										<div className="text-gray-600">Happy Customers</div>
									</div>
								</div>
							</div>
						</div>
					</SlideInFromRight>
				</div>
			</CenterDiv>
		</Section>
	);
};

export default BuiltOnTrust;
