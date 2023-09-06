import { Fragment, useState } from 'react'
import Button from './Common/Button';
import ProjectCard from './Common/ProjectCard';
import Iframe, { IframeProps } from './Common/Iframe';


import AnimatedWebsite_thumbnail from "./../assets/animated_preview.png";
import Bank_preview from "./../assets/banweb_preview.png";
import Crazy_preview from "./../assets/crazy_cock_preview.png";

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
                    <ProjectCard thumbnail={Bank_preview} cardTitle='Bank Website Dummy' buttonsArr={[
                        <Button children='Used Languages' />,
                        <Button children='Live Demo ' handleClick={() => {
                            showFrame({ src: "https://strangerseemanta.github.io/bankweb/", frameTitle: "Bank Website Dummy" })
                        }} />
                    ]}>
                        I have recreated the bank design for a client from CANADA. They told me that They need a website with the same design of an existing bank website. And Here it is.
                    </ProjectCard>

                    <ProjectCard thumbnail={AnimatedWebsite_thumbnail} cardTitle='Animated Website' buttonsArr={[
                        <Button children='Used Languages' />,
                        <Button children='Live Demo ' handleClick={() => {
                            showFrame({ src: "https://strangerseemanta.github.io/animated/", frameTitle: "Animated Website" })
                        }} />
                    ]}>
                        This is a parallax website with animation. I made this website with HTML CSS JAVASCRIPT and related libraries. The black kitty will make his journey through a jungle. And this is the website. I will not show your the full website with full functionalities. Here is the sample version.
                    </ProjectCard>


                    <ProjectCard thumbnail={Crazy_preview} cardTitle='Crazy Cock' buttonsArr={[
                        <Button children='Used Languages' />,
                        <Button children='Live Demo ' handleClick={() => {
                            showFrame({ src: "https://strangerseemanta.github.io/crypto_website_demo/", frameTitle: "Crazy Cock" })
                        }} />
                    ]}>
                        This is the website to show a crypto currency name "Cock Crypto". I made the entire website on my own. Ihave used Navigation Bar , Custom Cursor, Slider, Charts. I hope you will enjoy it. This is fully responsive for any device screen.
                    </ProjectCard>

                </div>
                {showIframe && <Iframe frameTitle={frameData.frameTitle} onCloseBtnCLick={closeIframe} src={frameData.src}></Iframe>}

            </section>

        </Fragment>
    )
}

export default ProjectGallery