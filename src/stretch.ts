import { StretchAuth } from "./common/auth";

import Admin from "./admin/admin";
import Business from "./business/business";
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
  auth: StretchAuth;
  admin: Admin;
  business: Business;
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
    clientId: string,
    apiUrl: string = "https://stage.stretch.com",
    apiBase: string = "/api/v1"
  ) {
    this.auth = new StretchAuth(clientId, apiUrl, apiBase);

    this.admin = new Admin(this.auth);
    this.business = new Business(this.auth);
    this.client = new Client(this.auth);
    this.coach = new Coach(this.auth);
    this.nav = new Nav(this.auth);
    this.payment = new Payment(this.auth);
    this.search = new Search(this.auth);
    this.service = new Service(this.auth);
    this.session = new Session(this.auth);
    this.storage = new Storage(this.auth);
    this.user = new User(this.auth);
  }
}

export default Stretch;
