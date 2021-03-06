import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SocialBar from "../components/socialbar"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 container">
      <div className="row py-lg-5">
        <div className="col-md mx-auto"> 
          <h2>Hello, world!</h2>
            <div className="row justify-content-between">
              <div className="col-md-8">
                <p>
                  However you stumbled upon this page, welcome! This is my personal website. If you wish to know more about me, I encourage you to keep reading below and check out the tabs above. Hopefully this site will give you some insight into Matthew Barton the developer and maybe Matthew Barton the human as well.
                </p>
              </div>
              <div className="col-md mx-auto">
                <StaticImage
                  src="../images/mbarton.jpg"
                  // width={300}
                  formats={["AUTO", "WEBP"]}
                  alt="Portrait"
                  className="img-fluid"
                />
              </div>
            </div>
          <h2>About Me</h2>
            <p>
              I am a software engineer at <a className="text-reset" rel="noreferror noopener" href="https://www.coinbase.com">Coinbase</a> in New York City.  I am very excited to contribute to the crypto space and be a part of this large shift in how we store value. I studied Computer Science and Mathematics at <a className="text-reset" href="https://www.trinity.edu/">Trinity University</a> in San Antonio, Texas. I am originally from Cypress, Texas, just outside of Houston.
            </p>
            <p>
              I started my coding journey back in 2015 when I registered for Computer Programming 1 during my sophomore year at Cypress Woods High School (212, CDUB). There, I printed hello world, created Scratch games and started learning Python under some awesome teachers. After that, it has been a non-stop road of learning and delight. I have picked up many languages, platforms, and technologies along the way making each step more exciting than the last. Right now, my favorite language to use is Dart, though it's not very useful outside of <a className="text-reset" href="https://flutter.dev/">Flutter</a>.
            </p>
            <p>
              In the marginal free time afforded to me, I enjoy everything basketball: watching the NBA, running pick-up games, playing NBA2K. I also watch some football when I can. I am a huge fan of the San Antonio Spurs and LA Chargers. To fill my creative needs, I try to write poetry here and there. You can find some of my work in the tab above.
            </p>
          <h3>Ways to Reach Me</h3>
            <p>
              I'll share some professional and personal links below if you want to explore more about me. You can reach out to me via email which I keep at inbox zero.
            </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-6 col-md-8 mx-auto">
          <SocialBar></SocialBar>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
