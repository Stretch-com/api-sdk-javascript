import { paths } from "../../types/storage";
import { StretchAuth } from "../common/auth";
import { payloadToFormData } from "../common/utils";

class Storage extends StretchAuth {
  // Attachments
  async getAttachments(): Promise<
    | paths["/api/v1/storage/attachments"]["get"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) return await this.get(`/storage/attachments`);
  }

  async postAttachment(
    payload: paths["/api/v1/storage/attachment"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/storage/attachment"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (!formData) return;
      return await this.post("/storage/attachment", formData, undefined);
    }
  }

  async deleteAttachment(
    attachmentId: string
  ): Promise<
    | paths["/api/v1/storage/attachment/{attachment_id}"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete(`/storage/attachment/${attachmentId}`);
  }

  // User avatar
  async postAvatar(
    payload: paths["/api/v1/storage/profile/avatar"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/storage/profile/avatar"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (!formData) return;
      return await this.post("/storage/profile/avatar", formData, undefined);
    }
  }

  async deleteAvatar(): Promise<
    | paths["/api/v1/storage/profile/avatar"]["delete"]["responses"]["200"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth())
      return await this.delete("/storage/profile/avatar");
  }

  async postMedia(
    payload: paths["/api/v1/storage/profile/media"]["post"]["requestBody"]["content"]["multipart/form-data"]
  ): Promise<
    | paths["/api/v1/storage/profile/media"]["post"]["responses"]["201"]["content"]["application/json"]
    | undefined
  > {
    if (await this.checkAuth()) {
      const formData = payloadToFormData(payload);
      if (!formData) return;
      return await this.post("/storage/profile/media", formData, undefined);
    }
  }
}

export default Storage;
