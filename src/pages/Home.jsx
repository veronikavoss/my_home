import { Link } from 'react-router-dom';
import { ArrowRight, Film, Code2 } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home container">
      <section className="hero">
        <h1 className="hero-title animate-fade-in">
          Creative <br/>
          <span className="text-gradient">Developer</span> & <br/>
          Movie Enthusiast.
        </h1>
        <p className="hero-subtitle animate-fade-in delay-100">
          환영합니다! 제가 만든 다양한 애플리케이션과 좋아하는 영화 목록을 이곳에서 확인하실 수 있습니다.
        </p>
        
        <div className="hero-cards animate-fade-in delay-200">
          <Link to="/apps" className="hero-card pop-card group">
            <div className="hero-card-icon">
              <Code2 size={32} />
            </div>
            <div className="hero-card-content">
              <h3>App Collection</h3>
              <p>직접 개발한 다양한 앱 프로젝트 모음</p>
            </div>
            <div className="hero-card-arrow">
              <ArrowRight size={20} />
            </div>
          </Link>
          
          <Link to="/watchlist" className="hero-card pop-card group">
            <div className="hero-card-icon">
              <Film size={32} />
            </div>
            <div className="hero-card-content">
              <h3>Movie Watchlist</h3>
              <p>기억에 남는 영화와 시청 리스트</p>
            </div>
            <div className="hero-card-arrow">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
