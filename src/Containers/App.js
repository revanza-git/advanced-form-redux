import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "../Store";
import FormPage from "./FormContainer/FormPage";
import OtherPage from "./FormContainer/OtherPage";
import {
  BrowserRouter as Router,
  Route,
  useParams,
  Switch,
  useLocation,
} from "react-router-dom";

const store = configureStore();

function PageType() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { page } = useParams();

  return (
    <div>
      <h3>pageType: {page}</h3>
    </div>
  );
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Route path="/spaj/nasabah" component={OtherPage} />

      {/*To Get The Params Query*/}
      {/* <Switch>
        <Route path="/:page/:slug" children={<PageType />} />
      </Switch> */}
    </Router>
  </Provider>
);

export default App;
