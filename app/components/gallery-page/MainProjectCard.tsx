import Link from "next/link";
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
			href={`${url}`}
			className="relative h-[20rem] w-full group block overflow-hidden rounded-lg shadow-lg"
			prefetch
		>
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 scale-100 group-hover:scale-105"
				style={{ backgroundImage: `url(${bgImage})` }}
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
