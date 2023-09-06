import { Fragment, useRef, useState } from 'react'
// import RoundButton from './RoundButton'
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import CloseBtn from "./../../assets/lotties/closeAnimation.json"
export interface IframeProps {
    onCloseBtnCLick?: () => void;
    src: string;
    frameTitle: string;
}
function Iframe({ onCloseBtnCLick, src, frameTitle }: IframeProps) {
    const [showLoader, setLoaderVisible] = useState(true);
    const closeBtnRef = useRef<LottieRefCurrentProps>(null)

    const handleMouseEnter = () => {
        closeBtnRef.current?.stop();
        closeBtnRef.current?.setSpeed(0.9)

        closeBtnRef.current?.play();
    }

    const handleLeave = () => {
        closeBtnRef.current?.stop();
    }
    // const handleComplete = () => { closeBtnRef.current?.goToAndStop(0) }

    return (
        <Fragment>
            <div className="iframe-container">
                <div className="iframe-title">{frameTitle}</div>
                <div className="iframe-wrapper">
                    <iframe onLoad={() => { setLoaderVisible(false) }} src={src}></iframe>
                    {showLoader && <div className="frame-loader"></div>}
                </div>
                {/* <RoundButton className='iframe-closeBtn' handleClick={onCloseBtnCLick}>X</RoundButton> */}
                <Lottie autoplay={false} onClick={onCloseBtnCLick} onMouseLeave={handleLeave} onMouseEnter={handleMouseEnter} className='iframe-closeBtn' style={{ width: "90px", height: "90px", cursor: "pointer" }} animationData={CloseBtn} loop={false} lottieRef={closeBtnRef} />
            </div>
        </Fragment >
    )
}

export default Iframe