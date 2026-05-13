import './MovieCard.css';

const MovieCard = ({ title, year, genre, image, rating }) => {
  return (
    <div className="movie-card pop-card">
      <div className="movie-image">
        <img src={image} alt={title} />
        <div className="movie-overlay">
          <span className="movie-rating">★ {rating}</span>
        </div>
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{year}</span>
          <span className="movie-genre">{genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
