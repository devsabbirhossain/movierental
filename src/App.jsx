import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Content />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
