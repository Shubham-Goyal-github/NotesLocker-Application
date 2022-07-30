import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { Route, BrowserRouter } from "react-router-dom";
import MyNotes from "./Screens/MyNotes/MyNotes";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/mynotes" component={() => <MyNotes />} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
