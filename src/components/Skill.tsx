import React, { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Graph from './Common/Graph'
import RoundButton from './Common/RoundButton'
import MuskBtn from './Common/MuskBtn'
function Skill() {
    const ProgrammingLangData = {
        graphName: "Programming Languages",
        data: {
            "HTML": 90,
            "CSS": 80,
            "JavaScript": 70,
            "React": 75,
            "ES6+": 55,
            "Bootstrap": 70,
            "jquery": 50,
            "Scss": 85,
            "PHP": 65,
            "MongoDB": 40
        }
    }
    const WorkTypeData = {
        graphName: "Working Skills",
        data: {
            "CMS": 75,
            "DDBB": 55,
            "DESIGN": 90,
            "PROGRAMING": 70,
            "ANIMATION": 85,
            "API": 40,
            "Charts": 85
        }
    }
    const ToolsData = {
        graphName: "Skills On Tools",
        data: {
            "WORDPRESS": 85,
            "VS..Code": 95,
            "Adobe..CC": 70,
            "Git": 85,
            "Figma": 80,
            "Zoomla": 50,
            "Wix": 70
        }
    }
    const Graphs = [ProgrammingLangData, WorkTypeData, ToolsData]
    const [graphIndex, setGraphIndex] = useState(0)
    const prevGraph = () => {
        if (graphIndex > 0) {
            let i = graphIndex - 1;
            setGraphIndex(i)
        } else {
            setGraphIndex(Graphs.length - 1)
        }
    }
    const nextGraph = () => {
        if (graphIndex < Graphs.length - 1) {
            let i = graphIndex + 1;
            setGraphIndex(i)
        } else {
            setGraphIndex(0);
        }
    }
    return (
        <Fragment>
            <section id='skill' className='skillSection'>
                <Graph GraphData={Graphs[graphIndex]} />
                <RoundButton className='slide-btn slide-prev' handleClick={prevGraph} >&lt;</RoundButton>
                <RoundButton handleClick={nextGraph} className='slide-btn slide-next'>&gt;</RoundButton>
                <MuskBtn buttonId='work'>In Charts</MuskBtn>
            </section>
        </Fragment>
    )
}

export default Skill