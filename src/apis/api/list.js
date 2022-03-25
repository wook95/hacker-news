import API from '@/apis/api';
import { BASE_URL_SUFFIX } from '@/apis/utils/constants';

const getList = async category => {
  try {
    const { data } = await API.get(`/${category}${BASE_URL_SUFFIX}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getList;
