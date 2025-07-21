"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import H2 from "../H2";
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ContactForm = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const validate = () => {
		const newErrors = {
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		};

		if (!form.name.trim()) newErrors.name = "Name is required.";

		if (!form.email.trim()) {
			newErrors.email = "Email is required.";
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
			newErrors.email = "Invalid email address.";
		}

		if (!form.phone.trim()) {
			newErrors.phone = "Phone is required.";
		} else if (!/^\d{7,}$/.test(form.phone)) {
			newErrors.phone = "Phone number must be at least 7 digits.";
		}

		if (!form.subject.trim()) newErrors.subject = "Subject is required.";
		if (!form.message.trim()) newErrors.message = "Message is required.";

		setErrors(newErrors);

		// If any error exists, return false
		return Object.values(newErrors).every((error) => error === "");
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validate()) return;

		console.log(form);

		setForm({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
		setErrors({
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

			{/* Name */}
			<div className="space-y-2">
				<label htmlFor="name" className="font-medium text-sm block">
					Name *
				</label>
				<Input
					id="name"
					name="name"
					type="text"
					placeholder="Your full name"
					value={form.name}
					onChange={handleChange}
				/>
				{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
			</div>

			{/* Email & Phone */}
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
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email}</p>
					)}
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
					/>
					{errors.phone && (
						<p className="text-red-500 text-sm">{errors.phone}</p>
					)}
				</div>
			</div>

			{/* Subject */}
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
				/>
				{errors.subject && (
					<p className="text-red-500 text-sm">{errors.subject}</p>
				)}
			</div>

			{/* Message */}
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
				/>
				{errors.message && (
					<p className="text-red-500 text-sm">{errors.message}</p>
				)}
			</div>

			{/* <Button type="submit" className="w-full" size={"lg"}>
				Send Message
			</Button> */}
			<Button type="button" size={"lg"} className="w-full">
				<AlertDialog>
					<AlertDialogTrigger className="w-full">
						Send Message
					</AlertDialogTrigger>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle>
								Sending a message to Burton Electric LLC is currently undergoing
								maintainence.
							</AlertDialogTitle>
							<AlertDialogDescription>
								While we work on improving our contact form, please reach out to
								us via phone or email for any inquiries. Thank you for your
								understanding!
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel>Continue</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			</Button>
		</form>
	);
};

export default ContactForm;
