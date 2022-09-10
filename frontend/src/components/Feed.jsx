import { useState, useEffect, useContext } from "react";
import axios from "axios";
import DataContext from "../context/DataContext";
import Post from "./Post"

const Feed = () => {
    const [data, setData] = useState([]);
    const { posts, postURL } = useContext(DataContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${postURL}`);
                setData(response.data);
            } catch (err) {
                if (err.response) {
                    setData([]);
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            } 
        };

        fetchData()

    }, [posts, postURL])
  
  return (
    <section className="feed">

        {data.map(post => (
                  <Post key={post._id} post={post} />
        ))
        }
    </section>
  );
};

export default Feed;
