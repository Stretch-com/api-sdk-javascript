export class StretchError extends Error {
  response: Response | null = null;
  status: number | null = null;
  error: string | null = null;
  fields: string[] | null = null;
  caught: string | null = null;

  constructor(
    status = 200,
    error = "error",
    message = "Something went wrong",
    response: Response | null = null,
    fields = []
  ) {
    super();
    this.message = message;
    this.response = response;
    this.status = status;
    this.error = error;
    this.fields = fields;
  }

  isUnauthorized() {
    return this.status === 401;
  }
}
