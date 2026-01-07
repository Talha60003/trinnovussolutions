import React, { useState, useEffect } from 'react'
import { MdDesignServices, MdWeb, MdAnimation } from 'react-icons/md'
import { FaWordpress, FaShopify, FaChartLine, FaBrain, FaRobot, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { SiGooglesearchconsole } from 'react-icons/si'
import { BsDatabaseGear, BsEye } from 'react-icons/bs'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { AiOutlineApi } from 'react-icons/ai'

const ServiceCard = ({ icon, title, desc, isAi }) => (
  <div className={`service-card ${isAi ? 'ai-card' : ''}`}>
    <div className='service-icon'>
      {icon}
    </div>
    <h3>{title}</h3>
    <p>
      {desc}
    </p>
  </div>
)

const Carousel = ({ items, isAi }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // CLONE STRATEGY: 
  // We need to show items in a loop.
  // [A, B, C, D, E, F]
  // Append first 'visibleItems' to end: [A, B, C, D, E, F, A, B, C, D]
  // This allows us to slide from F -> A (clone) seamlessly.
  const extendedItems = [...items, ...items.slice(0, visibleItems)];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) setVisibleItems(1);
      else if (window.innerWidth <= 992) setVisibleItems(2);
      else if (window.innerWidth <= 1200) setVisibleItems(3);
      else setVisibleItems(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < items.length) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    } else {
      // Wrap around backward logic requires prepending clones too,
      // For now, let's just stick to forward loop 360 as requested primarily.
      // If we want FULL bidirectional infinite, we need clones at START too.
      // Let's implement simple hard reset for now if needed, or disable prev at 0.
      // Given "rotate 360", forward flow is most critical.
    }
  };

  // Handle the "Snap Back" when we hit the clones
  useEffect(() => {
    if (currentIndex === items.length) {
      // We have slid to the start of the CLONES (which look like start of list)
      // Wait for transition to finish, then snap back to real index 0 without transition
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Must match CSS duration
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, items.length]);

  // Re-enable transition after snap back (when index is 0 and transition is off)
  useEffect(() => {
    if (currentIndex === 0 && !isTransitioning) {
      // Small delay to ensure DOM updated with no-transition class before re-enabling
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [currentIndex, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  return (
    <div className='services-carousel-wrapper'>
      {/* 
          Disabled prev button at start because we only implemented 
          forward infinite loop (clones at end). 
          To do backward, we'd need clones at start [-4...-1] too. 
      */}
      <button
        className='service-nav-btn service-nav-prev'
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        <FaChevronLeft />
      </button>

      <div className='services-carousel-viewport'>
        <div
          className='services-carousel-track'
          style={{
            // The track width needs to hold all extended items.
            // If visibleItems = 4, and total extended = 10.
            // Viewport shows 4 items (100% width).
            // So 1 item = 100% / 4 = 25% of viewport.
            // Total track width relative to viewport = (10 * 25)% = 250%.
            width: `${(extendedItems.length / visibleItems) * 100}%`,

            // We move by 1 item width at a time.
            // 1 item width relative to TRACK = 100% / extendedItems.length.
            transform: `translateX(-${currentIndex * (100 / extendedItems.length)}%)`,

            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {extendedItems.map((item, index) => (
            <div
              key={index}
              className='services-carousel-item'
              style={{
                // Width of item relative to TRACK.
                width: `${100 / extendedItems.length}%`,

                // Force flex basis to ensure consistent sizing logic
                flex: `0 0 ${100 / extendedItems.length}%`,
                maxWidth: `${100 / extendedItems.length}%`
              }}
            >
              <ServiceCard {...item} isAi={isAi} />
            </div>
          ))}
        </div>
      </div>

      <button
        className='service-nav-btn service-nav-next'
        onClick={nextSlide}
      // Never disabled, moves to infinity (clones)
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <MdDesignServices />,
      title: "Logo Design",
      desc: "Create memorable brand identities with professional logo designs that capture your essence and stand out in the market."
    },
    {
      icon: <MdWeb />,
      title: "Web Design & Development",
      desc: "Build stunning, responsive websites that combine beautiful design with powerful functionality and optimal user experience."
    },
    {
      icon: <FaChartLine />,
      title: "Marketing",
      desc: "Drive growth with strategic digital marketing campaigns that reach your target audience and deliver measurable results."
    },
    {
      icon: <SiGooglesearchconsole />,
      title: "SEO",
      desc: "Boost your online visibility and rankings with expert SEO strategies that drive organic traffic and improve search performance."
    },
    {
      icon: <FaWordpress />,
      title: "WordPress & Shopify",
      desc: "Custom WordPress sites and Shopify stores tailored to your needs, with seamless functionality and beautiful design."
    },
    {
      icon: <MdAnimation />,
      title: "Animation",
      desc: "Bring your brand to life with engaging animations and motion graphics that captivate audiences and tell your story."
    },
    {
      icon: <BsDatabaseGear />,
      title: "ERP/CRM/CMS/POS",
      desc: "Streamline operations with custom enterprise solutions including ERP, CRM, CMS, and POS systems designed for your business."
    }
  ];

  const aiServices = [
    {
      icon: <FaBrain />,
      title: "RAG",
      desc: "Build intelligent systems that combine information retrieval with generative AI for accurate, context-aware responses and insights."
    },
    {
      icon: <GiArtificialIntelligence />,
      title: "Generative AI",
      desc: "Create content, automate processes, and unlock creativity with advanced generative AI models tailored to your specific needs."
    },
    {
      icon: <BsEye />,
      title: "Object Detection",
      desc: "Implement advanced computer vision solutions for real-time object recognition, tracking, and analysis in images and videos."
    },
    {
      icon: <AiOutlineApi />,
      title: "NLP",
      desc: "Extract meaning from text, analyze sentiment, and build intelligent language understanding systems for your applications."
    },
    {
      icon: <FaRobot />,
      title: "Machine Learning",
      desc: "Develop custom ML models and algorithms that learn from data to make predictions, automate decisions, and drive innovation."
    }
  ];

  return (
    <section className='sec sec-services'>
      <div className='container'>
        <div className='sec-head'>
          <label className='sec-annot'>
            Our Services
          </label>
          <h1>Comprehensive <span>Digital Solutions</span></h1>
          <p>
            We deliver excellence across all digital domains to transform your business.
          </p>
        </div>

        <Carousel items={services} isAi={false} />

      </div>
      <div className='ai-services-section'>
        <div className='container'>
          <div className='sec-head sec-head-ai'>
            <label className='sec-annot'>
              AI Services
            </label>
            <h1>Next-Generation <span>AI Solutions</span></h1>
            <p>
              Harness the power of artificial intelligence to transform your business.
            </p>
          </div>

          <Carousel items={aiServices} isAi={true} />
        </div>
      </div>
    </section>
  )
}

export default Services