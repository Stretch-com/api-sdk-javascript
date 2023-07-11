import { Admin } from "./admin/admin.js";
import { Auth } from "./auth/index.js";
import { Coach } from "./coach/coach.js";
import { StretchAuth } from "./common/auth.js";
import { Nav } from "./nav/nav.js";
import { Search } from "./search/search.js";
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
  }
}

export default Stretch;
