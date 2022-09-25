import axios from "axios";
import axiosError from "./axiosError";

const fetchAllPosts = async (postURL, auth, setData, setPosts) => {
  try {
    const response = await axios.get(`${postURL}`, {
      headers: {
        authorization: auth.accessToken,
      },
    });
    setData(response.data);
    setPosts(response.data);
  } catch (err) {
    axiosError(err);
  }
};

export default fetchAllPosts;
