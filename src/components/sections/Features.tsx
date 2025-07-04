import { memo } from "react";
import type { FeaturesProps } from "config";

const Features = ({ items }: FeaturesProps) => {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">Features</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{items.map((feature) => {
					const Icon = feature.icon;
					return (
						<div
							key={feature.title}
							className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.03] p-6"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/[0.04]">
								<Icon className="h-6 w-6 text-gray-700 dark:text-white opacity-90" />
							</div>
							<h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
							<p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default memo(Features);
