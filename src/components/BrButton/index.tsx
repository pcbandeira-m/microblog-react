import { IButtonProps } from "./IButtonProps";

export default function BrButton({
	/*action,*/ label,
	className,
}: IButtonProps) {
	return (
		<button
			// onClick={action}
			className={className}
		>
			{label}
		</button>
	);
}
