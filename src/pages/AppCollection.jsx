import ProjectCard from '../components/ProjectCard';
import './AppCollection.css';

// 더미 데이터
const APPS_DATA = [
  {
    id: 1,
    title: 'TrackCam',
    description: '웹캠을 이용한 머리 추적 마우스 컨트롤러. HTML5 Canvas와 컴퓨터 비전을 활용하여 부드러운 커서 이동을 지원합니다.',
    tags: ['HTML5', 'JavaScript', 'Computer Vision'],
    link: 'https://github.com/my-username/trackcam-web',
    repoLink: 'https://github.com/my-username/trackcam-web',
    image: null // 이미지 없을 경우 텍스트 플레이스홀더 출력
  },
  {
    id: 2,
    title: 'Tetris Clone',
    description: '고전 아타리 테트리스를 웹 기반으로 완벽하게 재현한 1:1 클론 프로젝트입니다. 바닐라 JS로 개발되었습니다.',
    tags: ['HTML5', 'Vanilla JS', 'Game'],
    link: 'https://github.com/my-username/atari-tetris-clone',
    repoLink: 'https://github.com/my-username/atari-tetris-clone',
    image: null
  },
  {
    id: 3,
    title: 'MKV Splitter UI',
    description: '동영상 플레이어의 커스텀 풀스크린 UI. 미려한 상태 바와 자막 선택 메뉴가 포함된 웹 기반 비디오 컨트롤러입니다.',
    tags: ['HTML/CSS', 'UI/UX', 'Video'],
    link: 'https://github.com/my-username/mkv-splitter-ui',
    repoLink: 'https://github.com/my-username/mkv-splitter-ui',
    image: null
  },
  {
    id: 4,
    title: 'Earnings',
    description: '기업 실적(Earnings) 및 재무 관련 정보를 제공하는 웹 프로젝트입니다. GitHub에 호스팅된 HTML 애플리케이션입니다.',
    tags: ['HTML', 'Finance', 'Data'],
    link: 'https://veronikavoss.github.io/earnings',
    repoLink: 'https://github.com/veronikavoss/earnings',
    image: null
  }
];

const AppCollection = () => {
  return (
    <div className="apps-page container animate-fade-in">
      <header className="page-header">
        <h1 className="page-title">App Collection</h1>
        <p className="page-description">깃허브에 HTML 기반으로 호스팅된 프로젝트와 직접 만든 앱들의 모음입니다.</p>
      </header>
      
      <div className="apps-grid">
        {APPS_DATA.map((app, index) => (
          <div key={app.id} className={`delay-${(index % 3 + 1) * 100} animate-fade-in`} style={{animationFillMode: 'both'}}>
            <ProjectCard {...app} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppCollection;
