"use client";
import Image from "next/image";
import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ImageDetailCardProps = {
	images: { id: number; url: string }[];
	url: string;
	id: number;
};

const ImageViewer = ({ images, id }: ImageDetailCardProps) => {
	const [open, setOpen] = useState(false);
	const [index, setIndex] = useState(id - 1);

	const nextImage = () => setIndex((i) => (i + 1) % images.length);
	const prevImage = () =>
		setIndex((i) => (i - 1 + images.length) % images.length);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			{/* Trigger: just shows the first image for now */}
			<DialogTrigger asChild>
				<div
					onClick={() => setIndex(id - 1)}
					className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
				>
					<Image
						src={images[id - 1].url}
						alt={`Image ${id}`}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.35] transition-opacity duration-300" />
				</div>
			</DialogTrigger>

			{/* Fullscreen viewer */}
			<DialogContent className="flex items-center bg-black border-0">
				<DialogTitle hidden>Image Viewer</DialogTitle>

				{/* Prev button */}
				{images.length > 1 && (
					<button
						onClick={prevImage}
						className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/50 rounded-full p-1"
					>
						<ArrowLeft size={25} />
					</button>
				)}

				{/* Next button */}
				{images.length > 1 && (
					<button
						onClick={nextImage}
						className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/50 rounded-full p-1"
					>
						<ArrowRight size={25} />
					</button>
				)}

				{/* Image */}
				<div className="relative w-full h-full">
					<Image
						src={images[index].url}
						alt={`Image ${index}`}
						fill
						className="object-contain"
						priority
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ImageViewer;
