import React, { useState } from "react";
import Comment from "./Comment";
import "./index.css";

function Post() {
  const [post, setPost] = useState([
    {
      title: "Riyadh",
      comments: "",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEW-VZ5y9HobwZhfKr2X_R93-HEbFQe37fQ&usqp=CAU",
    },
    {
      title: "Alkhobar",
      comments: "",
      imgsrc:
        "https://www.zyadda.com/wp-content/uploads/2021/07/%D8%A3%D9%81%D8%B6%D9%84-%D8%A3%D9%85%D8%A7%D9%83%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D8%AE%D8%A8%D8%B1.jpg",
    },
    {
      title: "Jeddah",
      comments: "",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-4L0OR5OnDYtZKz44hJbjqK0Dx8U0kncaGg&usqp=CAU",
    },
    {
      title: "Abha",
      comments: "",
      imgsrc:
        "http://yallabook.com/blog/uploade/files/210301_340e3ff381.jpg",
    },
    {
      title: "Tabouk",
      comments: "",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnMbfmQ7Tfe8BhYS3R6Gu2s7Z8iyQvvEEV_L8eCNauH6t6bwRLjr8EsUxlFL0kT8xrqI&usqp=CAU",
    },
    {
      title: "Yanbu",
      comments: "",
      imgsrc:
        "data:image/jpeg;base64,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",
    },
    
  ]);

  return (
    <div>
      <div>
        <h1 className="h1">Tourism in the Kingdom of Saudi Arabia</h1>
        <br /> <br />
      </div>

      <div className="posts">
        {post.map((p) => (
          <div className="pooost">
            <img className="img1" src={p.imgsrc} alt="" width="320" height="400" />

            <h3>{p.title}</h3>
{/* _________________________________________ */}
            <Comment />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;