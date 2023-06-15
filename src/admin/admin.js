export class Admin{

    constructor(client) { //
        this._client = client;
    }

    async getCoaches(query={}){
        if (await this._client.checkAuth()){
            return await this._client.get(`/admin/coaches`, query)
        }
    }



}

export default Admin;