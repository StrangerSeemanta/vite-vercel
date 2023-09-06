import { Fragment, useState } from 'react'
import Button from './Common/Button';
import ProjectCard from './Common/ProjectCard';
import Iframe, { IframeProps } from './Common/Iframe';
import Popup, { LangCard } from './Common/Popup';

import AnimatedWebsite_thumbnail from "./../assets/animated_preview.png";
import Bank_preview from "./../assets/banweb_preview.png";
import Crazy_preview from "./../assets/crazy_cock_preview.png";
import Portfolio_prev from "./../assets/portfolio_prev.png"
function ProjectGallery() {
    const [isIframeVisible, setIframeVisible] = useState(false);
    const [frameData, setFrameData] = useState({} as IframeProps)
    const closeIframe = () => {
        setIframeVisible(false);
    }

    const showIframe = ({ src, frameTitle }: IframeProps) => {
        setIframeVisible(true);
        setFrameData({ src: src, frameTitle: frameTitle });
    }


    const [isPopupVisible, setPopupVisible] = useState(false);
    const [langNames, setLangNames] = useState<string[][]>([[" "]])

    const showPopup = (langArr: string[][]) => {
        setPopupVisible(true);
        setLangNames(langArr)
    }

    return (
        <Fragment>
            <section id='projectGallery' className="project">
                <div className='container project-container'>
                    <ProjectCard thumbnail={Bank_preview} cardTitle='Bank Website Dummy' buttonsArr={[
                        <Button children='Used Languages' handleClick={() => {
                            showPopup([["HTML", "This is a markup language and first thing to build a website"], ["CSS", "I used Vanilla CSS3 Layout Here with custom color theme"], ["JS", "I touched vanilla javascript a little bit to make some functionalities."]])
                        }} />,
                        <Button children='Live Demo ' handleClick={() => {

                            showIframe({ src: "https://strangerseemanta.github.io/bankweb/", frameTitle: "Bank Website Dummy" })
                        }} />
                    ]}>
                        I have recreated the bank design for a client from CANADA. They told me that They need a website with the same design of an existing bank website. And Here it is.
                    </ProjectCard>

                    <ProjectCard thumbnail={AnimatedWebsite_thumbnail} cardTitle='Animated Website' buttonsArr={[
                        <Button children='Used Languages' handleClick={() => {
                            showPopup([["HTML", "This is a markup language and first thing to build a website"], ["CSS", "I used Vanilla CSS3 with custom properties and good code comments"], ["JS", "I made unique Scroll Effects, Video Synchronizations, SFX with complex javascript code and it's libs"]])
                        }} />,
                        <Button children='Live Demo ' handleClick={() => {
                            showIframe({ src: "https://strangerseemanta.github.io/animated/", frameTitle: "Animated Website" })
                        }} />
                    ]}>
                        This is a parallax website with animation. I made this website with HTML CSS JAVASCRIPT and related libraries. The black kitty will make his journey through a jungle. And this is the website. I will not show your the full website with full functionalities. Here is the sample version.
                    </ProjectCard>


                    <ProjectCard thumbnail={Crazy_preview} cardTitle='Crazy Cock' buttonsArr={[
                        <Button children='Used Languages' handleClick={() => {
                            showPopup([["HTML", "This is a markup language and first thing to build a website"], ["CSS", "I used popular css framework "], ["JS", "I used Javscript to make charts, slider, links and more functionalities"], ["SCSS", "I used CSS preprocessor to make a wonderful website with complex css layout."], ["jQuery", "We all know about jQuery.js. It is javascript lib. I used it to manipulate DOM"]])
                        }} />,
                        <Button children='Live Demo ' handleClick={() => {
                            showIframe({ src: "https://strangerseemanta.github.io/crypto_website_demo/", frameTitle: "Crazy Cock" })
                        }} />
                    ]}>
                        This is the website to show a crypto currency name "Cock Crypto". I made the entire website on my own. Ihave used Navigation Bar , Custom Cursor, Slider, Charts. I hope you will enjoy it. This is fully responsive for any device screen.
                    </ProjectCard>

                    <ProjectCard thumbnail={Portfolio_prev} cardTitle='Portfolio Website' buttonsArr={[
                        <Button children='Used Languages' handleClick={() => {
                            showPopup([["HTML", "This is a markup language and first thing to build a website"], ["CSS", "I used popular css framework "], ["JS", "I used typescript here. But you know Javascript is the core web lang."], ["SCSS", "I used CSS preprocessor to make a wonderful website with complex css layout."], ["REACT", "I used React JS, one of the most popular Technology,  to make this website."], ["Typescript", "Typescript is the modern version of Javascript. I used React With Typescript. TSX"]])
                        }} />
                    ]}>
                        Good to see you! I made this portfolio website with React JS. You will find here some best things. Like: CSS GRAPHS, parallax effect, React Hooks Effect, Lottie Animation, And so on. Keep browsing!!
                    </ProjectCard>

                </div>
                {isIframeVisible && <Iframe frameTitle={frameData.frameTitle} onCloseBtnCLick={closeIframe} src={frameData.src}></Iframe>}
                {isPopupVisible && <Popup Title='Languages' onCloseBtnCLick={() => { setPopupVisible(false) }}>
                    {langNames.map(([name, details], i) => (
                        <LangCard key={i} langDetails={details}>
                            {name}
                        </LangCard>
                    ))}
                </Popup>}
            </section>

        </Fragment>
    )
}

export default ProjectGallery