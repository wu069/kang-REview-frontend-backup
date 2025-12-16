"use client";
import Link from "next/link";

export default function MyArticlePage() {
    const articles = [
        { id: "1", title: "Artikel Pertama" },
        { id: "2", title: "Artikel Kedua" },
    ];

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">
                My Article
            </h1>

            <Link href="/Author/article/create">
                <button type="button" className="mb-6 px-4 py-2 bg-black text-white rounded">
                    + Insert Article
                </button>
            </Link>

            <ul className="space-y-3">
                {articles.map((a) => (
                    <li
                        key={a.id}
                        className="flex justify-between items-center border p-3 rounded"
                    >
                        <span>{a.title}</span>

                        <Link href={`/Author/article/edit/${a.id}`}>
                            <button type="button" className="px-3 py-1 bg-gray-200 rounded">
                                Edit
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
