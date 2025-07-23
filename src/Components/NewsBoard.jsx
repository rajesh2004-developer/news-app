import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://newsdata.io/api/1/latest?country=us&category=${
          category || 'top'
        }&apikey=${import.meta.env.VITE_API_KEY}
`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data = await res.json();
        setArticles(data.results || []);
        console.log(articles);
      } catch (error) {
        console.error('Fetch error:', error.message);
        setArticles([]);
      }
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-dark">News</span>
      </h2>
      {articles?.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image_url}
            url={news.source_url}
          />
        );
      })}
    </div>
  );
};
export default NewsBoard;
