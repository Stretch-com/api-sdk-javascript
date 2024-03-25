import { StretchError } from "./error.js";

// authorise a user using the Authorization headers on any URI and return the JSON value of
// its response
export async function apiFetch(uri, options, verifySSL = false) {
  //console.log(verifySSL)
  //console.log(uri)
  //console.log(options)

  try {
    if (!verifySSL) {
      // TODO: REMOVE in production
      //process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      //const agent = new https.Agent({
      //    rejectUnauthorized: verifySSL,
      //});
      //options['mode'] = 'no-cors'
      //options['Access-Control-Allow-Origin'] = '*'
    }
    const startTime = performance.now();
    //console.log(uri)
    const res = await fetch(uri, options);
    console.log("Perfomance", performance.now() - startTime, "ms");
    //console.log(`status: ${await res.json()}`)
    // console.log(res.headers.get("Content-Type"),)

    if (res.status >= 200 && res.status < 300) {
      try {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return await res.json();
        } else {
          console.warn("We get TEXT answer");
          return await res.text();
        }
      } catch (err) {
        //const text = await res.text()
        //console.log(text)
        console.error(`Invalid JSON: ${err.message}`);
        const error = new StretchError(
          res.status,
          "json-error",
          `Invalid JSON: ${err.message}`,
          res
        );
        error.caught = err;
        throw error;
      }
    } else {
      const err = await res.json();
      console.error(`Error: ${res.status} ${JSON.stringify(err)}`);
      throw new StretchError(res.status, err.error, err.message, res);
    }
  } catch (err) {
    if (err instanceof StretchError) throw err;
    let error = new StretchError(
      0,
      "request-error",
      `Request error: ${err.message}`
    );
    console.log(err);
    if (err instanceof Response) {
      error.status = err.status;
    }
    console.error(`Request error: ${err.message}`);
    error.caught = err;
    throw error;
  }
}

export async function apiToken(
  uri,
  username,
  password,
  scope = "coach",
  clientId = "2f9445b3-5266-45cd-8a85-d5c3fff69781",
  clientSecret = ""
) {
  let data = new FormData();
  const basic = btoa(`${clientId}:${clientSecret}`);
  data.append("grant_type", "password");
  data.append("username", username);
  data.append("password", password);

  if (scope) data.append("scope", scope);
  return await apiFetch(uri, {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Basic ${basic}`,
      //mode : 'no-cors',
      //'Access-Control-Allow-Origin': '*'
    },
  });
}
