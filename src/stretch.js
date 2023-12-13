import { Auth } from "./auth/index.js";
import { StretchAuth } from "./common/auth.js";

import Admin from "./admin/admin.js";
import Coach from "./coach/coach.js";
import Nav from "./nav/nav.js";
import Payment from "./payment/payment.js";
import Search from "./search/search.js";
import Service from "./service/service.js";
import Session from "./session/session.js";
import Storage from "./storage/storage.js";

class Stretch extends StretchAuth {
  constructor(
    clientId,
    apiUrl = "https://stage.stretch.com",
    apiBase = "/api/v1"
  ) {
    super(clientId, apiUrl, apiBase);

    this.admin = new Admin(this);
    this.auth = new Auth(this);
    this.coach = new Coach(this);
    this.nav = new Nav(this);
    this.search = new Search(this);
    this.storage = new Storage(this);
    this.session = new Session(this);
    this.service = new Service(this);
    this.payment = new Payment(this);
  }
}

export default Stretch;
