import { FiCamera, FiFileText, FiLock, FiSearch, FiShare, FiTag,  } from "react-icons/fi";
import type { Feature } from "./types";

export const features: Feature[] = [
	{
		title: "Scan & Save",
		description: "both sides of your greeting cards in high quality.",
		icon: FiCamera,
	},
	{
		title: "Search and filter",
		description: "by person, event, or year.",
		icon: FiSearch,
	},
	{
		title: "Tag cards",
		description: "by event type, sender, or date.",
		icon: FiTag,
	},
	{
		title: "Written memories",
		description: "with AI handwriting-to-text conversion.",
		icon: FiFileText,
	},
	{
		title: "Share cards",
		description: "digitally with friends or family.",
		icon: FiShare,
	},
	{
		title: "Private and secure",
		description: "with end-to-end encryption.",
		icon: FiLock,
	},
];
