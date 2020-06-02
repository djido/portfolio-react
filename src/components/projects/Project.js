import React from 'react';

const Project = ({imageUrl, title, description, technology, link, codeLink }) => {
    return (
        <article className="project-container">
            <div className="project-img">
                <a href={link} target="_blank" rel="noreferrer noopener"><img src={imageUrl} alt="title" className="image" /></a>
            </div>
            <div className="project-info">
                <h3 className="project-info__title"><a href={link} target="_blank" rel="noreferrer noopener">{title}</a></h3>
                <p className="project-info__description">{description}</p>
                <p className="project-info__tech">{technology.map(tech => {
                    return <span className="project-info__tech-item" key={tech}>{tech}</span>;
                })}</p>

            {
           	 link !== "" && <a href={link} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Live Demo</a>
           }
            {
           	 codeLink !== "" && <a href={codeLink} target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary">Source Code</a>
           }    
                
            </div>
        </article>
    )
}

export default Project;
