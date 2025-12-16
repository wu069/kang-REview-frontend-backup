"use client";

import ArticleForm, {
  ArticleData,
} from "../../../../component/ArticleForm";

interface Props {
  params: { id: string };
}

export default function EditArticlePage({ params }: Props) {
  const article: ArticleData = {
    rating: 4,
    judul: "Judul Artikel",
    p1: "Paragraf 1",
    p2: "Paragraf 2",
    penutup: "Penutup",
  };

  const handleSubmit = (data: ArticleData) => {
    console.log("EDIT:", params.id, data);
  };

  return (
    <ArticleForm
      initialData={article}
      buttonLabel="Edit"
      onSubmit={handleSubmit}
    />
  );
}
