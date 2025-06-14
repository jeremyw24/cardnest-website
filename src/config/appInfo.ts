import type { AppLogo, StoreLinks } from "./types";

export const appInfo = {
	title: "CardNest",
	description:
		"Keep your greeting cards safe, searchable, and beautifully stored — forever. CardNest is your digital vault for all your cherished cards.",
	logo: {
		type: "image" as AppLogo["type"],
		src: "app_icon.png",
	},
	storeLinks: {
		apple: "https://apps.apple.com/us/app/cardnest/id6747030750",
		google: "#",
	} as StoreLinks,
};
