export enum ProgressItemPosition {
	LEFT = 'LEFT',
	MIDDLE = 'MIDDLE',
	RIGHT = 'RIGHT'
}

export type Founder = {
	name: string;
	surname: string;
	role: string;
	countryOfLiving: string;
	linkedinProfileUrl: string;
	email: string;
	summary: string;
	cvUrl: string | null;
};

export enum Icons {
	Organization = '/lotties/organization.json',
	Attachment = '/lotties/attachment.json',
	Check = '/lotties/check.json'
}
