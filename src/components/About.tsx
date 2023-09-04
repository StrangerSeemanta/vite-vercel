import React, { Fragment, useEffect, useState } from 'react'
import Codepen from './Codepen'
import Article from './Common/Article';
import Card from './Common/Card';

function About() {
    const [isWriteAbout, setWriteAbout] = useState(false);
    const [activeCard, setActiveCard] = useState(-1);


    const cards = [
        <Card
            className='eduCard'
            heading='My Education'
            image='/src/assets/eduCard.jpg'
            bottom_link={{ link: "#", children: "Full Education Chart" }}
            aos={{ data: "slide-right", easing: "ease-out-cubic", duration: "1000" }}
        >

            I have Compeleted Higher Secondary On Science From A College "BN Khan Degree College" in Bangladesh. And Completed 1 years Web Developing Course in  UY Lab. After That I dropped Academical Learning And Choosed Self-Learning Path To Follow My Passion.
        </Card>,
        <Card
            className='workCard'
            heading='Work experiences'
            image='/src/assets/workExp.jpg'
            bottom_link={{ link: "#", children: "In Details" }}
            aos={{ data: "slide-right", easing: "ease-out-cubic", duration: "2000", delay: "500" }}
        >
            My working experices are too simple and straightforward. I have worked on a digital it firm "Bangladesh IT Gen" for 2 years as a front-end web developer and UI/UX designer. The learning curve during my job was so high. I learnt how to manage team work and contribute knowledge. The working period was 2021~2023. Now I want move and explore more oppertunities from inside and outside of my country.
        </Card>,
        <Card
            className='certificateCard'
            heading='Certifications'
            image='/src/assets/certificate.jpg'
            aos={{ data: "slide-right", easing: "ease-out-cubic", duration: "2000", delay: "1000" }}
        >
            I have received two major certificate from two different IT Academy In Bangladesh. First one as "Website and Wordpress Developer" from UY Lab Orgranization. And other was on advanced JavaScript from Amader Academy
        </Card>

    ]

    const [updatedCards, setUpdatedCards] = useState(cards);

    const handleCardClick = (index: number) => {
        const newCards = [...updatedCards]
        newCards[1] = updatedCards[index];
        newCards[index] = updatedCards[1];
        setUpdatedCards(newCards);

    }
    return (
        <Fragment>
            <section id='about' className='about'  >
                <div className="container" data-aos='zoom-out-down'
                    onMouseEnter={() => {
                        setWriteAbout(true)
                    }}>
                    <Article DivClassName='aboutHeading'
                        articleHead={
                            <><h1 data-text="WHO AM I?">WHO AM I?</h1></>
                        }
                    />
                    <Codepen animate={isWriteAbout}>
                        /~ Hello! I'm Shuvo Sarker, a dedicated front-end developer with a passion for creating captivating user experiences.
                        With a solid grasp of HTML, CSS, JavaScript, React JS, ScrollAnime, GSAP, AOS, Bootstrap, Tailwind CSS, PHP, I specialize in translating intricate ideas into elegant and functional websites.
                        My journey in web development began with a curiosity to build and a drive to learn. I stay current with the latest technologies and design trends, ensuring my work is modern, efficient, and impactful.
                        When I am not coding, you'll find me experimenting with new UI/UX concepts, collaborating with designers and developers, or contributing to open-source projects.
                        I firmly believe that combining great design with seamless functionality can make the web a better place.
                        Feel free to explore my portfolio to discover some of my recent projects. If you're seeking a committed front-end developer who's dedicated to crafting exceptional web experiences, I'd be thrilled to connect!
                        let's collaborate to transform your ideas into remarkable digital solutions......
                        ~ Feel Free To Share Thoughts With Me~";
                    </Codepen>

                </div>

                <div className="container flex-container card-container" >
                    {updatedCards.map((item, index) => (
                        <div
                            key={index}
                            className={activeCard === index ? "active card-wrapper" : "card-wrapper"}
                            onClick={() => { index === activeCard ? setActiveCard(-1) : setActiveCard(index) }}
                        >
                            {item}
                        </div>
                    ))}
                </div>

            </section>
        </Fragment>
    )

}


export default About;