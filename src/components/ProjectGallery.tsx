import React, { Fragment, ReactNode, useState } from 'react'
import Button from './Common/Button';
import ProjectCard from './Common/ProjectCard';
import Iframe, { IframeProps } from './Common/Iframe';
function ProjectGallery() {
    const [showIframe, setIframeVisible] = useState(false);
    const [frameData, setFrameData] = useState({} as IframeProps)
    const closeIframe = () => {
        setIframeVisible(false);
    }

    const showFrame = ({ src, frameTitle }: IframeProps) => {
        setIframeVisible(true);
        setFrameData({ src: src, frameTitle: frameTitle });
    }
    return (
        <Fragment>
            <section id='projectGallery' className="project">
                <div className='container project-container'>
                    <ProjectCard thumbnail='/src/assets/side.jpg' cardTitle='Bank Website Dummy' buttonsArr={[
                        <Button children='Study More' />,
                        <Button children='Live Demo ' handleClick={() => {
                            showFrame({ src: "https://strangerseemanta.github.io/bankweb/", frameTitle: "Bank Website Dummy" })
                        }} />
                    ]}>
                        This is first website
                    </ProjectCard>

                    <ProjectCard thumbnail='/src/assets/side.jpg' cardTitle='Animated Website' buttonsArr={[
                        <Button children='Study More' />,
                        <Button children='Live Demo ' handleClick={() => {
                            showFrame({ src: "https://strangerseemanta.github.io/animated/", frameTitle: "Animated Website" })
                        }} />
                    ]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum odit dolorum magni amet sit nobis veritatis placeat, nesciunt commodi aspernatur officia ad omnis facilis dignissimos ratione rerum ex repudiandae vero delectus itaque consectetur officiis.
                    </ProjectCard>


                    <ProjectCard thumbnail='/src/assets/side.jpg' cardTitle='Crazy Cock' buttonsArr={[
                        <Button children='Study More' />,
                        <Button children='Live Demo ' handleClick={() => {
                            showFrame({ src: "https://strangerseemanta.github.io/crypto_website_demo/", frameTitle: "Crazy Cock" })
                        }} />
                    ]}>
                        This is the website to show a crypto currency name "Cock Crypto".
                    </ProjectCard>

                </div>
                {showIframe && <Iframe frameTitle={frameData.frameTitle} onCloseBtnCLick={closeIframe} src={frameData.src}></Iframe>}

            </section>
        </Fragment>
    )
}

export default ProjectGallery