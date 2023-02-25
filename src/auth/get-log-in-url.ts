const getLogInUrl = (referrer?: string): string => {
	return referrer ? `/log-in?referrer=${referrer}` : '/log-in';
};

export default getLogInUrl;
