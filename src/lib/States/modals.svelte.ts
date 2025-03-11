export type ModalsType = {
	addFounderModal: HTMLDialogElement | undefined;
	editFounderModal: HTMLDialogElement | undefined;
};

export const modals = $state<ModalsType>({
	addFounderModal: undefined,
	editFounderModal: undefined
});
