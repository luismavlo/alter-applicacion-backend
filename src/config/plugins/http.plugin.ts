import axios from "axios";

export const httpClient = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, body: any, token: string) => {
    const headers = {
      'Authorization': `Bearer ${token}`,
    };

    const { data } = await axios.post(url, body, { headers });
    return data;
  },
  put: async (url: string, body: any) => {
    throw new Error("Not implemented");
  },
  delete: async (url: string) => {
    throw new Error("Not implemented");
  },
};
