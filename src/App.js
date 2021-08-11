import "./App.css";
import LoginCard from "./Components/Functionalities/LoginCard";
import { Provider } from "react-redux";
import { Store } from "./Store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Header from "./Components/UI/Header";
import NavBar from "./Components/UI/NavBar";

function App() {
  return (
    <Provider store={Store}>
      <Header />
      <NavBar />
      <BrowserRouter>
        <Route exact path="/">
          <LoginCard />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
