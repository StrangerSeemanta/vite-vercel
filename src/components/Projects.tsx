import React, { useRef, useState } from 'react'
import ProjectTexture from './ProjectTexture'
import ProjectGallery from './ProjectGallery';
function Projects() {
    const container = useRef<HTMLDivElement | null>(null);
    const [hideTexture, setHideTexture] = useState(false);
    const [transformVal, setTransformVal] = useState("translate3d(800px, 50px, 300px) scale(0.5) rotateX(35deg)")
    let x = 800, y = 50, z = 300, scale = 0.5, rotate = 35;
    const defaultTransform = "translate3d(800px, 50px, 300px) scale(0.5) rotateX(35deg)";
    const transform = () => {
        if (!hideTexture) {
            window.addEventListener('scroll', function () {
                if (scale <= 14) {
                    setTransformVal(`translate3d(${x -= 2}px, ${y += 10}px, ${z += 12}px) scale(${scale += 0.1}) rotateX(${rotate - 1}deg)`)
                } else {
                    setHideTexture(true);
                    setTransformVal(defaultTransform);
                }
            })
        }
    }
    return (
        <>
            <section id='projects'>
                {
                    !hideTexture ?
                        <div ref={container} onMouseEnter={transform} className='project-texture-container'>
                            <ProjectTexture transform={transformVal}></ProjectTexture>
                        </div> :
                        <>

                            <ProjectGallery />
                        </>
                }
            </section>


        </>
    )
}

export default Projects
