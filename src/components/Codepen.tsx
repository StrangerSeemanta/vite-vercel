import React, { useEffect, useRef, useState } from 'react';
interface Props {
    animate: boolean;
    children: string;
}
function Codepen({ animate, children }: Props) {
    const id = "demo"; // Add the ID you want to use
    const [isPlayin, setPlay] = useState(false)
    const element = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let timer;

        if (animate) {
            var i = 0;
            var txt = children;
            var speed = 15;
            function typeWriter() {
                if (!isPlayin) {
                    setPlay(true);
                    if (element.current) {
                        if (i < txt.length) {
                            element.current.innerHTML += txt.charAt(i);
                            i++;
                            timer = setTimeout(typeWriter, speed);
                        }
                    }
                } else {
                    return 0;
                }
            }

            typeWriter();
        }


    }, [animate])



    return (
        <>
            <div data-aos="zoom-out-left" className="codepen-holder">
                <div ref={element} id="demo" className="codepen">
                    {/* Add more typewriter elements here */}
                </div>
            </div>
        </>
    );
}

export default Codepen;
