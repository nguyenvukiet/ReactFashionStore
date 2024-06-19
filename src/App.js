import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Routers from "./routers";
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routers />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
