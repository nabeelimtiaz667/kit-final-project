import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data.posts);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <div className="m-8">
        <div className="flex flex-col">
          <div className="font-bold text-xl">Welcome Username,</div>
          <div className="font-light text-sm">Sunday 14 July, 2024</div>
          <div className="my-6 font-bold text-2xl">Recent Blogs</div>
          <div className="my-4 flex flex-col gap-9">
            {posts.map((post, i) => {
              return (
                <div
                  className="flex flex-row bg-white p-5 shadow-md cursor-pointer"
                  key={i}
                  onClick={() => {
                    navigate(`/blog/${post.id}`);
                  }}
                >
                  <div></div>
                  <div className="flex flex-col gap-3">
                    <div className="font-bold text-normal">{post.title}</div>
                    <div className="font-normal text-sm">
                      {post.body.slice(0, 180)}...
                    </div>
                    <div className="my-4 flex flex-row justify-between">
                      <div className="blog-icons flex flex-row gap-6">
                        <div className="views">
                          <FaRegEye />
                          {post.views}
                        </div>
                        <div className="like">
                          <AiOutlineLike />
                          {post.reactions.likes}
                        </div>
                        <div className="like">
                          <AiOutlineDislike />
                          {post.reactions.dislikes}
                        </div>
                      </div>
                      <div className="flex flex-row gap-5">
                        {post.tags.map((tag, i) => {
                          return (
                            <div className="tag px-2 py-1 rounded-sm text-white text-xs">
                              {" "}
                              {tag}{" "}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
