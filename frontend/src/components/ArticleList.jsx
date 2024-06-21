import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {articles.map((article, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          {article.urlToImage ? (
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
          ) : (
            <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
          )}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-500 transition-colors duration-300">
              <Link to={`/article/${index}`}>{article.title}</Link>
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              {article.description && article.description.length > 150
                ? `${article.description.slice(0, 150)}...`
                : article.description}
            </p>
            <div className="flex justify-end">
              <Link
                to={`/article/${index}`}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
