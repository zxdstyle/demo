import { post, get, destroy, put } from "../utils/http";

class ResourceApi {
    resource = "";

    Index(param = {}) {
        return get(`api/v1/${this.resource}`, param);
    }

    Show(param = {}) {
        return get(`api/v1/${this.resource}`, param);
    }

    Create(param) {
        return post(`api/v1/${this.resource}`, param);
    }

    Update(id, param) {
        return put(`api/v1/${this.resource}/${id}`, param);
    }

    Destroy(id) {
        return destroy(`api/v1/${this.resource}/${id}`);
    }
}

export default ResourceApi;
