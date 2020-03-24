import React from 'react';
import Skills from '../../molecule/Skills/skills';
import ProjectsXP from '../../molecule/ProjectsXP/projects_xp';
import AcademicInfos from '../../molecule/AcademicInfos/academic_infos';
import Stats from '../../molecule/Stats/stats';
import Container from '../../Atoms/container/container'

let Section = (props) => {
    return (
        <Container tag='section' percent='90' flex fw >
            <Stats />
            <AcademicInfos />
            <ProjectsXP />
            <Skills />
        </Container>
    )
}


export default Section;
