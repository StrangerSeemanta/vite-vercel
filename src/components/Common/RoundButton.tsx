import React, { ReactNode } from 'react'
import AosProps from './AosProps';
import "./../scss/RoundButton.css"
interface Props {
    children: ReactNode;
    className?: string;
    handleClick?: () => void;
    AOS?: AosProps;
}
function RoundButton({ children, className, handleClick, AOS }: Props) {
    return (
        <>
            <div
                data-aos={AOS?.data}
                data-aos-duration={AOS?.duration}
                data-aos-delay={AOS?.delay}
                data-aos-easing={AOS?.easing}
                className='btn-wrapper'>
                <button onClick={handleClick} className={className ? className + " round-btn" : "round-btn"}>
                    {children}
                </button>
            </div>
        </>
    )
}

export default RoundButton