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
}

export default new PostsApi();