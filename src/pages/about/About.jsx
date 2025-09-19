import React from 'react'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import HeadLines from '../../components/headlines/HeadLines'

const About = () => {
  return (
    <main className="about">
        <BreadCrumbs page={"About"}/>

        <HeadLines title={"About Us Section"} subtitle={"about us"} />
        
        <div className="about--content">
          <div className="about--image">
            <img src="/assets/Images/about.jpg" alt="about" />
          </div>
          <div className="about--text">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores laboriosam harum expedita! Consectetur, qui sit at recusandae maiores et tempora dolorum inventore consequatur
              voluptatum commodi! Deleniti deserunt, facilis maxime omnis quisquam amet? Omnis adipisci, reiciendis distinctio maxime, voluptas fugiat eligendi consectetur commodi suscipit ducimus
              animi odit? Voluptatem, perspiciatis deserunt.
            </p>
          </div>
        </div>
        <div className="about--content">
          <div className="about--image">
            <img src="/assets/Images/about.jpg" alt="about" />
          </div>
          <div className="about--text">
            <h3 style={{textAlign:"left"}}>Lorem ipsum dolor sit.</h3>
            <p style={{textAlign:"left"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolores laboriosam harum expedita! Consectetur, qui sit at recusandae maiores et tempora dolorum inventore consequatur
              voluptatum commodi! Deleniti deserunt, facilis maxime omnis quisquam amet? Omnis adipisci, reiciendis distinctio maxime, voluptas fugiat eligendi consectetur commodi suscipit ducimus
              animi odit? Voluptatem, perspiciatis deserunt.
            </p>
          </div>
        </div>
    </main>
  )
}

export default About