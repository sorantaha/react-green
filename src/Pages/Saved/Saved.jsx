import Post from "src/Forms/Post/Post";
import postData from "src/Forms/Post/data";
import React, { useState, useEffect } from 'react';

export default function Saved() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const data = await response.json();
  //     setPosts(data);
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
    <div className="w-5/6 mx-auto mt-[6rem] bg-transparent">
      <div className="grid grid-cols-5 gap-4 mb-12">
        {postData.map((post) => (
          <Post
            key={post.id}
            className=""
            photo={post.userId}
            title={post.title}
            price={post.completed}
          ></Post>
        ))}
      </div>
    </div>
  )
}