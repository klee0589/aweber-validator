import './App.css';
import Validator from './components/validator/Validator'

// Has two input fields to validate the entry from the user(both inputs must match)
// Password has a min length of 6 characters
// Password has at least 1 uppercase character
// Password has at least 1 lowercase character
// Password has at least 1 number
// Password has at least 1 special character(!@#$ %^&* ()_ -+={ [}]|:; "'<,>.)
// Has a submit button that will trigger validation and present success or why the password entry failed

function App() {
  return (
    <div className="App">
        <Validator />
    </div>
  );
}

export default App;
