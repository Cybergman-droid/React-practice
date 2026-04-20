function App() {
	return (
		<>
			<Text display='hello'></Text>
			<Text display={"how are you"}></Text>
		</>
	);
}

function Text({ display }: { display: string }) {
	return (
		<div>
			<p>{display}</p>
		</div>
	);
}

export default App;
