import { FileBadge, ShieldCheck, Trophy, Zap } from "lucide-react";
import Section from "../Section";

const ICONSIZE = 42;
const STROKEWIDTH = 1.75;

const WhyBurton = () => {
	return (
		<Section spacing="large">
			<h2 className="font-bold text-4xl text-center">
				Why Burton Electric LLC?
			</h2>

			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 my-12 mt-12">
				<div className="flex flex-col gap-8 items-center">
					<div className="size-28 flex items-center justify-center border-4 border-primary rounded-full shadow-lg">
						<Trophy
							size={ICONSIZE}
							strokeWidth={STROKEWIDTH}
							className="text-primary"
						/>
					</div>
					<p className="uppercase font-medium text-center">
						Over 25+ years of experience
					</p>
				</div>

				<div className="flex flex-col gap-8 items-center">
					<div className="size-28 flex items-center justify-center border-4 border-primary rounded-full shadow-lg">
						<FileBadge
							size={ICONSIZE}
							strokeWidth={STROKEWIDTH}
							className="text-primary"
						/>
					</div>

					<p className="uppercase font-medium text-center">
						Certified Electricians
					</p>
				</div>

				<div className="flex flex-col gap-8 items-center">
					<div className="size-28 flex items-center justify-center border-4 border-primary rounded-full shadow-lg">
						<ShieldCheck
							size={ICONSIZE}
							strokeWidth={STROKEWIDTH}
							className="text-primary"
						/>
					</div>

					<p className="uppercase font-medium text-center">
						Dedicated to safety and satisfaction
					</p>
				</div>

				<div className="flex flex-col gap-8 items-center">
					<div className="size-28 flex items-center justify-center border-4 border-primary rounded-full shadow-lg">
						<Zap
							size={ICONSIZE}
							strokeWidth={STROKEWIDTH}
							className="text-primary"
						/>
					</div>

					<p className="uppercase font-medium text-center">
						High quality and efficient
					</p>
				</div>
			</div>
		</Section>
	);
};

export default WhyBurton;
