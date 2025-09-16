import React from "react";
import Section from "../Section";
import { FadeIn } from "../motion/FadeIn";
import { StaggeredList } from "../motion/StaggerdList";
import { Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import CenterDiv from "../CenterDiv";
import { SlideInFromLeft } from "../motion/SlideInFromLeft";
import { SlideInFromRight } from "../motion/SlideInFromRight";

const serviceAreas = ["Nashville, TN", "Franklin, TN", "Brentwood, TN"];

const OurServiceAreas = () => {
	return (
		<Section className="bg-gray-50">
			<CenterDiv>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="space-y-2">
						<FadeIn>
							<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
								Our <span className="text-primary">Service Areas</span>
							</h2>
							<h3 className="text-2xl font-bold">
								Get Quality and Expert Electrical Help
							</h3>
							<p className="text-base text-gray-600 max-w-3xl">
								At Burton Electric LLC we provide services in the Nashville, TN
								area as well as surrounding areas.
							</p>
						</FadeIn>
						<StaggeredList className="space-y-2">
							{serviceAreas.map((item, index) => (
								<div key={index} className="flex items-center">
									<div className="bg-primary/10 rounded-full p-1 mr-4">
										<Zap className="h-5 w-5 text-primary" />
									</div>
									<span className="text-gray-700 font-semibold">{item}</span>
								</div>
							))}
						</StaggeredList>
						<FadeIn>
							<p className="text-base text-gray-600 max-w-3xl mt-6">
								No matter where you are, our team is ready to help with your
								electrical needs—just give us a call to see if we serve your
								area!
							</p>
						</FadeIn>
						<SlideInFromLeft>
							<Link
								href={"/about-us/service-areas"}
								className="block mt-6 w-fit"
							>
								<Button size={"lg"}>View Service Areas</Button>
							</Link>
						</SlideInFromLeft>
					</div>
					<SlideInFromRight>
						<div className="w-full h-[300px] md:h-[400px] rounded-md overflow-hidden border">
							<iframe
								title="Burton Electric LLC Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51539.29325037439!2d-86.7851469!3d36.1160054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30.1!3m3!1m2!1s0x886489c1f6b9cf55%3A0x35780e4276fd32ec!2sBurton%20Electric%20LLC!5e0!3m2!1sen!2sus!4v1718862652192!5m2!1sen!2sus"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</SlideInFromRight>
				</div>
			</CenterDiv>
		</Section>
	);
};

export default OurServiceAreas;
