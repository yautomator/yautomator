export enum ProgressItemPosition {
	LEFT = 'LEFT',
	MIDDLE = 'MIDDLE',
	RIGHT = 'RIGHT'
}

export type Founder = {
	_id: string;
	firstName: string;
	lastName: string;
	role: string;
	countryOfLiving: string;
	linkedinProfileUrl: string;
	email: string;
	summary: string;
	cvUrl: string | null;
};

export enum Icons {
	Organization = '/lotties/organization.json',
	Loading = '/lotties/loading.json',
	Attachment = '/lotties/attachment.json',
	Check = '/lotties/check.json'
}

export enum TableAlignment {
	LEFT = 'left',
	CENTER = 'center',
	RIGHT = 'right',
}
