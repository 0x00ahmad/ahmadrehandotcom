import IconDashboard from "~icons/lucide/layout-dashboard";
import IconWallet from "~icons/lucide/wallet";

export const TRANSITION_ALL = "transition-all duration-150 ease-in-out";
export const TRANSITION_COLORS = "transition-colors duration-150 ease-in-out";

export const HEADING_DEFAULT_GRADIENT =
	"inline-block bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent";

export const MAX_PAGE_WIDTH = "max-w-[100vw] sm:max-w-[80vw] xl:max-w-[60rem]";

export const noReplySenderEmail = "noreply@dnbazar.com";

export const CONTACT_EMAIL = "contact@ahmadrehan.com";

export const MAILTO_LINK = "mailto:" + CONTACT_EMAIL;

export const OAUTH_PROVIDERS = {
	GOOGLE: "google",
	FACEBOOK: "facebook",
	LINKEDIN: "linkedin"
};

export const USER_TYPES = {
	ADMIN: 1,
	USER: 0
};

export const DEFAULT_CURRENCY = {
	name: "USD",
	symbol: "$"
};

export const TRANSACTION_STATUS = {
	FAILED: "failed",
	PENDING: "pending",
	COMPLETED: "completed",
	CANCELLED: "cancelled"
};

export const DOMAIN_STATUS = {
	ACTIVE: "active",
	INACTIVE: "inactive",

	TO_CONFIRM: "to_confirm", // for the buyer
	ON_HOLD: "on_hold", // for the seller
	SOLD: "sold", // for the seller
	DECLINED: "declined", // to show to the buyer when the offer is declined

	EXPIRED: "expired",
	DELETED: "deleted"
};

export const NAV_LINKS = {
	landing: "/",
	work: "/#work",
	personal_projects: "/#personal-projects",
	skills: "/#skills",
	resume: "/resume",

	contact: MAILTO_LINK
};

export const SITE_LINKS = [
	{ name: "Home", href: NAV_LINKS.landing, icon: IconDashboard },
	{ name: "Work", href: NAV_LINKS.work, icon: IconWallet },
	// {
	// 	name: "Personal Projects",
	// 	href: NAV_LINKS.personal_projects,
	// 	icon: IconSquareUser
	// },
	{ name: "Skills", href: NAV_LINKS.skills, icon: IconWallet },
	{ name: "Resume", href: NAV_LINKS.resume, icon: IconWallet }
];
