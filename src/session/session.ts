import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Session extends StretchAuth {
  async getSessionsInfo(): Promise<
    | paths["/api/v1/sessions/info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/sessions/info`);
  }

  async getSessionsUnrated(): Promise<
    | paths["/api/v1/sessions/unrated"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/sessions/unrated`);
  }

  async getSessionsCoaches(): Promise<
    | paths["/api/v1/sessions/coaches"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/sessions/coaches`);
  }

  async getSessions(): Promise<
    | paths["/api/v1/sessions"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/sessions`);
  }

  async getSession(
    sessionId: string
  ): Promise<
    | paths["/api/v1/session/{session_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/session/${sessionId}`);
  }

  async putSession(
    sessionId: string,
    payload: paths["/api/v1/session/{session_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/{session_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/session/${sessionId}`, payload);
  }

  async getSessionsClients(): Promise<
    | paths["/api/v1/sessions/clients"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/sessions/clients`);
  }

  async approveSession(
    sessionId: string
  ): Promise<
    | paths["/api/v1/session/{session_id}/approve"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/session/${sessionId}/approve`);
  }

  async cancelSession(
    sessionId: string,
    payload: paths["/api/v1/session/{session_id}/cancel"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/{session_id}/cancel"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/session/${sessionId}/cancel`, payload);
  }

  async reportSession(
    sessionId: string,
    payload: paths["/api/v1/session/{session_id}/report"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/{session_id}/report"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/session/${sessionId}/report`, payload);
  }

  async refundSession(
    sessionId: string,
    payload: paths["/api/v1/session/{session_id}/refund"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/{session_id}/refund"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(
        `/session/${sessionId}/refund`,
        payload ?? undefined
      );
  }

  async declineSession(
    sessionId: string,
    payload: paths["/api/v1/session/{session_id}/decline"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/{session_id}/decline"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(
        `/session/${sessionId}/decline`,
        payload ?? undefined
      );
  }

  async getSessionReviews(
    sessionId: string,
    query: paths["/api/v1/session/{session_id}/reviews"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/session/{session_id}/reviews"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/session/${sessionId}/reviews`, query);
  }

  async postSessionReview(
    sessionId: string,
    payload: paths["/api/v1/session/{session_id}/review"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/{session_id}/review"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/session/${sessionId}/reviews`, payload);
  }

  async getReview(
    reviewId: string
  ): Promise<
    | paths["/api/v1/session/review/{review_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/session/review/${reviewId}`);
  }

  async postReview(
    reviewId: string,
    payload: paths["/api/v1/session/review/{review_id}"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/session/review/{review_id}"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.post(`/session/review/${reviewId}`, payload);
  }

  async deleteReview(
    reviewId: string
  ): Promise<
    | paths["/api/v1/session/review/{review_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/session/review/${reviewId}`);
  }

  async getSessionIcs(
    sessionId: string
  ): Promise<
    | paths["/api/v1/session/{session_id}/ics"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.get(`/session/${sessionId}/ics`);
  }

  async cancelGroupSession(
    groupId: string
  ): Promise<
    | paths["/api/v1/session/group/{group_id}/cancel"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.put(`/session/group/${groupId}/cancel`);
  }
}

export default Session;
