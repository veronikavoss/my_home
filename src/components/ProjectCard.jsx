import { ExternalLink, Code } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, link, repoLink, image }) => {
  return (
    <div className="project-card pop-card">
      <div className="project-image-container">
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <span className="project-image-text">{title.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-links">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-btn primary">
              <ExternalLink size={16} />
              <span>Live View</span>
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-link-btn secondary">
              <Code size={16} />
              <span>Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
