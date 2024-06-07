import React, { useEffect, useState } from 'react';

const Business = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState("us");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=38f9594212fb4ac4a37e9a36c1e8194e`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        setError(error);
      }
    };

    fetchNews();
  }, [country]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="mb-4 p-2 border border-gray-300"
      >
        <option value="in">India</option>
        <option value="us">USA</option>
      </select>

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Business News</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="mb-8 border-b pb-4">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-64 object-cover mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {article.title}
                </a>
              </h2>
              <p className="text-gray-700 mb-2">{article.description}</p>
              <p className="text-gray-600 text-sm mb-2">
                By {article.author || 'Unknown Author'} | {new Date(article.publishedAt).toLocaleDateString()} | {article.source.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Business;
