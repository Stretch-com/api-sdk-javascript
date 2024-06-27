import { paths } from "../../types/nav";
import { StretchAuth } from "../common/auth";

class Nav {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  // Geolocation & geocoding
  async geosearch(
    query: paths["/api/v1/nav/geosearch"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/nav/geosearch"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/nav/geosearch`, query);
  }

  async geocodeAutocomplete(
    query: paths["/api/v1/nav/geocode/autocomplete"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/nav/geocode/autocomplete"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/nav/geocode/autocomplete`, query);
  }

  async geocodePlace(
    query: paths["/api/v1/nav/geocode/place"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/nav/geocode/place"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/nav/geocode/place`, query);
  }

  async getLocation(): Promise<
    | paths["/api/v1/nav/location"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/nav/location`);
  }

  async getLocations(
    query: paths["/api/v1/nav/locations"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/nav/locations"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/nav/locations`, query);
  }

  async postLocation(
    payload: paths["/api/v1/nav/location"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/nav/location"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.post(`/nav/location`, payload);
  }

  async putLocation(
    locationId: string,
    payload: paths["/api/v1/nav/location/{location_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/nav/location/{location_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.put(`/nav/location/${locationId}`, payload);
  }

  async deleteLocation(
    locationId: string
  ): Promise<
    | paths["/api/v1/nav/location/{location_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/nav/location/${locationId}`);
  }

  async getCoverage(
    query: paths["/api/v1/nav/coverage"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/nav/coverage"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/nav/coverage`, query);
  }
}

export default Nav;
