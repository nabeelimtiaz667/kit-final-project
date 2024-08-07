import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import profile from "../assets/user.jpg";

export default function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`).then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, []);

  useEffect(() => {
    if (post?.reactions) {
      const { likes, dislikes } = post.reactions;
      setLikes(likes);
      setDislikes(dislikes);
    }
    console.log(post.reactions);
  }, [post]);

  if (post) {
    return (
      <div className="flex flex-row my-8">
        <div className="flex flex-col basis-96 mx-auto bg-white p-10 shadow-md cursor-pointer">
          <div className="self-center my-5">
            <img src={profile} alt="" />
          </div>
          <div className="my-4 flex flex-row">
            <div className="blog-icons mx-auto flex flex-row gap-6">
              <div className="views">
                <FaRegEye />
                {post.views}
              </div>
              <div className="like">
                <AiOutlineLike />
                {likes}
              </div>
              <div className="like">
                <AiOutlineDislike />
                {dislikes}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-center font-bold text-normal">
              {post.title}
            </div>
            <div className="font-medium text-sm mx-5">{post.body}</div>
          </div>
        </div>
      </div>
      // <div>hel</div>
    );
  }
}
