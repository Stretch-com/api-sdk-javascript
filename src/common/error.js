export class StretchError extends Error {

    constructor(status = 200, message = 'Something went wrong', response = null ) {
        super();
        this.message = message;
        this.response = response;
        this.status = status;
    }

    isUnauthorized(){
        return this.status === 401;
    }

}