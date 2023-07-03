class Storage {
  constructor(client) {
    this._client = client;
  }

  // User avatar
  async uploadUserAvatar(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm("/storage/profile/avatar", form);
    }
  }

  async deleteAvatar() {
    if (await this._client.checkAuth()) {
      return await this._client.post("/storage/profile/avatar");
    }
  }

  // Upload gallery
  async uploadImage(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm("/storage/image", form);
    }
  }

  // TODO: Change request for content type x-www-form-urlencoded
  async uploadImages(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm("/storage/images", form);
    }
  }

  async listImages() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/storage/images");
    }
  }

  async updateImage(imageId, form) {
    if (await this._client.checkAuth()) {
      return await this._client.putForm(`/storage/image/${imageId}`, form);
    }
  }

  async deleteImage(imageId) {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/storage/image/${imageId}`);
    }
  }

  // Upload certificates
  async uploadCertificate(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm("/storage/certificate", form);
    }
  }

  async listCertificates() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/storage/certificates");
    }
  }

  async updateCertificate(certificateId, form) {
    if (await this._client.checkAuth()) {
      return await this._client.putForm(
        `/storage/certificates/${certificateId}`,
        form
      );
    }
  }

  async deleteCertificate(certificateId) {
    if (await this._client.checkAuth()) {
      return await this._client.post(`/storage/certificates/${certificateId}`);
    }
  }
}

export default Storage;
