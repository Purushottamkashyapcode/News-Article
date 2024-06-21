import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/newsSlice';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';

const categories = ['business', 'technology', 'entertainment'];

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);
  const [category, setCategory] = useState(categories[0]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchNews({ category, query, page }));
  }, [category, page, query, dispatch]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setQuery(''); // Clear the query when category changes
    setPage(1);
  };

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {/* Pagination Controls */}
        <div className="flex items-center justify-start lg:col-span-1">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-l hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 disabled:opacity-50 transition-colors duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-800 text-white rounded-r hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 transition-colors duration-300"
          >
            Next
          </button>
        </div>
        {/* Category Selection */}
        <div className="flex   items-center justify-center lg:col-span-1">
          <select
            value={category}
            onChange={handleCategoryChange}
            className="p-2 text-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        {/* Search Bar */}
        <div className="flex items-center justify-end lg:col-span-1">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      {status === 'loading' && <div className="text-center mt-4">Loading...</div>}
      {status === 'failed' && <div className="text-center mt-4 text-red-600">Error loading articles</div>}
      {status === 'succeeded' && <ArticleList articles={articles} />}
    </div>
  );
};

export default Home;
