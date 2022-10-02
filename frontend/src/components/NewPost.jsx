import { FiSend } from "react-icons/fi";
import { useState, useContext } from "react";
import { format } from "date-fns";
import axios from "axios";
import DataContext from "../context/DataContext";

const NewPost = () => {
  const [postMessage, setPostMessage] = useState("");
  const { posts, setPosts, auth, postURL } = useContext(DataContext);

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post("http://localhost:3000/upload", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  const newPostSubmit = async () => {
    let newPost;
    const userId = JSON.parse(sessionStorage.getItem("groupomaniaId")).userId;
    const date = format(new Date(), "dd/MM yyyy, h:m:ss");
    const userName = JSON.parse(
      sessionStorage.getItem("groupomaniaId")
    ).userName;

    if (file) {
      newPost = new FormData();
      newPost.append("file", file);
      console.log(file);
      newPost.append("fileName", fileName);
      console.log("fileName :" + fileName);
      newPost.append("userId", userId);
      console.log("userId :" + userId);
      newPost.append("userName", userName);
      console.log("userName :" + userName);
      newPost.append("date", date);
      console.log("date :" + date);
      newPost.append("message", postMessage);
      console.log("message :" + postMessage);
    } else {
      newPost = { userId, userName, date, message: postMessage };
    }

    try {
      const response = await axios.post(`${postURL}`, newPost, {
        headers: {
          authorization: auth.accessToken,
        },
      });
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostMessage("");
      console.log(response);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <section className="feed-new-post">
      <form
        className="feed-form"
        encType="mutipart/form-data"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="message">Ecrire un post : </label>
        <div>
          <div>
            <label htmlFor="add-image">Ajouter une image</label>
            <input
              type="file"
              name="add-image"
              id="add-image"
              onChange={(e) => saveFile(e)}
            />
          </div>
          <textarea
            id="message"
            required
            value={postMessage}
            onChange={(e) => setPostMessage(e.target.value)}
          />
          <button type="submit" onClick={newPostSubmit}>
            <FiSend /> Envoyer
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewPost;
