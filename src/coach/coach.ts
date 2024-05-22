import { paths } from "../../types/coach";
import { StretchAuth } from "../common/auth";

class Coach {
  _client: StretchAuth;

  constructor(client: StretchAuth) {
    this._client = client;
  }

  // Awards
  async getAwards(): Promise<
    | paths["/api/v1/coach/awards"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/coach/awards`);
    }
  }

  async postAward(
    payload: paths["/api/v1/coach/award"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/award"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/coach/award`, payload);
    }
  }

  async putAward(
    awardId: string,
    payload: paths["/api/v1/coach/award/{award_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/award/{award_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.put(`/coach/award/${awardId}`, payload);
    }
  }

  async deleteAward(
    awardId: string
  ): Promise<
    | paths["/api/v1/coach/award/{award_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/coach/award/${awardId}`);
    }
  }

  // Certificates
  async getCertificates(): Promise<
    | paths["/api/v1/coach/certificates"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/coach/certificates`);
    }
  }

  async postCertificate(
    payload: paths["/api/v1/coach/certificate"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/certificate"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/coach/certificate`, payload);
    }
  }

  async putCertificate(
    certificateId: string,
    payload: paths["/api/v1/coach/certificate/{certificate_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/certificate/{certificate_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.put(
        `/coach/certificate/${certificateId}`,
        payload
      );
    }
  }

  async deleteCertificate(
    certiticateId: string
  ): Promise<
    | paths["/api/v1/coach/certificate/{certificate_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/coach/certificate/${certiticateId}`);
    }
  }

  // FAQs
  async getFAQs(): Promise<
    | paths["/api/v1/coach/faqs"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/faqs`);
  }

  async postFAQ(
    payload: paths["/api/v1/coach/faq"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/faq"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(`/coach/faq`, payload);
  }

  async putFAQ(
    faqId: string,
    payload: paths["/api/v1/coach/faq/{faq_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/faq/{faq_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.put(`/coach/faq/${faqId}`, payload);
  }

  async deleteFAQ(
    faqId: string
  ): Promise<
    | paths["/api/v1/coach/faq/{faq_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.delete(`/coach/faq/${faqId}`);
  }

  // Equipments
  async getEquipments(
    query: paths["/api/v1/coach/equipments"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/equipments"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/equipment`, query);
  }
  async postEquipment(
    payload: paths["/api/v1/coach/equipment"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/equipment"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(`/coach/equipment`, payload);
  }

  async putEquipment(
    equipmentId: string,
    payload: paths["/api/v1/coach/equipment/{equipment_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/equipment/{equipment_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.put(`/coach/equipment/${equipmentId}`, payload);
  }

  async deleteEquipment(
    equipmentId: string
  ): Promise<
    | paths["/api/v1/coach/equipment/{equipment_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.delete(`/coach/equipment/${equipmentId}`);
  }

  // Gallery
  async getGallery(): Promise<
    | paths["/api/v1/coach/gallery"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/gallery`);
  }

  async putGallery(
    payload: paths["/api/v1/coach/gallery"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/gallery"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.put(`/coach/gallery`, payload);
  }

  // Services
  async getServices(
    query: paths["/api/v1/coach/services"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/services"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get("/coach/services", query);
  }

  async getCoachServices(
    coachId: string
  ): Promise<
    | paths["/api/v1/coach/{coach_id}/services"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/${coachId}/services`);
  }

  async getService(
    serviceId: string
  ): Promise<
    | paths["/api/v1/coach/service/{service_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/service/${serviceId}`);
  }

  async postService(
    payload: paths["/api/v1/coach/service"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/service"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/service", payload);
  }

  async putService(
    serviceId: string,
    payload: paths["/api/v1/coach/service/{service_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/service/{service_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.put(`/coach/service/${serviceId}`, payload);
  }

  async deleteService(
    serviceId: string
  ): Promise<
    | paths["/api/v1/coach/service/{service_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.delete(`/coach/service/${serviceId}`);
  }

  async getPreview(): Promise<
    | paths["/api/v1/coach/preview"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/preview`);
  }

  async getCoachProfile(
    coachId: string
  ): Promise<
    | paths["/api/v1/coach/{coach_id}/profile"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/${coachId}/profile`);
  }

  // Coach availability CRUD
  async getAvailabilityCalendar(
    query: paths["/api/v1/coach/availability/calendar"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/availability/calendar"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availability/calendar`, query);
  }

  async getAvailabilities(
    query: paths["/api/v1/coach/availabilities"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/availabilities"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availabilities`, query);
  }

  async getAvailability(
    availabilityId: string
  ): Promise<
    | paths["/api/v1/coach/availability/{availability_id}"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availability/${availabilityId}`);
  }

  async getWeeklyAvailabilities(): Promise<
    | paths["/api/v1/coach/availabilities/weekly"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/availabilities/weekly`);
  }

  async postAvailabilities(
    payload: paths["/api/v1/coach/availabilities"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/availabilities"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/availabilities", payload);
  }

  async postAvailability(
    payload: paths["/api/v1/coach/availability"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/availability"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post("/coach/availability", payload);
  }

  async putAvailability(
    availabilityId: string,
    payload: paths["/api/v1/coach/availability/{availability_id}"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/availability/{availability_id}"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.put(
        `/coach/availability/${availabilityId}`,
        payload
      );
  }

  async deleteAvailabilities(
    payload: paths["/api/v1/coach/availabilities/delete"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/availabilities/delete"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(`/coach/availabilities/delete`, payload);
  }

  async deleteAvailability(
    availabilityId: string
  ): Promise<
    | paths["/api/v1/coach/availability/{availability_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.delete(`/coach/availability/${availabilityId}`);
  }

  async deleteAvailabilityByDate(
    date: string
  ): Promise<
    | paths["/api/v1/coach/availabilities/available/{date}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.delete(
        `/coach/availabilities/available/${date}`
      );
  }

  async deleteUnavailabilityByDate(
    date: string
  ): Promise<
    | paths["/api/v1/coach/availabilities/unavailable/{date}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.delete(
        `/coach/availabilities/unavailable/${date}`
      );
  }

  // Coach activation
  async putAvailable(
    query: paths["/api/v1/coach/available"]["put"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/available"]["put"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.put("/coach/available", query);
  }

  // Analytics
  async getAnalyticsRevenue(
    query: paths["/api/v1/coach/analytics/revenue"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/analytics/revenue"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/analytics/revenue`, query);
  }

  async getAnalyticsRevenueChart(
    query: paths["/api/v1/coach/analytics/revenue-chart"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/analytics/revenue-chart"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/analytics/revenue-chart`, query);
  }

  async getAnalyticsSessionInfo(
    query: paths["/api/v1/coach/analytics/session-info"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/analytics/session-info"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/analytics/session-info`, query);
  }

  async getAnalyticsClients(
    query: paths["/api/v1/coach/analytics/clients"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/analytics/clients"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/analytics/clients`, query);
  }

  async getAnalyticsSummary(
    query: paths["/api/v1/coach/analytics/summary"]["get"]["parameters"]["query"]
  ): Promise<
    | paths["/api/v1/coach/analytics/summary"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.get(`/coach/analytics/summary`, query);
  }

  async postBoostProfile(
    query: paths["/api/v1/coach/boost-profile"]["post"]["requestBody"]["content"]["application/json"]
  ): Promise<
    | paths["/api/v1/coach/boost-profile"]["post"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this._client.checkAuth())
      return await this._client.post(`/coach/boost-profile`, query);
  }
}

export default Coach;
