import './App.css';
import Navbar from "./component/navbar/Navbar";
import Header from "./component/header/Header";
import Moviecast from "./component/moviecast/Moviecast";
import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="Header">
      <Navbar/>
      <Header/>
      <Moviecast/>
      <Footer/>
    </div>
  );
}

export default App;
