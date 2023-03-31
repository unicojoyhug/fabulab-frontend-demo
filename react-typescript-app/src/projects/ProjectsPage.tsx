import React from 'react'
import { MOCK_PROJECTS } from './MockProjects';

function ProjectsPage(){

    let textFromJson = JSON.stringify(MOCK_PROJECTS);

    return (
        <>
        <h1>Projects</h1>
        <pre>{textFromJson}</pre>
        </>
    );
}

export default ProjectsPage;