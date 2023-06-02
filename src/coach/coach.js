export class Coach{

    constructor(client) { //
        this._client = client;
    }

    async getCoachProfile(coachId){
        if (await this._client.checkAuth()){
            return await this._client.get(`/coach/${coachId}/profile`)
        }
    }





}

export default Coach;