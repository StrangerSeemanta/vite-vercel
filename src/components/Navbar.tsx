import { Fragment, useEffect, useState, useRef } from "react";
import "./scss/Navbar.css"
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import EyeOffAnime from "./../assets/lotties/eyeOff.json";
interface Props {
    logo?: {
        src: string;
        altText: string;
    };
    brand_name?: string;
    links: string[];
    onSelected: (item: string, index: number) => void;
}
function Navbar({ brand_name, links, onSelected, logo }: Props) {
    // Hooks
    const [activeLink, setActiveLink] = useState(0)
    const [mobileMenuVisibility, setmobileMenuVisibility] = useState(false);
    const [isCollapsed, SetCollapseStat] = useState(false);
    const [isNavHide, setNavHideStat] = useState(false);
    //using NavCollapseEffect
    const header = useRef<HTMLElement | null>(null);
    const eyeOff = useRef<LottieRefCurrentProps>(null);
    useEffect(() => {
        const scrollArr: number[] = [];

        window.addEventListener('scroll', () => {
            scrollArr.push(window.scrollY);
            if (window.scrollY === 0) {
                // header.current?.classList.remove('collapse', 'hidden'); //expand Navbar
                SetCollapseStat(false);
            }
            if (scrollArr[scrollArr.length - 1] > scrollArr[scrollArr.length - 2]) {
                // header.current?.classList.add('hidden', 'collapse'); //hide navbar
                SetCollapseStat(true);
                setNavHideStat(true)


            } else if (scrollArr[scrollArr.length - 1] < scrollArr[scrollArr.length - 2]) {
                // header.current?.classList.remove('hidden'); //show Navbar
                setNavHideStat(false)
            }

        });
    }, [header])
    // jsx li elements to reuse
    const linkItems = links.map((item, index) => (
        <li key={index} className={
            activeLink === index ? "active" : ""
        }
            onClick={() => {
                setActiveLink(index);
                onSelected(item, index);
            }}>
            {item}
        </li>))

    return (
        <Fragment>
            <header ref={header} className={isCollapsed ? (isNavHide ? "hidden collapse" : "collapse") : " "}>
                <nav>
                    <div className="brand-container">
                        <img src={logo?.src} alt={logo?.altText} />
                        <h1 className="brand-name">{brand_name}</h1>
                    </div>
                    {isCollapsed && <div>
                        <Lottie title="Hide Navbar" onComplete={() => { setNavHideStat(true) }} onClick={() => { eyeOff.current?.stop(); eyeOff.current?.play(); }} className="eyeoff" id="eyeoff" lottieRef={eyeOff} animationData={EyeOffAnime} autoplay={false} loop={false} />
                    </div>}
                    <div className="menu-container">
                        {/*Mobile Menu trigger button  */}
                        <div className="humberg-btn" onClick={() => {
                            setmobileMenuVisibility(!mobileMenuVisibility);
                        }}>
                            {Array.from({ length: 3 }, (_, index) => (
                                <span
                                    className={mobileMenuVisibility ? "active" : ""}
                                    key={index}>

                                </span>
                            ))}
                        </div>

                        {/*Main menu for larger display */}
                        <ul className="expanded-menu">
                            {linkItems}

                        </ul>

                        <ul className={mobileMenuVisibility ? "mobile-menu" : "mobile-menu collapse"}>
                            {linkItems}
                        </ul>
                    </div>
                </nav>
            </header>
        </Fragment>

    )
}


export default Navbar;

