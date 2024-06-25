import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class User extends StretchAuth {
  async getFavorites(): Promise<
    | paths["/api/v1/user/favorites"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/user/favorites`);
  }

  async postFavorite(
    payload: paths["/api/v1/user/favorite"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/user/favorite"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/user/favorite`, payload);
  }

  async deleteFavorites(
    userId: string
  ): Promise<
    | paths["/api/v1/user/favorite/{user_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/user/favorite/${userId}`);
  }

  async getBlacklist(): Promise<
    | paths["/api/v1/user/blacklist"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/user/blacklist`);
  }

  async postBlacklist(
    payload: paths["/api/v1/user/blacklist"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/user/blacklist"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/user/blacklist`, payload);
  }

  async deleteBlacklist(
    userId: string
  ): Promise<
    | paths["/api/v1/user/blacklist/{user_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/user/blacklist/${userId}`);
  }

  async getReviews(
    userId: string,
    query: paths["/api/v1/user/{user_id}/reviews"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/user/{user_id}/reviews"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/user/${userId}/reviews`, query);
  }

  async getReviewsInfo(
    userId: string
  ): Promise<
    | paths["/api/v1/user/{user_id}/reviews/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/user/${userId}/reviews/info`);
  }

  async getUserConfig(): Promise<
    | paths["/api/v1/user/config"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/user/config`);
  }

  async getNotes(
    userId: string,
    query: paths["/api/v1/user/{id}/notes"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/user/{id}/notes"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/user/${userId}/notes`, query);
  }

  async getNote(
    userId: string,
    noteId: string
  ): Promise<
    | paths["/api/v1/user/{id}/note/{notes_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/user/${userId}/note/${noteId}`);
  }

  async postNote(
    userId: string,
    payload: paths["/api/v1/user/{id}/note"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/user/{id}/note"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/user/${userId}/note`, payload);
  }

  async putNote(
    userId: string,
    noteId: string,
    payload: paths["/api/v1/user/{id}/note/{notes_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/user/{id}/note/{notes_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/user/${userId}/note/${noteId}`, payload);
  }

  async deleteNote(
    userId: string,
    noteId: string
  ): Promise<
    | paths["/api/v1/user/{id}/note/{notes_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/user/${userId}/note/${noteId}`);
  }
}

export default User;
