import './App.css';
import Row from './Row';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [db, setdb] = useState([]);
  function passDate(name, amount, store) {
    console.log(db)
    setdb([...db, ({ title: name, status: 0, amount: amount, store: store })])
    console.log(db)
  }
  return (
    <div className="App">
      <div>{db.map(a =>
        <Row item = {a}></Row>
        )}
      </div>
      <Form a ={passDate}></Form>
    </div>
  );
}

export default App;
