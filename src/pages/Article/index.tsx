import React from "react";
import { ArticleCardOriginal } from "../../components/atoms/ArticleCardOriginal";
import { articles } from "../../data";

export const Article: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex h-full">
        <section className="w-[25%] h-full fixed flex flex-col pt-32 pl-16 bg-green-1200 gap-4">
          <p className="cursor-pointer text-white hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150">
            New Article
          </p>
          <p className="cursor-pointer text-white hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150">
            Popular Article
          </p>
          <p className="cursor-pointer text-white hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150">
            Most Read
          </p>
          <p className="cursor-pointer text-white hover:text-green-1300 hover:bg-green-1000 h-10 w-64 flex items-center pl-2 rounded-xl duration-150">
            Tips & Tricks
          </p>
        </section>
        <section className="w-[80%] flex gap-10 flex-wrap justify-center bg-green-1000 ml-80 px-20 pt-32 pb-20">
          {articles.map(({ id, avatar, name, article_title, time_stamp }) => (
            <ArticleCardOriginal
              key={id}
              publisherAvatar={avatar}
              publisherName={name}
              articleTitle={article_title}
              timeStamp={time_stamp}
            />
          ))}
        </section>
      </div>
      {/* <Footer /> */}
    </div>
  );
};
