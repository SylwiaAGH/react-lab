import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');


    function handleChange(event) {

        setEmail(event.target.value);
    }
    let message = '';
    if (email.length<5) {
        message = 'Ale masz krótki adres!'
    } else if (email.length < 15) {
        message = 'Twój adres e-mail jest w sam raz.'
    } else {
        message = 'Twój adres e-mail jest stanowczo za długi.'
    }


    return (
    <div>
      <h1> System do zapisów na zajęcia </h1>
        <h2>Twój e-mail to {email}</h2>
        {email.length >0 && <div> {message} </div>}
        <input type="text" onChange={handleChange}/>
        <button onClick= {()=> alert(email)}> Wyświetl mój adres </button>

    </div>
  );
}

export default App;
