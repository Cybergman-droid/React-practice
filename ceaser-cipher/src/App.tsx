import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Text display={"hello"}></Text>
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
