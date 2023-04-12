import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

interface Props {
  publisherAvatar: string;
  publisherName: string;
  articleTitle: string;
  timeStamp: string;
}
export const ArticleCardOriginal: React.FC<Props> = ({
  publisherAvatar,
  publisherName,
  articleTitle,
  timeStamp,
}) => {
  return (
    <div className="bg-white shadow-xl w-[350px] h-[350px] rounded-3xl p-5 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={publisherAvatar}
          alt={publisherName}
          className="rounded-full w-8 h-8"
        />
        <p className="text-primary-700 text-base">{publisherName}</p>
      </div>
      <h2 className="text-primary-800 text-base font-semibold mb-2">
        {articleTitle}
      </h2>
      <div className="flex items-center gap-3 text-primary-400 mb-6">
        <AiFillClockCircle size={20} />
        <p>{timeStamp}</p>
      </div>
      <img
        src="https://househunter.vercel.app/article-4.png"
        className="rounded-3xl mb-4"
        alt="article-pic"
      />
    </div>
  );
};
