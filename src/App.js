import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Main/Home/Home";
import About from "./Components/Main/About/About";
import Services from "./Components/Main/Services/Services";
import Contact from "./Components/Main/Contact/Contact";
import NotFound from "./Components/Main//NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import ServiceDetails from "./Components/Main/Services/ServicePackage/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/service/:serviceId" component={ServiceDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
