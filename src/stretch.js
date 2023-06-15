import {StretchAuth} from "./common/auth.js";
import {Auth} from "./auth/index.js";
import {Coach} from "./coach/coach.js"
import {Search} from "./search/search.js"
import Admin from "./admin/admin.js";

class Stretch extends StretchAuth{

    constructor(clientId, apiUrl = "https://stage.stretch.com", apiBase = '/api/v1') {
        super(clientId, apiUrl, apiBase);
        this.admin = new Admin(this)
        this.auth = new Auth(this)
        this.coach = new Coach(this)
        this.search = new Search(this)
    }

    async getUser(){
        if (await this.checkAuth()){
            return await this.get(`/auth/user`)
        }
    }

    async locations(){
        if (await this.checkAuth()){
            return await this.get(`/nav/locations`)
        }
    }

    async locationCreate(location){
        if (await this.checkAuth()){
            return await this.post(`/nav/location`, location)
        }
    }

    async locationUpdate(locationId, location){
        if (await this.checkAuth()){
            return await this.put(`/nav/location/${locationId}`, location)
        }
    }

    async search(filter = {}){
        if (await this.checkAuth()){
            return await this.post('/search',{...filter })
        }
    }

    async coachServices(coachId){
        if (await this.checkAuth()){
            return await this.get(`/coach/${coachId}/services`)
        }
    }

    async serviceAvailability(serviceId, toDate = null){

        if (await this.checkAuth()){

            //if (toDate == null ) toDate = (new Date(new Date() + 1209600000)).toISOString();
            const payload = {
                 //to_date : toDate
            }
            console.log(payload)
            return await this.get(`/service/${serviceId}/availability`, payload)
        }
    }

    async createSessions(serviceId, payload){
        if (await this.checkAuth()){
            return await this.post(`/service/${serviceId}`, {...payload })
        }
    }

    async checkoutPayment(paymentId){
        if (await this.checkAuth()){
            return await this.post(`/payment/checkout/${paymentId}` )
        }
    }

    async service(serviceId){
        if (await this.checkAuth()){
            return await this.get(`/service/${serviceId}` )
        }
    }

    async payment(paymentId){
        if (await this.checkAuth()){
            return await this.get(`/payment/checkout/${paymentId}`);
        }
    }
    async paymentHash(hashId){
        if (await this.checkAuth()){
            return await this.get(`/payment/hash/${hashId}`);
        }
    }


    async geocoding(coords){
        if (await this.checkAuth()){
            return await this.get(`/nav/geocoding/${coords}.json`, );
        }
    }

    async geolocation(search_name, proximity = null){
        if (await this.checkAuth()){
            return await this.get(`/nav/geolocation/${search_name}.json`, {
                proximity : proximity
            });
        }
    }

    async paymentHash(hashId){
        if (await this.checkAuth()){
            return await this.get(`/payment/hash/${hashId}`);
        }
    }



}

export default Stretch;