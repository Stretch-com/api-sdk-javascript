import { StretchAuth } from "./common/auth.js";

import Admin from "./admin/admin";
import Client from "./client/client";
import Coach from "./coach/coach";
import Nav from "./nav/nav";
import Payment from "./payment/payment";
import Search from "./search/search";
import Service from "./service/service";
import Session from "./session/session";
import Storage from "./storage/storage";
import User from "./user/user";

class Stretch {
  admin: Admin;
  client: Client;
  coach: Coach;
  nav: Nav;
  payment: Payment;
  search: Search;
  service: Service;
  session: Session;
  storage: Storage;
  user: User;

  constructor(
    clientId,
    apiUrl = "https://stage.stretch.com",
    apiBase = "/api/v1"
  ) {
    const stretchAuthObj = new StretchAuth(clientId, apiUrl, apiBase);

    this.admin = new Admin(stretchAuthObj);
    this.client = new Client(stretchAuthObj);
    this.coach = new Coach(stretchAuthObj);
    this.nav = new Nav(stretchAuthObj);
    this.payment = new Payment(stretchAuthObj);
    this.search = new Search(stretchAuthObj);
    this.service = new Service(stretchAuthObj);
    this.session = new Session(stretchAuthObj);
    this.storage = new Storage(stretchAuthObj);
    this.user = new User(stretchAuthObj);
  }
}

export default Stretch;
