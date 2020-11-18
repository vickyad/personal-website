import React, { useState } from 'react'
import './style.css'

interface ProjectProps {
    projectIllustration: string
    projectDescription: JSX.Element
}

const ProjectBox: React.FC<ProjectProps> = ({
    projectIllustration,
    projectDescription
}) => {
    const [showing, setShowing] = useState<boolean>(false)

    const handleShowing = () => {
        setShowing(!showing)
    }
    
    const renderInfo = (projectDescription: JSX.Element): JSX.Element => (
        projectDescription
    )

    return (
        <div className="columnInfo">
            <div className="my-projects" onClick={handleShowing}>
                <img src={projectIllustration} width="250px" alt="" />
            </div>
            <div className="project-info">
                {showing ? renderInfo(projectDescription) : <></>}
            </div>
        </div>
    )
}

export default ProjectBox