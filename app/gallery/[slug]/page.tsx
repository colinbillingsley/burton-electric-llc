import CenterDiv from "@/components/CenterDiv";
import { FadeIn } from "@/components/motion/FadeIn";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import { notFound } from "next/navigation";
import { ImageCardType } from "@/data/images";
import rawImageData from "@/data/imagesJson.json";
import Section from "@/components/Section";
import { StaggeredList } from "@/components/motion/StaggerdList";
import { baseKeywords, icon } from "@/data/seo";
import ImageDetailCard from "./components/ImageDetailCard";
import ContactUs from "@/components/ContactUs";
import { Metadata } from "next";
import React from "react";

const imageData = rawImageData as ImageCardType[];

interface PageProps {
	params: Promise<{ slug: string }>;
}

// ✅ generate metadata dynamically
export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const project = imageData.find(
		(p) => p.url.replace("/gallery/", "") === slug
	);

	if (!project) return {};

	return {
		title: `Gallery of ${project.name} | Burton Electric LLC`,
		description: project.desc,
		icons: { icon },
		keywords: [...baseKeywords, project.name, project.location],
	};
}

const Page = ({ params }: PageProps) => {
	const { slug } = React.use(params);

	const project = imageData.find(
		(p) => p.url.replace("/gallery/", "") === slug
	);

	if (!project) return notFound();

	return (
		<PageContainer>
			<CenterDiv>
				<FadeIn className="space-y-4">
					<PageHeading>
						<span>Project Details</span>
						<p>{project.name}</p>
					</PageHeading>
					<div className="flex items-center gap-2 text-sm text-muted-foreground">
						<p>{project.location}</p>
						<div className="size-1 rounded-full bg-primary-darker" />
						<p>{project.year}</p>
						<div className="size-1 rounded-full bg-primary-darker" />
						<p>{project.category}</p>
					</div>
					<p className="text-muted-foreground">{project.desc}</p>
				</FadeIn>

				<Section my="sm">
					<StaggeredList
						className="grid grid-cols-1 md:grid-cols-2 gap-1"
						amount={0}
					>
						{project.imgs.map((img, index) => (
							<ImageDetailCard
								key={index}
								images={project.imgs}
								url={img.url}
								id={img.id}
							/>
						))}
					</StaggeredList>
				</Section>

				{project.videos && (
					<Section my="sm">
						<StaggeredList
							className="grid grid-cols-1 md:grid-cols-2 gap-4"
							amount={0}
						>
							{project.videos.map((video) => (
								<div key={`video-${video.id}`}>
									<video
										className="w-full rounded-lg"
										width="320"
										height="240"
										controls
										muted
									>
										<source src={video.url} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								</div>
							))}
						</StaggeredList>
					</Section>
				)}
			</CenterDiv>
			<ContactUs />
		</PageContainer>
	);
};

export default Page;
