import { motion } from "framer-motion";
import { memo } from "react";
import type { ScreenshotsProps } from "config";
import { areImagesEqual } from "config";

const Screenshots = ({ images }: ScreenshotsProps) => {
	const currentImages = images.iphone;

	return (
		<div className="mb-16">
			<div className="mb-6">
				<h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Screenshots</h2>
			</div>
			<div className="relative overflow-hidden min-h-[400px]">
				<div className="screenshots-container scrollbar-thin scrollbar-track-gray-200 dark:scrollbar-track-white/5 scrollbar-thumb-gray-300 dark:scrollbar-thumb-white/10 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-white/20 overflow-x-auto">
					<div className="flex gap-6 pb-4">
						{currentImages.map((image, index) => (
							<motion.button
								key={image}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: { delay: index * 0.1 },
								}}
								type="button"
								onClick={() => window.openLightbox?.(index, "iphone")}
								className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
							>
								<img
									src={image}
									alt={`Screenshot ${index + 1}`}
									className="aspect-[9/16] w-[260px] rounded-xl border border-white/10 object-cover"
									loading="lazy"
								/>
							</motion.button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(Screenshots, areImagesEqual);
