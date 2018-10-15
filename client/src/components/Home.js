import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <React.Fragment>
      <header className = "banner">
        <div className = 'col-12 titles'>
          <h1>You Vote</h1>
          <h4>We Create Awsome Charts for you</h4>
        </div>
        <div>
          <Link to="/login" className="btn waves-effect waves-light blue">Get Started ⟹</Link>
        </div>
      </header>
      <main>
        <section className='col-12'>
        <div className="row">
          <div className="col s12 m4 center">
            <div className="card white-grey ">
              <div className="card-content black-text">
                <i class="fas fa-gamepad fa-5x"></i>
                <span className="card-title">Easy To use</span>
                <p>We have provided i very simple interface, to help our users create their charts faster and easier. We are also always open to feedback and can answer any questions a user may have.</p>
              </div> 
            </div>
          </div>
          <div className="col s12 m4 center">
            <div className="card white-grey ">
              <div className="card-content black-text">
                <i class="fas fa-bolt fa-5x"></i>
                <span className="card-title">Fast!</span>
                <p>No delay, No payment, Fast and reliable. We did most of the heavy lifting, all you have to do is pick you chart and options, and BOOM!! you chart is ready.</p>
              </div> 
            </div>
          </div>
          <div className="col s12 m4 center">
            <div className="card white-grey ">
              <div className="card-content black-text">
                <i class="fas fa-share-alt fa-5x"></i>
                <span className="card-title">Sharing</span>
                <p>What is the use of a poll if you cant Share it with people?, That is why we provide our users with methods to share their polls on big platforms like Facebook and twitter.</p>
              </div> 
            </div>
          </div>
        </div>
        </section>
      </main>
      <footer className="page-footer blue lighten-1">
          <div className="container">
            <div className="row ">
              <div className="col l6 s12">
                <h5 className="white-text">YouVote</h5>
                <p className="grey-text text-lighten-4">
                  My name is Hassan Ben Haj Bouih, I am a self-thought fullstack developper,
                  and working on this personal project.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">More about me</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fas fa-file"></i> Portfolio</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-github"></i> Github</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!"><i class="fab fa-twitter"></i> Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Made By: HassanBHB</a>
            </div>
          </div>
        </footer>
    </React.Fragment>
    
  )
}

export default Home;
