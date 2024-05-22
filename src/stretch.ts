import { StretchAuth } from "./common/auth.js";

import Admin from "./admin/admin.js";
import Coach from "./coach/coach.js";
import Nav from "./nav/nav.js";
import Payment from "./payment/payment.js";
import Search from "./search/search.js";
import Service from "./service/service.js";
import Session from "./session/session.js";
import Storage from "./storage/storage.js";

class Stretch {
  admin: Admin;
  coach: Coach;
  nav: Nav;
  search: Search;
  storage: Storage;
  session: Session;
  service: Service;
  payment: Payment;

  constructor(
    clientId,
    apiUrl = "https://stage.stretch.com",
    apiBase = "/api/v1"
  ) {
    const stretchAuthObj = new StretchAuth(clientId, apiUrl, apiBase);

    this.admin = new Admin(stretchAuthObj);
    this.coach = new Coach(stretchAuthObj);
    this.nav = new Nav(stretchAuthObj);
    this.search = new Search(stretchAuthObj);
    this.storage = new Storage(stretchAuthObj);
    this.session = new Session(stretchAuthObj);
    this.service = new Service(stretchAuthObj);
    this.payment = new Payment(stretchAuthObj);
  }
}

export default Stretch;
