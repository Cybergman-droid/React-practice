function App() {
	return (
		<>
			<WelcomeMessage />
			<InputArea />
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

function Button({ text }: { text: string }) {
	return (
		<div>
			<button className='btn btn-success'>{text}</button>
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

function InputArea() {
	return (
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
				<Button text='Encrypt'></Button>
				<Button text='Decrypt'></Button>
			</div>
		</div>
	);
}
export default App;
