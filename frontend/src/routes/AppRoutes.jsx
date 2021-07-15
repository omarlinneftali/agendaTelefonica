import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ContactForm from "../components/contacts/ContactForm";
import ContactList from "../components/contacts/ContactList";
function AppRoutes() {
  return (
    <>
      <Switch>
        <Route exact path="/contacts/:id" component={ContactForm}></Route>
        <Route path="/" component={ContactList}></Route>
      </Switch>

      {/* <Redirect to={{ pathname: "/login" }}></Redirect> */}
    </>
  );
}

export default AppRoutes;
