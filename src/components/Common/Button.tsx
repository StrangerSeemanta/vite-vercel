import AosProps from './AosProps';
import "./../scss/ButtonDefault.css"
import { CSSProperties } from 'react';
interface Props {
    children: string;
    className?: string;
    handleClick?: () => void;
    AOS?: AosProps;
    colorPallete?: {
        themeColor?: string;
        textColor?: string;
        afterTextColor?: string;
    }
}
function Button({ children, className, handleClick, AOS, colorPallete }: Props) {
    return (
        <>
            <div
                data-aos={AOS?.data}
                data-aos-duration={AOS?.duration}
                data-aos-delay={AOS?.delay}
                data-aos-easing={AOS?.easing}
                className="btn-wrapper-default"
                style={{ "--themeColor": colorPallete ? colorPallete.themeColor : "rgb(120, 8, 190)", "--textColor": colorPallete ? colorPallete.textColor : "white", "--afterTextColor": colorPallete ? colorPallete.afterTextColor : "white" } as CSSProperties}>
                <button data-child={children} className={className} onClick={handleClick}>{children}</button>

            </div>
        </>
    )
}

export default Button