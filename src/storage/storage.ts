import { paths } from "../../types/storage";
import { StretchAuth } from "../common/auth";
import { payloadToFormData } from "../common/utils";

class Storage {
  auth: StretchAuth;

  constructor(stretchAuth: StretchAuth) {
    this.auth = stretchAuth;
  }

  // Attachments
  async getAttachments(): Promise<
    | paths["/api/v1/storage/attachments"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.get(`/storage/attachments`);
  }

  async postAttachment(
    payload: paths["/api/v1/storage/attachment"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/storage/attachment"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (!formData) return;
      return await this.auth.post("/storage/attachment", formData, undefined);
    }
  }

  async deleteAttachment(
    attachmentId: string
  ): Promise<
    | paths["/api/v1/storage/attachment/{attachment_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete(`/storage/attachment/${attachmentId}`);
  }

  // User avatar
  async postAvatar(
    payload: paths["/api/v1/storage/profile/avatar"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/storage/profile/avatar"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (!formData) return;
      return await this.auth.post(
        "/storage/profile/avatar",
        formData,
        undefined
      );
    }
  }

  async deleteAvatar(): Promise<
    | paths["/api/v1/storage/profile/avatar"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth())
      return await this.auth.delete("/storage/profile/avatar");
  }

  async postMedia(
    payload: paths["/api/v1/storage/profile/media"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/storage/profile/media"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.auth.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (!formData) return;
      return await this.auth.post(
        "/storage/profile/media",
        formData,
        undefined
      );
    }
  }
}

export default Storage;
