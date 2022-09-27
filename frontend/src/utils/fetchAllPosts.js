import axios from "axios";
import axiosError from "./axiosError";

const fetchAllPosts = async (postURL, auth, setData, setPosts) => {
  try {
    const response = await axios.get(`${postURL}`, {
      headers: {
        authorization: auth.accessToken,
      },
    });
    const reverseData = response.data.reverse();
    setData(reverseData);
    setPosts(reverseData);
  } catch (err) {
    axiosError(err);
  }
};

export default fetchAllPosts;
