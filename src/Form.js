function Form(props) {
	function click() {
		props.a(
			document.getElementById("name").value,
			document.getElementById("amount").value,
			document.getElementById("store").value
		);
		document.getElementById("name").value = "";
		document.getElementById("amount").value = "";
		document.getElementById("store").value = "";
	}	
	return <div className="form">
        <input id="name" placeholder="name"></input>
        <input id="amount" placeholder="amount"></input>
        <input id="store" placeholder="store"></input>
        <button onClick={click}>okey</button>
	</div>
}

export default Form;