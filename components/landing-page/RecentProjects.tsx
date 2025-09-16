"use client";
import React, { useEffect, useState } from "react";
import Section from "../Section";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "../motion/FadeIn";
import { SlideUp } from "../motion/SlideUp";
import CenterDiv from "../CenterDiv";

type ProjectImageType = { src: string; title: string; description: string }[];

const projectImages: ProjectImageType = [
	{
		src: "/fogo-de-chao/IMG1.jpg",
		title: "Fogo De Chão",
		description: "Brazilian steakhouse located in downtown Nashville, TN",
	},
	{
		src: "/bna-airport/castle-1.jpg",
		title: "The Castle",
		description:
			"Official Nashville SC sports bar located in Concourse D at the BNA Airport",
	},
	{
		src: "/fogg-street/IMG1.jpg",
		title: "Fogg Street",
		description:
			"Premier League-inspired pub and official home of Nashville SC fans.",
	},
	{
		src: "/sushi-bar/IMG1.jpg",
		title: "Sushi Bar",
		description:
			"Modern Japanese restaurant offering fresh sushi and cocktails.",
	},
	{
		src: "/taco-chela/IMG2.jpg",
		title: "Taco Chela",
		description:
			"Vibrant Mexican eatery serving tacos, tequila, and lively vibes.",
	},
];

const RecentProjects = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Auto-advance slideshow
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % projectImages.length);
		}, 5000);
		return () => clearInterval(timer);
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % projectImages.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + projectImages.length) % projectImages.length
		);
	};
	return (
		<Section className="bg-gray-50">
			<CenterDiv>
				<FadeIn>
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
							Recent <span className="text-primary">Projects</span>
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Take a look at some of our recent electrical installations and
							upgrades throughout the Nashville area.
						</p>
					</div>
				</FadeIn>

				<SlideUp>
					<div className="relative max-w-5xl mx-auto">
						<div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-black">
							{projectImages.map((image, index) => (
								<div
									key={index}
									className={`absolute inset-0 transition-opacity duration-1000 ${
										index === currentSlide ? "opacity-100" : "opacity-0"
									}`}
								>
									<Image
										src={image.src}
										alt={image.title}
										fill
										className="object-contain"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
										priority={index === 0}
									/>
									<div className="absolute inset-0 bg-black/40 flex items-end">
										<div className="p-8 text-white">
											<h3 className="text-2xl md:text-3xl font-bold mb-2">
												{image.title}
											</h3>
											<p className="text-lg opacity-90">{image.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation Arrows */}
						<button
							onClick={prevSlide}
							className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
						>
							<ChevronLeft className="h-6 w-6" />
						</button>
						<button
							onClick={nextSlide}
							className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
						>
							<ChevronRight className="h-6 w-6" />
						</button>

						{/* Slide Indicators */}
						<div className="flex justify-center mt-6 space-x-2">
							{projectImages.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`w-3 h-3 rounded-full transition-all duration-200 ${
										index === currentSlide
											? "bg-primary w-8"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
								/>
							))}
						</div>
					</div>
				</SlideUp>
			</CenterDiv>
		</Section>
	);
};

export default RecentProjects;
