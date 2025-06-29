import { FileBadge, ShieldCheck, Trophy, Zap } from "lucide-react";
import Section from "../Section";

const ICONSIZE = 48;
const STROKEWIDTH = 1.25;

const WhyBurton = () => {
	return (
		<Section spacing="large">
			<h2 className="font-bold text-4xl text-center">
				Why Choose Burton Electric LLC?
			</h2>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 my-12">
				{/* Experience */}
				<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
					<div className="flex flex-col items-center gap-3">
						<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
							<Trophy
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="text-primary"
							/>
						</div>
						<p className="font-medium text-center">Decades of Experience</p>
					</div>
					<p className="text-sm text-center text-muted-foreground max-w-xs">
						With over 25 years in the industry, our team brings expert knowledge
						and reliable craftsmanship to every project.
					</p>
				</div>

				{/* Certified */}
				<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
					<div className="flex flex-col items-center gap-3">
						<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
							<FileBadge
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="text-primary"
							/>
						</div>
						<p className="font-medium text-center">Licensed & Certified</p>
					</div>
					<p className="text-sm text-center text-muted-foreground max-w-xs">
						Our electricians are fully licensed and certified to ensure all
						installations meet code and safety standards.
					</p>
				</div>

				{/* Safety */}
				<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
					<div className="flex flex-col items-center gap-3">
						<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
							<ShieldCheck
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="text-primary"
							/>
						</div>
						<p className="font-medium text-center">Safety & Satisfaction</p>
					</div>
					<p className="text-sm text-center text-muted-foreground max-w-xs">
						We prioritize safety and customer satisfaction in every job—big or
						small. You can trust our team to put your needs first.
					</p>
				</div>

				{/* Quality */}
				<div className="flex flex-col gap-6 items-center bg-muted p-6 rounded-sm">
					<div className="flex flex-col items-center gap-3">
						<div className="size-20 flex items-center justify-center bg-white rounded-full shadow-md">
							<Zap
								size={ICONSIZE}
								strokeWidth={STROKEWIDTH}
								className="text-primary"
							/>
						</div>
						<p className="font-medium text-center">Efficient & High Quality</p>
					</div>
					<p className="text-sm text-center text-muted-foreground max-w-xs">
						From quick troubleshooting to large-scale installs, we deliver
						high-quality work efficiently—saving you time and money.
					</p>
				</div>
			</div>
		</Section>
	);
};

export default WhyBurton;
