import MovieCard from '../components/MovieCard';
import './Watchlist.css';

// 더미 데이터
const WATCHLIST_DATA = [
  {
    id: 1,
    title: '인터스텔라 (Interstellar)',
    year: '2014',
    genre: 'SF',
    rating: '8.7',
    image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  },
  {
    id: 2,
    title: '다크 나이트 (The Dark Knight)',
    year: '2008',
    genre: 'Action',
    rating: '9.0',
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    id: 3,
    title: '인셉션 (Inception)',
    year: '2010',
    genre: 'SF',
    rating: '8.8',
    image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
  },
  {
    id: 4,
    title: '어벤져스: 엔드게임',
    year: '2019',
    genre: 'Action',
    rating: '8.4',
    image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
  },
  {
    id: 5,
    title: '매트릭스 (The Matrix)',
    year: '1999',
    genre: 'Action',
    rating: '8.7',
    image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    id: 6,
    title: '기생충 (Parasite)',
    year: '2019',
    genre: 'Drama',
    rating: '8.5',
    image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
  }
];

const Watchlist = () => {
  return (
    <div className="watchlist-page container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">Movie Watchlist</h1>
        <p className="page-description">인상 깊게 본 영화들과 앞으로 보고 싶은 영화 목록입니다.</p>
      </header>
      
      <div className="watchlist-grid">
        {WATCHLIST_DATA.map((movie, index) => (
          <div key={movie.id} className={`delay-${(index % 3 + 1) * 100} animate-fade-in`} style={{animationFillMode: 'both'}}>
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
