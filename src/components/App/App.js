import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import useFormWithValidation from "../../hooks/useFormWithValidation";

function App() {
  const validation = useFormWithValidation();

  return (
    <div className="page__content">
      <Header />
      <Main validation={validation} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
