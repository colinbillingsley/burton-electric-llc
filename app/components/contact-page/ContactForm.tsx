"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import H2 from "../H2";

const ContactForm = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Submit logic here (API, third-party service, etc.)
		console.log(form);

		setForm({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full space-y-6 bg-white border-2 border-secondary p-8 rounded-sm"
		>
			<H2>Have an Inquiry? Get in touch with us today!</H2>
			<div className="space-y-2">
				<label htmlFor="name" className="font-medium text-sm block block">
					Name *
				</label>
				<Input
					id="name"
					name="name"
					type="text"
					placeholder="Your full name"
					value={form.name}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div className="space-y-2">
					<label htmlFor="email" className="font-medium text-sm block">
						Email *
					</label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="example@email.com"
						value={form.email}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="phone" className="font-medium text-sm block">
						Phone *
					</label>
					<Input
						id="phone"
						name="phone"
						type="tel"
						placeholder="1231231234"
						value={form.phone}
						onChange={handleChange}
						required
					/>
				</div>
			</div>

			<div className="space-y-2">
				<label htmlFor="subject" className="font-medium text-sm block">
					Subject *
				</label>
				<Input
					id="subject"
					name="subject"
					type="text"
					placeholder="Subject of your message"
					value={form.subject}
					onChange={handleChange}
					required
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="message" className="font-medium text-sm block">
					Message *
				</label>
				<Textarea
					id="message"
					name="message"
					placeholder="How can we help you?"
					rows={5}
					value={form.message}
					onChange={handleChange}
					required
				/>
			</div>

			<Button type="submit" className="w-full">
				Send Message
			</Button>
		</form>
	);
};

export default ContactForm;
