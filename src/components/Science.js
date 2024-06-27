import React, { useEffect, useState } from 'react';

const Science = (props) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&q=${props.searchQuery}&category=science&apiKey=38f9594212fb4ac4a37e9a36c1e8194e`);
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
    }, [props]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container p-4">
            <h1 className="bg-gray-100 text-2xl font-extrabold mb-8 text-center shadow-lg p-6 rounded-lg">Science</h1>
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <li key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className='flex justify-center'>
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                        </div>
                        <div className="p-4">
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <h2 className="text-xl font-semibold mb-2 text-blue-600">{article.title}</h2>
                            </a>
                            <p className="text-gray-700 mb-4">{article.description}</p>
                            <p className="text-gray-600 text-sm mb-2">
                                By <span className="font-medium">{article.author || 'Unknown Author'}</span> | <span className="italic">{new Date(article.publishedAt).toLocaleDateString()}</span> | <span className="font-medium">{article.source.name}</span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Science;
