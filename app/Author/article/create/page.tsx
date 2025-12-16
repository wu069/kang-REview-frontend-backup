"use client";

import ArticleForm, {
  ArticleData,
} from "../../../component/ArticleForm";

export default function CreateArticlePage() {
  const handleSubmit = (data: ArticleData) => {
    console.log("INSERT:", data);
  };

  return (
    <ArticleForm
      buttonLabel="Insert"
      onSubmit={handleSubmit}
    />
  );
}

