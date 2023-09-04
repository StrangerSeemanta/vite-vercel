import React, { ReactNode } from 'react'
import AosProps from './AosProps';
import "./../scss/ButtonDefault.css"
interface Props {
    children: string;
    className?: string;
    handleClick?: () => void;
    AOS?: AosProps;
}
function Button({ children, className, handleClick, AOS }: Props) {
    return (
        <>
            <div
                data-aos={AOS?.data}
                data-aos-duration={AOS?.duration}
                data-aos-delay={AOS?.delay}
                data-aos-easing={AOS?.easing}
                className="btn-wrapper-default">
                <button data-child={children} className={className} onClick={handleClick}>{children}</button>

            </div>
        </>
    )
}

export default Button