import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Routers from "./routers";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../src/hook/useCart";



function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <main className="main">
          <Routers />
        </main>
        <Footer />
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
