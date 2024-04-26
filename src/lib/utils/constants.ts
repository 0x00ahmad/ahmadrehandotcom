export const TRANSITION_ALL = 'transition-all duration-150 ease-in-out';
export const TRANSITION_COLORS = 'transition-colors duration-150 ease-in-out';

export const MAX_PAGE_WIDTH = "max-w-[90vw]";

export const CONTACT_INFO = {
	email: 'contact@dnbazar.com',
	phone: '+000-000-0000'
};

export const OAUTH_PROVIDERS = {
	GOOGLE: 'google',
	FACEBOOK: 'facebook',
	LINKEDIN: 'linkedin',
}

export const USER_TYPES = {
	ADMIN: 1,
	USER: 0,
};

export const DEFAULT_CURRENCY = {
	name: 'USD',
	symbol: '$'
};

export const TRANSACTION_STATUS = {
	FAILED: 'failed',
	PENDING: 'pending',
	COMPLETED: 'completed',
	CANCELLED: 'cancelled',
};

export const DOMAIN_STATUS = {
	ACTIVE: 'active',
	INACTIVE: 'inactive',
	PENDING: 'pending', // for the buyer
	OFFERED: 'offered', // for the seller
	SOLD: 'sold', // to show to the seller when the domain is sold
	EXPIRED: 'expired',
	DELETED: 'deleted',

	DECLINED: 'declined', // to show to the buyer when the offer is declined
}

export const NAV_LINKS = {
	landing: "/",
	legal: "/legal",
	contact: "/contact",
	about: "/about",
	signin: "/auth/signin",
	dashboard: {
		home: "/u",
		finances: "/u/finance",
		profile: "/u/profile",
	},
	cart: "/cart",
	checkout: "/checkout",
}
