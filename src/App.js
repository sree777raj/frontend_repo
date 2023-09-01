import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Router from './routes/Router';
import Toast from './components/Toast/Toast';

function App() {
  return (
    <>
    <Toast />
    <Router/>
    </>
  );
}

export default App;
