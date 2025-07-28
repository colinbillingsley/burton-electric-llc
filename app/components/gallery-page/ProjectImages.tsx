"use client";

import React from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProjectImages = ({ images }: { images: string[] }) => {
	return (
		<PhotoProvider>
			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center md:justify-start my-12">
				{images.map((img, idx) => (
					<PhotoView key={idx} src={img}>
						<div className="relative w-full aspect-[7/5] min-w-[240px] max-w-[400px] rounded-md overflow-hidden shadow-md hover:scale-105 transition-transform hover:cursor-pointer">
							<Image
								src={img}
								alt={`Image ${idx + 1}`}
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
	);
};

export default ProjectImages;
