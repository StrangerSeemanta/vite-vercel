import Lottie, { LottieRefCurrentProps } from "lottie-react";
import FacebookAnimation from "./assets/lotties/FacebookIco.json";
import InstaAnimation from "./assets/lotties/InstaIco.json";
import GithubAnimation from "./assets/lotties/GithubIco.json";
import FiverrAnimation from "./assets/lotties/FiverrIco.json";
import SocialAnime from "./assets/lotties/social.json";
import SocialTree from "./assets/lotties/socialTree.json";
import EmailSentSuccess from "./assets/lotties/emailSentSuccess.json";
import Button from "./components/Common/Button";
import EmailAnime from "./assets/lotties/emailAnime.json"
import { RefObject, useRef, useState } from "react";

function Contact() {
    // Lottie Refs
    const fbRef = useRef<LottieRefCurrentProps>(null);
    const igRef = useRef<LottieRefCurrentProps>(null);
    const gitRef = useRef<LottieRefCurrentProps>(null);
    const fiverrRef = useRef<LottieRefCurrentProps>(null);
    const socialAnime = useRef<LottieRefCurrentProps>(null);
    const socialTree = useRef<LottieRefCurrentProps>(null);
    const emailSentSuccess = useRef<LottieRefCurrentProps>(null);
    const emailAnime = useRef<LottieRefCurrentProps>(null);

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
                                <Lottie onMouseEnter={() => { LottiePlay(fbRef) }} lottieRef={fbRef} autoplay={false} loop={false} animationData={FacebookAnimation} id="fbAnimation" className="lottieSocial" />
                                <Lottie onMouseEnter={() => { igRef.current?.goToAndPlay(43, true) }} lottieRef={igRef} autoplay={true} loop={false} animationData={InstaAnimation} id="igAnimation" className="lottieSocial" />
                                <Lottie onMouseEnter={() => { LottiePlay(gitRef) }} lottieRef={gitRef} autoplay={false} loop={false} animationData={GithubAnimation} id="gitAnimation" className="lottieSocial" />
                                <Lottie onMouseEnter={() => { LottiePlay(fiverrRef, 3) }} lottieRef={fiverrRef} autoplay={false} loop={false} animationData={FiverrAnimation} id="fiverrAnimation" className="lottieSocial" />

                            </div>
                        </div>
                    </div>

                    <div className="layout-tab">
                        <div className="content-holder">
                            <h1>Send Me a mail</h1>
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