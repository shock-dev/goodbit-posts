import axios from '../core/axios';

class CommentsApi {
  getById = async (id: string) => {
    const { data } = await axios.get(`/comments?postId=${id}`);
    return data;
  }

  create = async (payload: { body: string }) => {
    const { data } = await axios.post('/comments', payload);
    return data;
  }
}

export default new CommentsApi();
