// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Organization {
		_id: string;
		organizationType: 'ACCELERATOR' | 'VC' | 'INCUBATOR';
		name: string;
		description: string;
		subHeader: string;
		applicationUrl: string;
		url: string;
		logo: string;
		industries: string[];
		fundingType: string[];
		programs: {
			isOpen: boolean;
			title: string;
			description: string;
			country: string;
			city: string;
			nextStartDate: string;
			applicationOpen: string;
			applicationDeadline: string;
			_id: string;
		}[];
		requiresLogin: boolean;
		applicationQuestions: {
			maxLength: {
				limit: number | null;
				lengthType: string;
			};
			question: string;
			subLabel: string;
			type: 'text' | 'radio' | 'select' | 'upload' | 'checkbox' | 'email' | 'url';
			subType: string | null;
			required: boolean;
			options: string[];
			_id: string;
		}[];
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
		acceleratorDetails: {
			equityTaken: {
				minAmount: number;
				maxAmount: number;
				unit: string;
			};
			stageFocus: string[];
			portfolio: string[];
			restrictions: string;
			fundingAmount: number;
			programLength: string;
			combinedValuation: number;
			numberOfCompaniesBacked: number;
		};
		vcDetails: {
			stageFocus: string[];
			investorTeam: string[];
			portfolio: string[];
		};
		incubatorDetails: {
			stageFocus: string[];
			portfolio: string[];
		};
	}

	interface Startup {
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
		founders: {
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
		}[];
		user: string;
		applications: {
			organization: string;
			applicationType: string;
			status: string;
			responses: Record<string, string>;
			createdAt: string;
			updatedAt: string;
			_id: string;
		}[];
		createdAt: string;
		updatedAt: string;
		__v: number;
		hasCurrentCustomers: boolean;
		techStack: string[];
	}
}

export {};
