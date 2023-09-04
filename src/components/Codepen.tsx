import { useEffect, useRef, useState } from 'react';
interface Props {
    animate: boolean;
    children: string;
}
function Codepen({ animate, children }: Props) {
    const [isPlayin, setPlay] = useState(false)
    const element = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (animate) {

            let i = 0;
            const txt = children;
            const speed = 15;
            const typeWriter = () => {

                if (!isPlayin) {
                    setPlay(true);
                    if (element.current) {
                        if (i < txt.length) {
                            element.current.innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
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
