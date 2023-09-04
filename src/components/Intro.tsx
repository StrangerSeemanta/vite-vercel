import React from 'react';
import Article from './Common/Article';
function Intro() {

    return (
        <section id='home' className='intro-section'>
            <div className="main">
                <div className='container flex-container'>
                    <Article
                        DivClassName='intro-container width-half'
                        articleHead={<><h1 data-text="Shuvo">Shuvo</h1><h1 data-text="Sarker"> Sarker</h1></>}
                    >
                        <p className='designation'>Front-end Developer & <span className='designation2'>UI/UX Designer</span></p>
                    </Article>

                    <div className="img-holder">
                        <img src="/public/ppp.jpg" alt="" />
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Intro;
