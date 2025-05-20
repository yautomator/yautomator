export type Founder = {
	_id: string;
	firstName: string;
	lastName: string;
	role: string;
	country: string;
	linkedin: string;
	email: string;
	summary: string;
	cvUrl: string | null;
	cvName: string | null;
};

export type Startup = {
	_id: string;
	name: string;
	abbreviation: string;
	color: string;
	description: string;
	websiteUrl: string;
	foundedDate: string;
	industry: string;
	teamSize: number;
	location: string;
	keyDifferences: string;
	customersReach: string;
	revenueModels: string;
	fundingNeeded: number;
	productExplanation: string;
	fundingStage: string;
	tagline: string;
	number_of_users: number;
	logo: string;
	demoVideoUrl: string;
	teamIntroductionVideoUrl: string;
	pitchDeckUrl: string;
	pitchDeckName: string;
	incorporation: boolean;
	problemStatement: string;
	solution: string;
	founders: Founder[];
	user: string;
	applications: StartupApplication[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	hasCurrentCustomers: boolean;
	techStack: string[];
};

export type StartupApplication = {
	organization: string;
	applicationType: string;
	status: string;
	responses: Record<string, string>;
	createdAt: string;
	updatedAt: string;
	_id: string;
};

export type Program = {
	country: string;
	city: string;
	nextStartDate: string;
	applicationOpen: string;
	applicationDeadline: string;
	_id: string;
};

export type ApplicationQuestion = {
	question: string;
	type: 'text' | 'radio' | 'select' | 'upload' | 'checkbox' | 'email' | 'url';
	required: boolean;
	options: string[];
	maxLength?: number;
	_id: string;
	subLabel?: string;
};

export type AcceleratorDetails = {
	stageFocus: string[];
	restrictions: string;
	combinedValuation: number;
	numberOfCompaniesBacked: number;
	fundingAmount: number;
	equityTaken: string;
	programLength: string;
};

export type VCDetails = {
	stageFocus: string[];
	investorTeam: string[];
	portfolio: string[];
};

export type IncubatorDetails = {
	stageFocus: string[];
	portfolio: string[];
};

export type Accelerator = {
	_id: string;
	organizationType: 'ACCELERATOR' | 'VC' | 'INCUBATOR';
	name: string;
	description: string;
	subHeader: string;
	applicationUrl: string;
	url: string;
	logo: string;
	programs: Program[];
	requiresLogin: boolean;
	applicationQuestions: ApplicationQuestion[];
	applicationType: string;
	locations: string[];
	oneClickCost: number;
	guidedCost: number;
	vcDetails: VCDetails;
	acceleratorDetails: AcceleratorDetails;
	incubatorDetails: IncubatorDetails;
	createdAt: string;
	updatedAt: string;
};

export type Organization = {
	_id: string;
	organizationType: string;
	name: string;
	rpaName: string;
	description: string;
	subHeader: string;
	applicationUrl: string;
	url: string;
	logo: string;
	industries: string[];
	fundingType: string[];
	programs: string[];
	requiresLogin: boolean;
	applicationQuestions: OrganizationApplicationQuestion[];
	locations: string[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	apply: {
		cost: number;
		supported: boolean;
	};
	generateResponses: {
		cost: number;
		supported: boolean;
	};
	launchDetails: {
		visitors: number;
		listingTime: string;
		listingPrice: number;
	};
};

export type OrganizationApplicationQuestion = {
	maxLength: {
		limit: number;
		lengthType: string;
	};
	question: string;
	type: string;
	subType: string | null;
	required: boolean;
	options: string[];
	_id: string;
};

export function intToCurrency(amount: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		notation: 'compact',
	}).format(amount);
}

export function daysUntil(dateString: string) {
	const now = new Date();
	const deadline = new Date(dateString);
	const diff = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
	return diff;
}