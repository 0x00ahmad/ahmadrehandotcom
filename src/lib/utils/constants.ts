export const TRANSITION_ALL = 'transition-all duration-150 ease-in-out';
export const TRANSITION_COLORS = 'transition-colors duration-150 ease-in-out';

export const MAX_PAGE_WIDTH = "max-w-[80vw]";
export const DESKTOP_MAX_PAGE_WIDTH = "max-w-[80vw]";

export const SITE_LINKS = [
	{ name: 'Home', link: '/' },
	{ name: 'Services', link: '/services' },
	{ name: 'Shop', link: '/shop' }
];

export const COMPANY_LINKS = [
	{ name: 'Contact us', link: '/contact' },
	{ name: 'About Us', link: '/about' }
];

export const NAV_LINKS = [...SITE_LINKS, ...COMPANY_LINKS];

export const CONTACT_INFO = {
	email: 'contact@dnbazar.com',
	phone: '+000-000-0000',
	location: 'some plot, flat, street, city, state, country, zip code, postal code'
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
