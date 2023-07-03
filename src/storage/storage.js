class Storage {
  constructor(client) {
    this._client = client;
  }

  // User avatar
  async postAvatar(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm("/storage/profile/avatar", form);
    }
  }

  async deleteAvatar() {
    if (await this._client.checkAuth()) {
      return await this._client.delete("/storage/profile/avatar");
    }
  }

  // Upload gallery
  async postImage(form) {
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

  async getImages() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/storage/images");
    }
  }

  async putImage(imageId, form) {
    if (await this._client.checkAuth()) {
      return await this._client.putForm(`/storage/image/${imageId}`, form);
    }
  }

  async deleteImage(imageId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/image/${imageId}`);
    }
  }

  // Upload certificates
  async postCertificate(form) {
    if (await this._client.checkAuth()) {
      return await this._client.postForm("/storage/certificate", form);
    }
  }

  async getCertificates() {
    if (await this._client.checkAuth()) {
      return await this._client.get("/storage/certificates");
    }
  }

  async putCertificate(certificateId, form) {
    if (await this._client.checkAuth()) {
      return await this._client.putForm(
        `/storage/certificates/${certificateId}`,
        form
      );
    }
  }

  async deleteCertificate(certificateId) {
    if (await this._client.checkAuth()) {
      return await this._client.delete(`/storage/certificates/${certificateId}`);
    }
  }
}

export default Storage;
