import API from '@/apis/api';
import { BASE_URL_SUFFIX } from '@/apis/utils/constants';

const getDetail = async id => {
  try {
    const { data } = await API.get(`/item/${id}${BASE_URL_SUFFIX}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getDetail;
