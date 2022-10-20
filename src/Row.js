import './App.css';
import { useState } from 'react';

function Row(props) {
	const [status, setStatus] = useState(props.item.status);
	console.log(props);
	return (
   
		<div className={status ? 'success' : ''}>
			{props.item.title}-
			{saleStatus(status)}-
			{props.item.amount}-
			{props.item.store}-
			{!status ? <button onClick={done}>⭕</button>:<button onClick={done}>✅</button>}
		</div>)
	function done(){
		if (status) {
			setStatus(0);
		} else setStatus(1);
	}
}

function saleStatus(status) {
   if (status === 0) {
   return 'to buy'
	}return 'done';
}
	


export default Row;
