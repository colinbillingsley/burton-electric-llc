"use client";
import { MessageSquare, Minus, Plus } from "lucide-react";

const ICONSIZE: number = 18;

const FaqCard = ({
	question,
	answer,
	isOpen,
	onToggle,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onToggle: () => void;
}) => {
	return (
		<div
			onClick={onToggle}
			className={`${
				isOpen ? "border-primary" : "border-b-gray-200 hover:border-primary/35"
			} p-6 px-3 py-6 border-b bg-transparent hover:bg-muted/35 transition-colors duration-300 overflow-hidden`}
		>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-4">
					<MessageSquare size={ICONSIZE} className="shrink-0" />
					<p className="font-semibold text-sm md:text-base">{question}</p>
				</div>
				{isOpen ? (
					<Minus size={ICONSIZE} className="shrink-0" />
				) : (
					<Plus size={ICONSIZE} className="shrink-0" />
				)}
			</div>
			<div
				className={`${
					isOpen ? "opacity-100 max-h-96 mt-4" : "opacity-0 max-h-0"
				} transition-all`}
			>
				<p className="text-sm">{answer}</p>
			</div>
		</div>
	);
};

export default FaqCard;
