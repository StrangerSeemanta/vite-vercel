import React, { Fragment, ReactNode } from 'react'
import "./../scss/ProjectCard.css"
interface ProjectCardProps {
    cardTitle: string;
    children: string;
    buttonsArr?: ReactNode[];
    thumbnail: string;
}
function ProjectCard({ cardTitle, children, buttonsArr, thumbnail }: ProjectCardProps) {
    return (
        <Fragment>
            <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="project-card-container">
                <div style={{ "--src": `url(${thumbnail})` } as any} className="img-holder">
                    {/* <img src={thumbnail} alt={cardTitle + ".png"} /> */}

                </div>
                <h1 className="projectCard-title">{cardTitle}</h1>
                <p className="projectCard-body">{children}</p>
                <div className="projectCard-btn-holder">
                    {buttonsArr?.map((item, index) => (
                        <Fragment key={index}>{item}</Fragment>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}
export default ProjectCard