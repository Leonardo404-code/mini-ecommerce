import React from "react";
import { Route, Switch } from "react-router-dom";
import { Warning } from "../pages/Warning";
import { Thanks } from "../pages/Thanks";
import { Payment } from "../pages/Payment";
import { AddPhoto } from "../pages/AddPhoto";
import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { Creadits } from "../pages/Credits";
import { NewItem } from "../pages/NewItem";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/credits" component={Creadits} />
      <Route exact path="/cart" component={Cart} />
      <Route path="/new_item/" component={NewItem} />
      <Route path={"/add_photo/:id"} component={AddPhoto} />
      <Route path={"/warning"} component={Warning} />
      <Route path="/payment" component={Payment} />
      <Route path={"/thanks"} component={Thanks} />
    </Switch>
  );
}
