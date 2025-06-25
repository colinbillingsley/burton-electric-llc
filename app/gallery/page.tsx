"use client";

import React from "react";
import MainContainer from "../components/MainContainer";
import H1 from "../components/H1";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import Important from "../components/Important";
import Image from "next/image";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const images = [
	{ src: "/gallery-images/img1.jpg", alt: "" },
	{ src: "/gallery-images/img2.jpg", alt: "" },
	{ src: "/gallery-images/img3.jpg", alt: "" },
	{ src: "/gallery-images/img4.jpg", alt: "" },
	{ src: "/gallery-images/img5.jpg", alt: "" },
	{ src: "/gallery-images/img6.jpg", alt: "" },
	{ src: "/gallery-images/img7.jpg", alt: "" },
	{ src: "/gallery-images/img8.jpg", alt: "" },
	{ src: "/gallery-images/img9.jpg", alt: "" },
	{ src: "/gallery-images/img10.jpg", alt: "" },
	{ src: "/gallery-images/img11.jpg", alt: "" },
	{ src: "/gallery-images/img12.jpg", alt: "" },
	{ src: "/gallery-images/img13.jpg", alt: "" },
	{ src: "/gallery-images/img14.jpg", alt: "" },
	{ src: "/gallery-images/img15.jpg", alt: "" },
	{ src: "/gallery-images/img16.jpg", alt: "" },
	{ src: "/gallery-images/img17.jpg", alt: "" },
	{ src: "/gallery-images/img18.jpg", alt: "" },
	{ src: "/gallery-images/img19.jpg", alt: "" },
	{ src: "/gallery-images/img20.jpg", alt: "" },
	{ src: "/gallery-images/img21.jpg", alt: "" },
	{ src: "/gallery-images/img22.jpg", alt: "" },
	{ src: "/gallery-images/img23.jpg", alt: "" },
	{ src: "/gallery-images/img24.jpg", alt: "" },
	{ src: "/gallery-images/img25.jpg", alt: "" },
	{ src: "/gallery-images/img26.jpg", alt: "" },
	{ src: "/gallery-images/img27.jpg", alt: "" },
	{ src: "/gallery-images/img28.jpg", alt: "" },
];

const pages = () => {
	return (
		<PageContainer>
			<MainContainer>
				<H1>
					<Important>Gallery</Important>
				</H1>
				<p className="text-muted-foreground my-5">
					A look at some of the residential and commercial projects we’ve
					completed around Nashville.
				</p>

				<PhotoProvider>
					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center md:justify-start my-12">
						{images.map((img, idx) => (
							<PhotoView key={idx} src={img.src}>
								<div className="relative w-full aspect-[7/5] min-w-[240px] max-w-[400px] rounded-md overflow-hidden shadow-md hover:scale-105 transition-transform hover:cursor-pointer">
									<Image
										src={img.src}
										alt={img.alt || `Gallery image ${idx + 1}`}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 33vw"
										loading="lazy"
									/>
								</div>
							</PhotoView>
						))}
					</div>
				</PhotoProvider>
			</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default pages;
