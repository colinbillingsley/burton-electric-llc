import CenterDiv from "@/components/CenterDiv";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggeredList } from "@/components/motion/StaggerdList";
import PageContainer from "@/components/PageContainer";
import PageHeading from "@/components/PageHeading";
import Section from "@/components/Section";
import { baseKeywords, icon } from "@/data/seo";
import { Metadata } from "next";
import React from "react";
import ImageCard from "./components/ImageCard";
import ContactUs from "@/components/ContactUs";
import { ImageCardType } from "@/data/images";

export const metadata: Metadata = {
	title: "Gallery | Burton Electric LLC",
	description:
		"Gallery of Burton Electric LLC projects in Nashville, Franklin, and Brentwood.",
	icons: {
		icon: icon,
	},
	keywords: [...baseKeywords],
};

import rawImageData from "@/data/imagesJson.json";
const imageData = rawImageData as ImageCardType[];

const page = () => {
	return (
		<PageContainer>
			<FadeIn>
				<CenterDiv className="space-y-4">
					<PageHeading>
						<p>Gallery</p>
					</PageHeading>
					<p className="text-muted-foreground">
						See the quality craftsmanship and professional results we deliver in
						for our commercial clients across Nashville, TN and surrounding
						areas.
					</p>
				</CenterDiv>
			</FadeIn>

			<Section my="sm">
				<CenterDiv>
					<StaggeredList
						className="grid grid-cols-1 sm:grid-cols-2 gap-6"
						amount={0}
					>
						{imageData.map((img, index) => (
							<ImageCard
								key={index}
								featuredUrl={img.featuredUrl}
								name={img.name}
								desc={img.desc}
								category={img.category}
								location={img.location}
								year={img.year}
								alt={img.alt || ""}
								url={img.url}
							/>
						))}
					</StaggeredList>
				</CenterDiv>
			</Section>

			<ContactUs
				desc={
					"Inspired by our work? Let's talk about how Burton Electric LLC can bring the same quality and attention to detail to your next project. Contact us today to get started."
				}
			/>
		</PageContainer>
	);
};

export default page;
