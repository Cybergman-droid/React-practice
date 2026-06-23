import { useState, type ComponentProps } from "react";
function App() {
	return (
		<>
			<WelcomeMessage />
			<InputForm />
			<TestButtonGroup type={One} />
		</>
	);
}

function WelcomeMessage() {
	return (
		<div>
			<p className='flex justify-center'>
				Welcome to the ceaser cipher program
			</p>
			<p className='flex justify-center'>
				Input your text and key to encrypt or decrypt your text
			</p>
		</div>
	);
}
type ButtonVariant = "encrypt" | "decrypt";
type ButtonProps = {
	variant: ButtonVariant;
} & ComponentProps<"button">;

function getVarientStylesButton(variant: ButtonVariant) {
	switch (variant) {
		case "encrypt":
			return "accent";

		case "decrypt":
			return "info";
		default:
			throw new Error(`Invalid variant: ${variant satisfies never}`);
	}
}

function Button({ ...props }: ButtonProps) {
	return (
		<div>
			<button
				{...props}
				className={`btn btn-${getVarientStylesButton(props.variant)}`}
			>
				{props.content}
			</button>
		</div>
	);
}

function TextArea({ placeholder }: { placeholder: string }) {
	return (
		<textarea
			placeholder={placeholder}
			className='textarea textarea-info resize-none'
		></textarea>
	);
}
let buttonTypes: string[] = [
	"info",
	"secondary",
	"accent",
	"success",
	"warning",
	"error",
];
function TestButton({ type, content }: { type: string; content?: string }) {
	return (
		<div>
			<button className={`btn btn-${type}`}>{content ?? ""}</button>
		</div>
	);
}

function TestButtonVariant(variant: any) {
	switch (variant) {
		case "One":
			return "accent";

		case "decrypt":
			return "info";
	}
}
function TestButtonGroup({ type }: { type: string }) {
	const handleClick = (e: any) => {
		console.log(`Clicked element: ${e.target}`);
		console.log(`Clicked element content: ${e.target.innerHTML}`);
	};
	switch (type) {
		case "One":
			return (
				<div className='flex gap-7' onClick={handleClick}>
					<TestButton type='accent' content='One' />
					<TestButton type={type} content='Two' />
					<TestButton type={type} content='Three' />
					<TestButton type={type} content='Four' />
				</div>
			);

		case "Two":
			return (
				<div className='flex gap-7' onClick={handleClick}>
					<TestButton type='primary' content='One' />
					<TestButton type='accent' content='Two' />
					<TestButton type='primary' content='Three' />
					<TestButton type='primary' content='Four' />
				</div>
			);

		case "Three":
			return (
				<div className='flex gap-7' onClick={handleClick}>
					<TestButton type='primary' content='One' />
					<TestButton type='primary' content='Two' />
					<TestButton type='accent' content='Three' />
					<TestButton type='primary' content='Four' />
				</div>
			);
		case "Four":
			return (
				<div className='flex gap-7' onClick={handleClick}>
					<TestButton type='primary' content='One' />
					<TestButton type='primary' content='Two' />
					<TestButton type='primary' content='Three' />
					<TestButton type='accent' content='Four' />
				</div>
			);
		default:
			break;
	}
}

function InputForm() {
	return (
		<form>
			<div className='flex flex-col justify-center'>
				<div className='flex justify-center '>
					<TextArea placeholder='Input' />

					<div className='divider divider-horizontal'></div>
					<TextArea placeholder='Output' />
				</div>
				<div className='flex justify-center'>
					<TextArea placeholder='Key' />
				</div>

				<div className='flex gap-4 justify-center'>
					<Button variant='encrypt' content='Encrypt'></Button>
					<Button variant='decrypt' content='Decrypt'></Button>
				</div>
			</div>
		</form>
	);
}
export default App;
