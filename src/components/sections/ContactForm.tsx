import { memo, useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "General Contact"
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission here
		console.log("Form submitted:", formData);
		// Reset form
		setFormData({
			name: "",
			email: "",
			subject: "General Contact"
		});
	};

	return (
		<div className="mb-8">
			<div className="relative">
				<div className="absolute inset-0 flex items-center" aria-hidden="true">
					<div className="mx-auto border-t border-white/10" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-black px-6 text-sm font-medium tracking-wider text-white/50 uppercase">
						Contact Us
					</span>
				</div>
			</div>

			<div className="mt-6 max-w-md mx-auto">
				<form onSubmit={handleSubmit} action="https://submit-form.com/2T4uxaq91" className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleInputChange}
							required
							className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-500 transition-all duration-200 focus:border-white/20 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/10"
							placeholder="Enter your name"
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							required
							className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-gray-500 transition-all duration-200 focus:border-white/20 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/10"
							placeholder="Enter your email address"
						/>
					</div>

					<div>
						<label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
							Subject
						</label>
						<select
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleInputChange}
							className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white transition-all duration-200 focus:border-white/20 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/10"
						>
							<option value="General Contact" className="bg-gray-900 text-white">
								General Contact
							</option>
							<option value="Feedback" className="bg-gray-900 text-white">
								Feedback
							</option>
							<option value="Support" className="bg-gray-900 text-white">
								Support
							</option>
						</select>
					</div>

					<button
						type="submit"
						className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-white font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 shadow-sm shadow-black/5 active:transform active:scale-[0.98]"
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default memo(ContactForm);
