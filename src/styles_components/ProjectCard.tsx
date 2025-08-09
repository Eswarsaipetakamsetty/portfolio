import type React from "react"
import ScrollReveal from "./ScrollReveal"
import "../styles/ProjectCard.css"
import { GoArrowUpRight } from "react-icons/go"

interface ProjectCardProps {
    title: string
    label: string
    imageURL: string
    tags: string[]
    url: string
    leftToRight?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, label, imageURL, leftToRight=false, tags, url}) => {
    return (
        <div className="project-card">
            <h1 className="project-card-title">{title}</h1>
            <div className="image-description-wrapper" 
                style={{"--direction": leftToRight ? "column" : "column-reverse" } as React.CSSProperties}
            >
                {leftToRight?
                    <>
                    <div className="image-wrapper">
                    <img src={imageURL} className="image" alt="" />
                    </div>
                    <div style={{justifyContent: "center", maxWidth: "50%"}}>
                        < ScrollReveal
                            textClassName="project-description"
                            containerClassName="project-description-container"
                            baseOpacity={0}
                            enableBlur={true}
                            baseRotation={5}
                            blurStrength={10}
                        >
                            {label}
                        </ScrollReveal>
                        <div className="tags-wrapper">
                            {tags.map((tag, index)=> (
                                <span
                                    key={index}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={url} target="_blank" className="redirect-url">
                            <GoArrowUpRight />
                        </a>
                    </div>
                    
                    </>
                :
                    <>
                    <div style={{justifyContent: "center", maxWidth: "50%", textAlign:"right"}}>
                        < ScrollReveal
                            textClassName="project-description"
                            containerClassName="project-description-container"
                            baseOpacity={0}
                            enableBlur={true}
                            baseRotation={5}
                            blurStrength={10}
                        >
                            {label}
                        </ScrollReveal>
                        <div className="tags-wrapper">
                            {tags.map((tag, index)=> (
                                <span
                                    key={index}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a href={url} target="_blank" className="redirect-url">
                            <GoArrowUpRight />
                        </a>
                    </div>
                    <div className="image-wrapper">
                    <img src={imageURL} className="image" alt="" />
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProjectCard