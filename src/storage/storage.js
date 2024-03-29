class Storage {
  constructor(client) {
    this._client = client;
  }

  // Attachments
  async postAttachment(formData) {
    if (await this._client.checkAuth())
      return await this._client.post("/storage/attachment", formData, null);
  }

  async deleteAttachment(attachmentId) {
    if (await this._client.checkAuth())
      return await this._client.delete(`/storage/attachment/${attachmentId}`);
  }

  // User avatar
  async postAvatar(formData) {
    if (await this._client.checkAuth())
      return await this._client.postForm("/storage/profile/avatar", formData);
  }

  async deleteAvatar() {
    if (await this._client.checkAuth())
      return await this._client.delete("/storage/profile/avatar");
  }

  async postMedia(formData) {
    if (await this._client.checkAuth())
      return await this._client.postForm("/storage/profile/media", formData);
  }

  // Upload images
  async postImage(formData) {
    if (await this._client.checkAuth())
      return await this._client.postForm("/storage/image", formData);
  }

  async getImages() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/storage/images");
    }
  }

  async putImage(imageId, formData) {
    if (await this._client.checkAuth()) {
      return await this._client.putForm(`/storage/image/${imageId}`, formData);
    }
  }

  async deleteImage(imageId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/image/${imageId}`);
    }
  }

  // Upload videos
  async postVideo(formData) {
    if (await this._client.checkAuth())
      return await this._client.postForm("/storage/video", formData);
  }

  async deleteVideo(videoId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/video/${videoId}`);
    }
  }

  // Upload certificates
  async postCertificate(formData) {
    if (await this._client.checkAuth())
      return await this._client.postForm("/storage/certificate", formData);
  }

  async getCertificates() {
    if (await this._client.checkAuth())
      return await this._client.get("/storage/certificates");
  }

  async putCertificate(certificateId, formData) {
    if (await this._client.checkAuth())
      return await this._client.putForm(
        `/storage/certificate/${certificateId}`,
        formData
      );
  }

  async deleteCertificate(certificateId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/certificate/${certificateId}`);
    }
  }

  // Award
  async getAwards() {
    if (await this._client.checkAuth()) {
      return await this._client.get(`/storage/awards`);
    }
  }

  async postAward(formData) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm(`/storage/award`, formData);
    }
  }

  async putAward(awardId, formData) {
    if (await this._client.checkAuth()) {
      return await this._client.putForm(`/storage/award/${awardId}`, formData);
    }
  }

  async deleteAward(awardId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/award/${awardId}`);
    }
  }

  async deleteAwardFile(fileId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/award/file/${fileId}`);
    }
  }

  // Report attachments
  async getReportAttachments() {
    if (await this._client.checkAuth())
      return await this._client.get(`/storage/reports/`);
  }

  async postReportAttachment(reportId, formData) {
    if (await this._client.checkAuth())
      return await this._client.postForm(
        `/storage/report/${reportId}`,
        formData
      );
  }
}

export default Storage;
