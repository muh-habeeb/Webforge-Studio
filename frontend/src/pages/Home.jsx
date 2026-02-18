import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      {" "}
      <Header />
      <main className="main-content">
        <h1 className="text-4xl font-bold text-center mt-10">
          Welcome to WebForge Studio
        </h1>
        <p className="text-center mt-4 text-lg">
          Crafting digital experiences with creativity and precision.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Home;
