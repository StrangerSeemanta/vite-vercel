import { Fragment, useEffect, useState } from "react";
import "./scss/Navbar.css"

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

    //using NavCollapseEffect
    useEffect(() => {
        const navbar = new NavCollapseEffect('header');
        navbar.init()
    })
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
            <header>
                <nav>
                    <div className="brand-container">
                        <img src={logo?.src} alt={logo?.altText} />
                        <h1 className="brand-name">{brand_name}</h1>
                    </div>
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
class NavCollapseEffect {
    private navbar: HTMLElement;

    constructor(navSelector: string) {
        this.navbar = document.querySelector(navSelector) as HTMLElement;
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.expand = this.expand.bind(this);
        this.init = this.init.bind(this);
    }

    show() {
        this.navbar.classList.remove('hidden');
    }

    hide() {
        this.navbar.classList.add('hidden', 'collapse');

    }

    expand() {
        this.navbar.classList.remove('collapse', 'hidden');
    }

    init() {
        const scrollArr: number[] = [];
        const nav = this;

        window.addEventListener('scroll', () => {
            scrollArr.push(window.scrollY);
            if (window.scrollY === 0) {
                this.expand();
            }
            if (scrollArr[scrollArr.length - 1] > scrollArr[scrollArr.length - 2]) {
                this.hide();
            } else if (scrollArr[scrollArr.length - 1] < scrollArr[scrollArr.length - 2]) {
                this.show();
            }

        });
    }
}

export default Navbar;

