export interface IDropdownOption {
	label: string;
    hint: string;
	value: string | number;
    color?: string
}

export interface IDropdownProps {
	name: string;
	options: IDropdownOption[];
	placeHolder?: string;
	labelName?: string;
    value: IDropdownOption;
    onChange: (e)=> void
}