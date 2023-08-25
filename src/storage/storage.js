class Storage {
  constructor(client) {
    this._client = client;
  }

  // User avatar
  async postAvatar(formData) {
    if (await this._client.checkAuth())
      return await this._client.postformData(
        "/storage/profile/avatar",
        formData
      );
  }

  async deleteAvatar() {
    if (await this._client.checkAuth())
      return await this._client.delete("/storage/profile/avatar");
  }

  // Upload gallery
  async postImage(formData) {
    if (await this._client.checkAuth())
      return await this._client.postformData("/storage/image", formData);
  }

  async uploadImages(formData) {
    if (await this._client.checkAuth()) {
      return await this._client.postformData("/storage/images", formData);
    }
  }

  async getImages() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/storage/images");
    }
  }

  async putImage(imageId, formData) {
    if (await this._client.checkAuth()) {
      return await this._client.putformData(
        `/storage/image/${imageId}`,
        formData
      );
    }
  }

  async deleteImage(imageId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/image/${imageId}`);
    }
  }

  // Upload certificates
  async postCertificate(formData) {
    if (await this._client.checkAuth())
      return await this._client.postformData("/storage/certificate", formData);
  }

  async getCertificates() {
    if (await this._client.checkAuth())
      return await this._client.get("/storage/certificates");
  }

  async putCertificate(certificateId, formData) {
    if (await this._client.checkAuth())
      return await this._client.putformData(
        `/storage/certificates/${certificateId}`,
        formData
      );
  }

  async deleteCertificate(certificateId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(
        `/storage/certificates/${certificateId}`
      );
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
