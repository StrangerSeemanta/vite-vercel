import { Fragment, useRef, ReactNode } from 'react'
// import RoundButton from './RoundButton'
import Lottie, { LottieRefCurrentProps } from "lottie-react"
import CloseBtn from "./../../assets/lotties/closeAnimation.json"
export interface PopupProps {
    onCloseBtnCLick?: () => void;
    Title: string;
    children: ReactNode;

}
export interface LangCardProps {
    children: ReactNode;
    langDetails: string;
}
export function LangCard({ children, langDetails }: LangCardProps) {
    return (
        <>
            <div className='lang-div'>
                {children}
                <div className="lang-description">{langDetails}</div>
            </div>
        </>
    )
}
function Popup({ onCloseBtnCLick, Title, children }: PopupProps) {
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
            <div className="Popup-container">
                <div className="Popup-wrapper">
                    <div className="Popup-title">{Title}</div>
                    <div className="Popup">
                        {children}
                    </div>
                    <Lottie autoplay={false} onClick={onCloseBtnCLick} onMouseLeave={handleLeave} onMouseEnter={handleMouseEnter} className='Popup-closeBtn' style={{ width: "90px", height: "90px", cursor: "pointer" }} animationData={CloseBtn} loop={false} lottieRef={closeBtnRef} />
                </div>
                {/* <RoundButton className='iframe-closeBtn' handleClick={onCloseBtnCLick}>X</RoundButton> */}
            </div>
        </Fragment >
    )
}

export default Popup