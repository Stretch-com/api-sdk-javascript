
import {StretchBase} from "./requests.js";
import {StretchError} from "./error.js";
import {apiFetch, apiToken} from "./fetch.js";

export class StretchAuth extends StretchBase{

    async login(username, password){
        const res = await apiToken(this.url('/auth/token'), username, password, this._clientId);
        try {
            this._updateToken(res);
        }catch (e) {
            console.error(`Fail update storage: ${e.message}`);
        }
        return res;
    }

    async guest(type = "client", timezone = null) {
        const basic = btoa(`${this._clientId}:`);
        const payload = {
            grant_type: "create",
            timezone: timezone,
            type: type,
        }
        const res = await apiFetch(this.url('/auth/guest'), {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: 'include',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/json',
            }
        });
        try {
            this._updateToken(res);
        } catch (e) {
            console.error(`Fail update storage: ${e.message}`);
        }
        return res;
    }



    async signup(phone, type = "client", timezone = null) {
        const basic = btoa(`${this._clientId}:`);
        if (timezone == null) timezone = "Asia/Dubai";
        const payload = {
            grant_type: "create",
            timezone: timezone,
            type: type,
            phone: phone,
        }
        const res = await apiFetch(this.url('/auth/signup'), {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: 'include',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/json',
            }
        });
        try {
            this._updateToken(res);
        } catch (e) {
            console.error(`Fail update storage: ${e.message}`);
        }
        return res;
    }

    async phoneVerify(session, channel = "sms" ){
        if (await this.checkAuth()){
            const payload = {
                session: session,
                channel: channel
            }
            return await this.post('/auth/verify/phone', payload )
        }
    }

    async phoneCheck(sid, code){
        if (await this.checkAuth()){
            const payload = {
                sid: sid,
                code: code,
            }
            return await this.put('/auth/verify/phone', payload )
        }
    }

    async signupComplete(password, firstName, lastName, gender = null, email= null, username = null){
        if (await this.checkAuth()){
            const payload = {
                password: password,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                email: email,
                username: username,
            }
            const res =  await this.put('/auth/complete', payload )
            try {
                this._updateToken(res);
            } catch (e) {
                console.error(`Fail update storage: ${e.message}`);
            }
            return res;
        }
    }


    async passwordReset(phone) {
        const basic = btoa(`${this._clientId}:`);
        const payload = {
            grant_type: "reset",
            phone: phone,
        }
        const res = await apiFetch(this.url('/auth/password-reset'), {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: 'include',
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Credentials': true,
            }
        });
        try {
            this._updateToken(res);
        } catch (e) {
            console.error(`Fail update storage: ${e.message}`);
        }
        return res;
    }

    async passwordChange(password) {
        if (await this.checkAuth()){
            const payload = {
                password: password,
            }
            const res = await this.put('/auth/password-reset', payload )
            try {
                this._updateToken(res);
            } catch (e) {
                console.error(`Fail update storage: ${e.message}`);
            }
            return res;
        }
    }




}