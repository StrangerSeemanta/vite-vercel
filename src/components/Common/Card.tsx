import React, { ReactNode } from 'react'
import Link, { LinkProps } from './Link';
import AosProps from './AosProps';
import "./../scss/Card.css"


export interface Props {
    children: ReactNode;
    heading: string;
    image?: string;
    bottom_link?: LinkProps;
    id?: string;
    className?: string;
    aos?: AosProps

}
export function CardBody({ children, bottom_link }: any) {
    return (
        <>
            <div className='cardBody'>{children}</div>
            {bottom_link && <Link link={bottom_link.link}>{bottom_link.children}</Link>}
        </>
    )
}
export function CardHead({ children }: any) {
    return (
        <h1 className='cardHead'>{children}</h1>
    )
}
export function Image({ source }: any) {
    return (
        <>
            <img src={source} alt="image" />
        </>
    )
}
function Card({ id, className, children, heading, image, bottom_link, aos }: Props) {
    return (
        <>
            <div id={id && id} className={className ? `${className}` + " card" : "card"}
                data-aos={aos?.data}
                data-aos-easing={aos?.easing}
                data-aos-duration={aos?.duration}
                data-aos-delay={aos?.delay}
            >

                <div className="card-content">
                    {image && <Image source={image} />}
                    <CardHead>
                        {heading}
                    </CardHead>
                    {bottom_link ? <CardBody bottom_link={bottom_link}>
                        {children}
                    </CardBody> : <CardBody>
                        {children}
                    </CardBody>}
                </div>
            </div>
        </>

    )
}

export default Card