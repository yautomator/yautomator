import type { Founder as FounderType } from '$lib/Common';

export const emptyFounder: FounderType = {
    name: "",
    surname: "",
    linkedinProfileUrl: "",
    countryOfLiving: "",
    email: "",
    summary: "",
    role: ""
}   

export const founders = $state([emptyFounder])