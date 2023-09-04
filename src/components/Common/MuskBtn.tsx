import React from 'react'
import "./../scss/MuskBtn.css"
import AosProps from './AosProps';
interface MuskBtnProps {
    buttonId?: string;
    children: string;
    handleClick?: () => void;
    AOS?: AosProps
}
function MuskBtn({ buttonId, handleClick, children, AOS }: MuskBtnProps) {
    return (
        <>
            <div
                data-aos={AOS?.data}
                data-aos-duration={AOS?.duration}
                data-aos-delay={AOS?.delay}
                data-aos-easing={AOS?.easing}
                className="musk-btn">
                <span className="mas">{children}</span>
                <button id={buttonId} onClick={handleClick} type="button" name="Hover">{children}</button>
            </div>
        </>
    )
}

export default MuskBtn