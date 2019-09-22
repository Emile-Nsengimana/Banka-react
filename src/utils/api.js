import axios from 'axios';


const baseUrl = 'https://ch-iii.herokuapp.com';
const token = sessionStorage.getItem('token');
const useGetOrDelete = async (meth, url) => {
  const request = await axios({
    method: meth,
    url: baseUrl + url,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      token: token || '',
    },
  });
  try {
    return request.data;
  } catch (error) {
    return error;
  }
};

const usePostOrPut = async (meth, url, data) => {
  const request = await axios({
    method: meth,
    url: baseUrl + url,
    data,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      token: token || '',
    },
  });
  try {
    return request;
  } catch (error) {
    return error;
  }
};

export default { useGetOrDelete, usePostOrPut };
