import * as requestAnime from "../api/axiosClient";
const randomTwoNumber = () => {
  const max = 10;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getApiAnimeTop = async (tab) => {
  try {
    const res = await requestAnime.getApiAnimeTop(
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
