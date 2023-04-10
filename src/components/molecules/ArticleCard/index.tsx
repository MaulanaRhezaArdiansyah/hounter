import React from "react";
import { ArticleImage } from "../../atoms/ArticleImage";
import { ArticleText } from "../../atoms/ArticleText";

interface Props {
  source: string;
  publisherAvatar: string;
  publisherName: string;
  articleTitle: string;
  timeStamp: string;
  classname?: string;
  imageSize?: string;
  titleWidth?: string;
  articleContent?: string;
}
export const ArticleCard: React.FC<Props> = ({
  source,
  publisherAvatar,
  publisherName,
  articleTitle,
  timeStamp,
  classname,
  imageSize,
  titleWidth,
  articleContent,
}) => {
  return (
    <div className={`flex gap-6 ${classname}`}>
      <ArticleImage source={source} imageSize={imageSize} />
      <ArticleText
        publisherAvatar={publisherAvatar}
        publisherName={publisherName}
        articleTitle={articleTitle}
        timeStamp={timeStamp}
        titleWidth={titleWidth}
        articleContent={articleContent}
      />
    </div>
  );
};
