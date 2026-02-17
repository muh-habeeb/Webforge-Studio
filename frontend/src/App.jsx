import Header from "./components/header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Carosel from "./components/Carosel";
const App = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to WebForge Studio
        </h1>
        <p className="text-center mt-4 text-lg">
          Crafting digital experiences with creativity and precision.
        </p>
        <Card />    
         <br>
        </br>
     
      </main>
      <Footer />
    </>
  );
};

export default App;
