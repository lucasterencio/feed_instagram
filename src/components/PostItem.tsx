"use client";

import React, { useState } from "react";

import Image from "next/image";

interface PostProps {
  username: string;
  avatarURL: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
}

interface PostListProps {
  posts: PostProps[];
}

export const PostItem = ({ posts }: PostListProps) => {
  const [likes, setHeartLikes] = useState(posts.map(() => false));
  const [numberLikes, setNumberLikes] = useState(
    posts.map((post) => post.numberOfLikes)
  );

  const toggleLike = (index: number) => {
    setHeartLikes((prevLikes) => {
      const updateHeart = [...prevLikes];
      updateHeart[index] = !updateHeart[index];

      return updateHeart;
    });

    setNumberLikes((prevLikeArr) => {
      const updateNumberLikes = [...prevLikeArr];

      if(likes[index]){
        updateNumberLikes[index] -= 1
      } else{
        updateNumberLikes[index] += 1
      }
      return updateNumberLikes;
    });

  };

  return (
    <div className="flex flex-col gap-5 h-[550px] overflow-y-auto w-[400px] shadow-2xl">
      {posts.map((post, key) => (
        <div key={key} className="bg-white h-full min-h-full p-5">
          <header className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={post.avatarURL}
                alt="Avatar"
                width={35}
                height={35}
                className="rounded-full object-cover border-2 border-black avatar"
              />
              <span>{post.username}</span>
            </div>

            <div className="flex h-[25px] gap-2 items-center">
              <button className="duration-200 hover:bg-blue-400 hover:text-white  border-[2px] text-blue-400 border-blue-400 rounded-md text-[10px] py-1 px-4 cursor-pointer">
                FOLLOW
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </div>
          </header>

          <main className="mt-4">
            <div>
              <Image
                src={post.imageUrl}
                width={150}
                height={150}
                alt="Main image"
                onDoubleClick={() => toggleLike(key)}
                className="w-full h-[300px] transition-colors transition-700"
              />
            </div>

            <div className="flex justify-between mt-4 px-1">
              <div className="flex gap-4">
                {likes[key] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-heart-fill cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={() => toggleLike(key)}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-heart cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={() => toggleLike(key)}
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                  </svg>
                )}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-chat cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-send-arrow-down cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.854.146a.5.5 0 0 1 .11.54l-2.8 7a.5.5 0 1 1-.928-.372l1.895-4.738-7.494 7.494 1.376 2.162a.5.5 0 1 1-.844.537l-1.531-2.407L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM5.93 9.363l7.494-7.494L1.591 6.602z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"
                  />
                </svg>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-bookmark cursor-pointer"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>
              </div>
            </div>
          </main>

          <footer>
            <div className="flex px-1 mt-4 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>

              <span>{numberLikes[key]} likes</span>
            </div>

            <div className="mt-4">
              <p>{post.description}</p>
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
};

// const toggleLike = (index: number) => {
//     setLikes((prevLikes) => {
//       const updatedLikes = [...prevLikes];
//       updatedLikes[index] = !updatedLikes[index];
//       if(likes[index]){
//         posts[index].numberOfLikes += 1
//       } else{
//         posts[index].numberOfLikes -= 1
//       }

//       return updatedLikes;
//     });
//   };
