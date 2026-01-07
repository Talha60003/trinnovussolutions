import React from 'react'
import portfolioImage1 from './../../assets/images/portfolio/website/p1.jpg';
import portfolioImage2 from './../../assets/images/p2.jpg';
import portfolioImage3 from './../../assets/images/p6.jpg';
import portfolioImage4 from './../../assets/images/p4.jpg';
import portfolioImage5 from './../../assets/images/p5.jpg';
import portfolioImage6 from './../../assets/images/p6.jpg';
import portfolioImage7 from './../../assets/images/p7.jpg';
const Portfolio = () => {
  return (
    <section className='sec sec-portfolio'>
      <div className='container'>
        <div className='sec-head'>
          <label className='sec-annot'>
            Our Portfolio
          </label>
          <h1>Crafting Digital <span>Excellence</span> – Our Featured Works</h1>
          <p>
            Explore our collection of successful projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className='portfolio-grid'>
          <div className='portfolio-card'>
            <div className='portfolio-card-overlay'>
              <div className='portfolio-card-content'>
                <h3>Web Development</h3>
                <p>Modern responsive website</p>
              </div>
            </div>
            <img src={portfolioImage7} alt='Portfolio Project' />
          </div>
          <div className='portfolio-card'>
            <div className='portfolio-card-overlay'>
              <div className='portfolio-card-content'>
                <h3>E-Commerce Solution</h3>
                <p>Full-featured online store</p>
              </div>
            </div>
            <img src={portfolioImage2} alt='Portfolio Project' />
          </div>
          <div className='portfolio-card'>
            <div className='portfolio-card-overlay'>
              <div className='portfolio-card-content'>
                <h3>Mobile App</h3>
                <p>iOS & Android application</p>
              </div>
            </div>
            <img src={portfolioImage6} alt='Portfolio Project' />
          </div>
          <div className='portfolio-card'>
            <div className='portfolio-card-overlay'>
              <div className='portfolio-card-content'>
                <h3>Brand Identity</h3>
                <p>Logo & brand design</p>
              </div>
            </div>
            <img src={portfolioImage2} alt='Portfolio Project' />
          </div>
          <div className='portfolio-card'>
            <div className='portfolio-card-overlay'>
              <div className='portfolio-card-content'>
                <h3>AI Solution</h3>
                <p>Machine learning platform</p>
              </div>
            </div>
            <img src={portfolioImage3} alt='Portfolio Project' />
          </div>
          <div className='portfolio-card'>
            <div className='portfolio-card-overlay'>
              <div className='portfolio-card-content'>
                <h3>Enterprise System</h3>
                <p>Custom ERP solution</p>
              </div>
            </div>
            <img src={portfolioImage5} alt='Portfolio Project' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio