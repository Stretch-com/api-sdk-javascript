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

class Stretch extends StretchAuth {
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
    super(clientId, apiUrl, apiBase);

    this.admin = new Admin(clientId, apiUrl, apiBase);
    this.client = new Client(clientId, apiUrl, apiBase);
    this.coach = new Coach(clientId, apiUrl, apiBase);
    this.nav = new Nav(clientId, apiUrl, apiBase);
    this.payment = new Payment(clientId, apiUrl, apiBase);
    this.search = new Search(clientId, apiUrl, apiBase);
    this.service = new Service(clientId, apiUrl, apiBase);
    this.session = new Session(clientId, apiUrl, apiBase);
    this.storage = new Storage(clientId, apiUrl, apiBase);
    this.user = new User(clientId, apiUrl, apiBase);
  }
}

export default Stretch;
