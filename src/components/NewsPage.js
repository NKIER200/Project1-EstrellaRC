import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; 

const NewsPage = () => {
  
  const news = [
    {
      id: 1,
      title: "Club Finishes Top of Cup Playoffs",
      date: "2023-11-19",
      content: "-",
    },
    {
        id: 2,
        title: "Club Wins Copa De Primera For First Time!",
        date: "2023-12-17",
        content: "-",
      },
      {
        id: 3,
        title: "Preseason begins!",
        date: "2023-12-31",
        content: "-",
      },
      {
        id: 4,
        title: "Gracias Romo",
        date: "2023-01-17",
        content: "-",
      },
      {
        id: 5,
        title: "Cardona: An Icon",
        date: "2023-01-17",
        content: "-",
      },
      {
        id: 6,
        title: "Paz: One Last Dance",
        date: "2023-01-23",
        content: "",
      },
      {
        id: 7,
        title: "Preseason Review",
        date: "2023-01-30",
        content: "",
      },
      {
        id: 8,
        title: "Copa Libertadores Debut",
        date: "2023-01-30",
        content: "",
      },
      {
        id: 9,
        title: "League Champions!",
        date: "2023-01-30",
        content: "",
      },
      {
        id: 10,
        title: "Libertadores: A Chance at History",
        date: "2023-10-10",
        content: "",
      },
      {
        id: 11,
        title: "WE HAVE NO WORDS",
        date: "2023-10-10",
        content: "",
      },
      {
        id: 12,
        title: "WE ARE CONEMBOL LIBERTADORES CHAMPIONS",
        date: "2023-10-10",
        content: "",
      },
    
  ];

  // Sorts all news articles in a descending order based on their respective id
  const sortedNews = news.sort((a, b) => b.id - a.id);

  return (
    <div className="news-page">
      <h1 className="truegold1">Club News</h1>
      <div className="news-list">
        {sortedNews.map((article) => (
          <div key={article.id} className="news-article-container">
            <Link to={`/news/${article.id}`} className="news-link">
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
