export const convertDatetimeToDate = (datetime: string | undefined) => {
	if (!datetime) return null;

	return new Date(datetime).toLocaleDateString('en-CA');
};
