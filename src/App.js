import "./Responsive.css";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maps from "./components/Maps";
import MenuList from "./components/MenuList";

function App() {
  return (
    <div>
      <Header />
      <Container />
      <MenuList />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
