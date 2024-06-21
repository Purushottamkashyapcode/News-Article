import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = useSelector((state) => state.news.articles[id]);

  if (!article) {
    return <div className="p-4 max-w-3xl mx-auto">Article not found</div>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{article.title}</h1>
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded-lg shadow-md mb-4" />
      )}
      <p className="text-lg text-gray-800 mb-4">{article.content}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
      >
        Read the full article
      </a>
      <div className="mt-4">
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ArticleDetail;
