import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Richard Herold"
                    meta={[
                        { name: 'description', content: 'Richard Herold Creates Internet Things' },
                        { name: 'keywords', content: 'Richard, Herold' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Resume</h3>
                                <p>Money can be exchanged for goods and services</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Projects</h3>
                                <p>I sometimes work outside my job</p>
                            </header>
                            <Link to="/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                              <h3>Photography</h3>
                              <p>I sometimes take pictures</p>
                            </header>
                            <Link to="/photography" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Recipes</h3>
                                <p>I cook a lot</p>
                            </header>
                            <Link to="/recipes" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                              <h3>Tinkering</h3>
                              <p>I make things out of other things</p>
                            </header>
                            <Link to="/tinker" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Opinions</h3>
                                <p>I have opinions please change them</p>
                            </header>
                            <Link to="/opinions" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Does this all seem out of date?</h2>
                            </header>
                            <p>You are right, it probably is. </p>
                            <p>The best way to find out what is going on in my life is to talk to me. So use the form below and I will hopefully respond...</p>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
