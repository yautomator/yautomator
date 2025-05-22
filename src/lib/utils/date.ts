export const convertDatetimeToDate = (datetime: string | undefined) => {
	if (!datetime) return null;

	return new Date(datetime).toLocaleDateString('en-CA');
};

export function daysUntil(dateString: string) {
	const now = new Date();
	const deadline = new Date(dateString);
	const diff = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
	return diff;
}
