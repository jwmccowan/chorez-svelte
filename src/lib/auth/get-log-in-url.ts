const getLogInUrl = (referrer?: string): string => {
	return referrer ? `/log-in?referrer=${encodeURIComponent(referrer)}` : '/log-in';
};

export default getLogInUrl;
