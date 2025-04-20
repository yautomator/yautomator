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
	description: string;
	websiteUrl: string;
	foundedDate: string;
	industry: string;
	teamSize: number;
	location: string;
	fundingStage: string;
	url: string;
	tagline: string;
	revenue: number;
	number_of_users: number;
	logo: string;
	demoVideoUrl: string;
	teamIntroductionVideoUrl: string;
	pitchDeckUrl: string;
	pitchDeckName: string;
	incorporation: boolean;
	founders: Founder[];
	user: string;
	applications: any[];
	createdAt: string;
	updatedAt: string;
	__v: number;
	abbreviation: string;
	color: string;
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
