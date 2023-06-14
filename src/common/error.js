export class StretchError extends Error {

    constructor(status = 200, error = "error", message = 'Something went wrong', response = null ) {
        super();
        this.message = message;
        this.response = response;
        this.status = status;
        this.error = error;
    }

    isUnauthorized(){
        return this.status === 401;
    }

}