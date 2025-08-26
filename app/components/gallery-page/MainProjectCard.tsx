import Link from "next/link";
import Image from "next/image";
import React from "react";

const MainProjectCard = ({
	bgImage,
	project,
	url,
}: {
	bgImage: string;
	project: string;
	url: string;
}) => {
	return (
		<Link
			href={url}
			className="relative h-[20rem] w-full group block overflow-hidden rounded-lg shadow-lg"
			prefetch
		>
			<Image
				src={bgImage}
				alt={project}
				fill
				className="object-cover transition-transform duration-300 group-hover:scale-105"
				sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
				placeholder="blur"
				blurDataURL="/placeholder.png"
			/>

			{/* Black overlay */}
			<div className="absolute inset-0 bg-black/30" />

			{/* Text content */}
			<div className="relative z-10 flex flex-col justify-between h-full">
				<div className="p-6">
					<h2 className="text-2xl font-bold text-white">
						{project || "Project Title"}
					</h2>
				</div>

				{/* Hover button */}
				<div className="flex items-center justify-center h-[3rem] opacity-0 group-hover:opacity-100 transition-all translate-y-48 group-hover:translate-y-0">
					<span className="block bg-primary text-white px-4 py-2 font-medium w-full h-full text-center">
						View More
					</span>
				</div>
			</div>
		</Link>
	);
};

export default MainProjectCard;
