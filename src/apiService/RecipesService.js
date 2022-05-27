import * as requestSpoonacular from "../api/axiosClient";
import * as ConstantsList from "../const/ConstFile";
const randomTwoNumber = () => {
  const max = 10;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getAPISpoonacular = async (tab) => {
  try {
    const res = await requestSpoonacular.getSpoonacular(
      `${tab}/random/?apiKey=${
        ConstantsList.REACT_APP_API_KEY
      }&number=${randomTwoNumber()}`
    );
    return res;
  } catch (error) {
      const res = error.response.data;
      return res;
  }
};
