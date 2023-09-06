import Lottie, { LottieRefCurrentProps } from "lottie-react";
import FacebookAnimation from "./assets/lotties/FacebookIco.json";
import InstaAnimation from "./assets/lotties/InstaIco.json";
import GithubAnimation from "./assets/lotties/GithubIco.json";
import FiverrAnimation from "./assets/lotties/FiverrIco.json";
import StackOverFlowIco from "./assets/lotties/stackOverflowIco.json"
import SocialAnime from "./assets/lotties/social.json";
import SocialTree from "./assets/lotties/socialTree.json";
import EmailSentSuccess from "./assets/lotties/emailSentSuccess.json";
import Button from "./components/Common/Button";
import EmailAnime from "./assets/lotties/emailAnime.json"

import GmailIcon from "./assets/lotties/gmailIcon.json"

import { RefObject, useRef, useState } from "react";

function Contact() {
    // Lottie Refs
    const fbRef = useRef<LottieRefCurrentProps>(null);
    const igRef = useRef<LottieRefCurrentProps>(null);
    const gitRef = useRef<LottieRefCurrentProps>(null);
    const fiverrRef = useRef<LottieRefCurrentProps>(null);
    const stackOverflowRef = useRef<LottieRefCurrentProps>(null)
    const socialAnime = useRef<LottieRefCurrentProps>(null);
    const socialTree = useRef<LottieRefCurrentProps>(null);
    const emailSentSuccess = useRef<LottieRefCurrentProps>(null);
    const emailAnime = useRef<LottieRefCurrentProps>(null);
    const gmailIcon = useRef<LottieRefCurrentProps>(null);

    // hooks
    const [showEmailAnime, SetEmailAnimeVisible] = useState(false);
    const [lottieComplete, setLottieStat] = useState(false);

    const LottiePlay = (lottieRef: RefObject<LottieRefCurrentProps>, speed?: number) => {
        LottieStop(lottieRef);
        speed ? lottieRef.current?.setSpeed(speed) : lottieRef.current?.setSpeed(0.5);
        lottieRef.current?.play();
    }
    const LottieStop = (lottieRef: RefObject<LottieRefCurrentProps>) => {
        lottieRef.current?.stop();
    }
    const handleMailBtnClick = () => {
        emailSentSuccess.current?.stop();
        SetEmailAnimeVisible(false);
        window.location.href = "mailto:ssworkmail22@gmail.com"
    }
    return (
        <>
            <section className="contact" id="contact" data-aos="fade-up">
                <div className="title">Let's Connect</div>
                <div className="main-layout">
                    <div onMouseEnter={() => { LottiePlay(socialAnime, 0.75) }} className="layout-tab social-tab">
                        <div className="social-anime-holder">
                            <Lottie autoplay={false} loop={false} lottieRef={socialAnime} id="socialAnime" animationData={SocialAnime} />
                        </div>
                        <div className="content-holder">
                            <h1>Connect With Me</h1>
                            <Lottie style={{ width: "100%", height: "35vh" }} animationData={SocialTree} lottieRef={socialTree} />
                            <div className="social-icons">
                                {/* Facebook Icon */}
                                <Lottie onClick={() => { window.open("https://www.facebook.com/Stranger.Seemanta") }} onMouseEnter={() => { LottiePlay(fbRef) }} lottieRef={fbRef} autoplay={false} loop={false} animationData={FacebookAnimation} id="fbAnimation" className="lottieSocial" />

                                {/* Instagram Icon */}
                                <Lottie onClick={() => { window.open("https://www.instagram.com/wisecat_speaking/") }} onMouseEnter={() => { igRef.current?.goToAndPlay(43, true) }} lottieRef={igRef} autoplay={true} loop={false} animationData={InstaAnimation} id="igAnimation" className="lottieSocial" />

                                {/* Github Icon */}
                                <Lottie onClick={() => { window.open("https://github.com/StrangerSeemanta") }} onMouseEnter={() => { LottiePlay(gitRef) }} lottieRef={gitRef} autoplay={false} loop={false} animationData={GithubAnimation} id="gitAnimation" className="lottieSocial" />

                                {/* Fiverr Icon */}
                                <Lottie onClick={() => { window.open(" https://www.fiverr.com/shuvosarker933") }} onMouseEnter={() => { LottiePlay(fiverrRef, 3) }} lottieRef={fiverrRef} autoplay={false} loop={false} animationData={FiverrAnimation} id="fiverrAnimation" className="lottieSocial" />

                                {/* Stack Overflows Icon */}
                                <Lottie onClick={() => { window.open(" https://www.fiverr.com/shuvosarker933") }} onMouseEnter={() => { LottiePlay(stackOverflowRef, 1.4) }} lottieRef={stackOverflowRef} autoplay={true} loop={false} animationData={StackOverFlowIco} id="sfAnimation" className="lottieSocial" />

                            </div>
                        </div>
                    </div>

                    <div className="layout-tab">
                        <div className="content-holder">
                            <h1>Send Me a mail</h1>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}> <Lottie animationData={GmailIcon} style={{ width: "50px", height: "50px" }} loop={false} onComplete={() => { gmailIcon.current?.playSegments([12, 53], true) }} lottieRef={gmailIcon} id="gmailIcon" />
                                <span style={{ color: "red", fontFamily: "serif", fontSize: "13px" }}>ssworkmail22@gmail.com</span>
                            </div>
                            <Lottie lottieRef={emailAnime} animationData={EmailAnime} style={{ width: "100%", height: "40vh" }}
                                onComplete={() => {
                                    lottieComplete ? emailAnime.current?.playSegments([26, 56], true) : emailAnime.current?.playSegments([56, 26], true);
                                    emailAnime.current?.setSpeed(0.6);

                                    setLottieStat(!lottieComplete)
                                }
                                } loop={false} />
                            {showEmailAnime ?
                                <Lottie onComplete={handleMailBtnClick} lottieRef={emailSentSuccess} autoplay={true} loop={false} style={{ width: "220px", height: "110px" }} animationData={EmailSentSuccess} />
                                :
                                <Button handleClick={() => { SetEmailAnimeVisible(true) }} colorPallete={{ themeColor: "#f45702", textColor: "black", afterTextColor: "white" }} >Send Direct Mail</Button>
                            } </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact