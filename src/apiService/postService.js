import * as request from "../api/axiosClient";
export const getAPI = async (tab) => {
  try {
    const res = await request.get(`${tab}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getDataById = async (id) => {
  try {
    const res = await request.get(`${id}`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
