import React, { Fragment, useState } from 'react'
import RoundButton from './RoundButton'
export interface IframeProps {
    onCloseBtnCLick?: () => void;
    src: string;
    frameTitle: string;
}
function Iframe({ onCloseBtnCLick, src, frameTitle }: IframeProps) {
    const [showLoader, setLoaderVisible] = useState(true)
    return (
        <Fragment>
            <div className="iframe-container">
                <div className="iframe-title">{frameTitle}</div>
                <div className="iframe-wrapper">
                    <iframe onLoad={() => { setLoaderVisible(false) }} src={src}></iframe>
                    {showLoader && <div className="frame-loader"></div>}
                </div>
                <RoundButton className='iframe-closeBtn' handleClick={onCloseBtnCLick}>X</RoundButton>
            </div>
        </Fragment >
    )
}

export default Iframe