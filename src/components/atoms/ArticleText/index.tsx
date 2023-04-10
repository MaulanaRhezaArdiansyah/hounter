import React from "react";
import { AiFillClockCircle } from "react-icons/ai";

interface Props {
  publisherAvatar: string;
  publisherName: string;
  articleTitle: string;
  timeStamp: string;
  titleWidth?: string;
  articleContent?: string;
}
export const ArticleText: React.FC<Props> = ({
  publisherAvatar,
  publisherName,
  articleTitle,
  timeStamp,
  titleWidth,
  articleContent,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 justify-center items-start ${titleWidth}`}
    >
      <div className="flex items-center gap-3">
        <img
          src={publisherAvatar}
          alt={publisherName}
          className="rounded-full w-8 h-8"
        />
        <p className="text-primary-700 text-base">{publisherName}</p>
      </div>
      <p className="capitalize font-medium text-lg text-primary-800">
        {articleTitle}
      </p>
      <p className="text-primary-600">{articleContent}</p>
      <div className="flex items-center gap-3 text-primary-400">
        <AiFillClockCircle size={20} />
        <p>{timeStamp}</p>
      </div>
    </div>
  );
};
