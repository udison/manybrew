type Size = "sm" | "md" | "lg" | "xl";

type Variant = "primary" | "secondary" | "brand" | "primary-outlined" | "secondary-outlined" | "brand-outlined";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	size?: Size;
	variant?: Variant;
}

const sizes: { [key in Size]: string } = {
	"sm": "text-sm px-4 py-2",
	"md": "text-md px-6 py-3",
	"lg": "text-lg px-8 py-4",
	"xl": "text-lg px-10 py-5",
};

const variants: { [key in Variant]: string } = {
	"primary": "bg-primary hover:bg-primary/80 active:bg-primary/60 text-secondary",
	"secondary": "bg-secondary hover:bg-secondary/70 active:bg-secondary/50 text-primary ",
	"brand": "bg-brand hover:bg-brand/70 active:bg-brand/50 text-white",
	"primary-outlined": "border border-primary hover:border-primary/60 active:border-primary/40 text-primary hover:text-primary/60 active:text-primary/40",
	"secondary-outlined": "border border-secondary hover:border-secondary/90 active:border-secondary/80 text-secondary",
	"brand-outlined": "border border-brand hover:border-brand/70 active:border-brand/50 text-brand hover:text-brand/60 active:text-brand/40",
};

export default function Button(props: ButtonProps) {
	return (
		<button
			className={`
				flex
				items-center
				justify-center
				gap-2
				cursor-pointer
				rounded-md
				transition-colors
				select-none
				
				${sizes[props.size || "md"]}
				${variants[props.variant || "primary"]}
			`}
			type={props.type || "button"}

			{...props}
		>
			{props.children}
		</button>
	)
}
