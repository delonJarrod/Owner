import "./App.css";
import { Route, Switch } from "react-router-dom";
//import the layout with the main navigation
import Layout from "./components/layout/Layout";
//importing bootstrap
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/*define for which path which component should be loaded */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
