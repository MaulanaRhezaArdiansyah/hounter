import React, { useState } from "react";
import { ArticleCardOriginal } from "../../components/atoms/ArticleCardOriginal";
import { articles } from "../../data";

export const Article: React.FC = () => {
  const [active, setActive] = useState("New");

  const filteredArtciles = articles.filter(
    (article) => article.type === active
  );

  return (
    <div
      className={`w-full bg-green-1000 ${
        filteredArtciles.length <= 2 ? "h-screen" : "h-auto"
      }`}
    >
      <div className="flex h-full ">
        <section className="w-[25%] h-full fixed flex flex-col pt-32 pl-16 bg-green-1200 gap-4">
          <p
            onClick={() => setActive("New")}
            className={`cursor-pointer hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150 ${
              active === "New" ? "bg-green-1000 text-green-1300" : "text-white"
            }`}
          >
            New Article
          </p>
          <p
            onClick={() => setActive("Popular")}
            className={`cursor-pointer  hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150 ${
              active === "Popular"
                ? "bg-green-1000 text-green-1300"
                : "text-white"
            }`}
          >
            Popular Article
          </p>
          <p
            onClick={() => setActive("Most Read")}
            className={`cursor-pointer  hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150 ${
              active === "Most Read"
                ? "bg-green-1000 text-green-1300"
                : "text-white"
            }`}
          >
            Most Read
          </p>
          <p
            onClick={() => setActive("Tips & Tricks")}
            className={`cursor-pointer  hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150 ${
              active === "Tips & Tricks"
                ? "bg-green-1000 text-green-1300"
                : "text-white"
            }`}
          >
            Tips & Tricks
          </p>
        </section>
        <section className="w-[80%] flex gap-10 flex-wrap justify-center  ml-80 px-20 pt-32 pb-20">
          {filteredArtciles.map(
            ({ id, avatar, name, article_title, time_stamp }) => (
              <ArticleCardOriginal
                key={id}
                publisherAvatar={avatar}
                publisherName={name}
                articleTitle={article_title}
                timeStamp={time_stamp}
              />
            )
          )}
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
