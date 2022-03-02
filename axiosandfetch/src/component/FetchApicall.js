import React, { useState, useEffect } from "react";

function FetchApicall() {
  const [post, setPost] = useState([]);
  const fetchPost = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
      fetchPost()
  }, []);

  return <div>
   <p>{post.value}</p>
   <button onClick={fetchPost}>Read new Joke</button>
  </div>
}

export default FetchApicall;
