export type ModalsType = {
	addFounderModal: HTMLDialogElement | undefined;
	editFounderModal: HTMLDialogElement | undefined;
	applyModal: HTMLDialogElement | undefined;
};

export const modals = $state<ModalsType>({
	addFounderModal: undefined,
	editFounderModal: undefined,
	applyModal: undefined
});
