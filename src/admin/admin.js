export class Admin{

    constructor(client) { //
        this._client = client;
    }

    async getCoaches(query={}){
        if (await this._client.checkAuth()){
            return await this._client.get(`/admin/coaches`, query)
        }
    }

    async getCoachesCount(query={}){
        if (await this._client.checkAuth()){
            return await this._client.get(`/admin/coaches/count`, query)
        }
    }

    async postCoach(payload={}){
        if (await this._client.checkAuth()){
            return await this._client.post(`/admin/coach`, payload)
        }
    }



    async postSupportFeedback(form){
        if (await this._client.checkAuth()){
            return await this._client.postForm(`/admin/support/feedback`, form)
        }
    }
}

export default Admin;