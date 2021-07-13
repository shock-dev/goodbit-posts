import axios from '../core/axios';

class PostsApi {
  all = async () => {
    const { data } = await axios.get('/posts');
    return data;
  }

  one = async (id: string) => {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
  }

  create = async (payload: { title: string, body: string }) => {
    const { data } = await axios.post('/posts', payload);
    return data;
  }

  update = async (id: string, payload: { title: string, body: string }) => {
    const { data } = await axios.put(`/posts/${id}`, payload);
    return data;
  }

  delete = async (id: string) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
  }
}

export default new PostsApi();
