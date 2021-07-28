import React from 'react';
import myselfImg from './pic.JPG'
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
                <div className="emptyness"/>
                <div className = "detailPage">
                    <div className="movieCard">
                        <img  className = "poster" alt = "Movie Poster" src={myselfImg} />
                        <div>
                        <p>Hi! My name is Máximo Fernández. I'm a Fullstack Developer from Buenos Aires, Argentina. As of 24th of July, 2021, I'm a Teaching Assistant at the Henry Bootcamp, and one month away from completing it.</p>
                        <p>If you are interested in knowing more about me, feel free to message me to my <a className = "aboutLinks" href = "https://www.linkedin.com/in/m%C3%A1ximo-fern%C3%A1ndez-arenas-540461210/">LinkedIn</a>, and check out my <a className = "aboutLinks" href = "https://personal-portoflio-68gtmhtt3-maxfer03.vercel.app/">Portfolio (WIP)</a> to see my other projects!</p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
    )
}

export default AboutMe