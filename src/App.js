import React from 'react';
import hero1 from '../src/images/hero_1.jpg'
import property_1 from '../src/images/property_1.jpg'
import property_2 from '../src/images/property_2.jpg'
import property_3 from '../src/images/property_3.jpg'
import property_4 from '../src/images/property_4.jpg'
import property_sm_1 from '../src/images/property_1-sm.jpg'
import property_sm_2 from '../src/images/property_2-sm.jpg'
import property_sm_3 from '../src/images/property_3-sm.jpg'
import person_5 from '../src/images/person_5.jpg'
import person_6 from '../src/images/person_6.jpg'
import person_7 from '../src/images/person_7.jpg'
import person_8 from '../src/images/person_8.jpg'
import person_1 from '../src/images/person_1.jpg'
import person_2 from '../src/images/person_2.jpg'
import person_3 from '../src/images/person_3.jpg'
import person_4 from '../src/images/person_4.jpg'
// import person_3 from '../src/images/person_3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoMdArrowDown, IoMdHeart, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoIosHome, IoIosCash, IoMdHome, IoIosCard } from 'react-icons/io';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="site-wrapper">

    <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
   
    
    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-6 col-xl-2">
            <h1 className="mb-0 site-logo m-0 p-0"><a href="index.html" className="mb-0">Estate Eleven.</a></h1>
          </div>

          <div className="col-12 col-md-10 d-none d-xl-block">
            <nav className="site-navigation position-relative text-right" role="navigation">

              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li><a href="#home-section" className="nav-link">Home</a></li>
                <li><a href="#properties-section" className="nav-link">Properties</a></li>
                <li><a href="#agents-section" className="nav-link">Agents</a></li>
                <li><a href="#about-section" className="nav-link">About</a></li>
                <li><a href="#news-section" className="nav-link">News</a></li>
                <li><a href="#contact-section" className="nav-link">Contact</a></li>
              </ul>
            </nav>
          </div>


          <div className="col-6 d-inline-block d-xl-none ml-md-0 py-3"><a href className="site-menu-toggle js-menu-toggle text-black float-right"><span className="icon-menu h3"></span></a></div>

        </div>
      </div>
      
    </header>

    <div className="site-blocks-cover overlay" style={{backgroundImage: `url(${hero1})`}} data-aos="fade" id="home-section">


      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 mt-lg-5 text-center">
            <h1>Buy and sell real estate properties</h1>
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            
          </div>
        </div>
      </div>

      <a href="#howitworks-section" className="smoothscroll arrow-down"><span className="icon-arrow_downward"><IoMdArrowDown/></span></a>
    </div>  

    <div className="py-5 bg-light site-section how-it-works" id="howitworks-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <h2 className="section-title mb-3">How It Works</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center">
            <div className="pr-5">
              <span className="custom-icon flaticon-house text-primary"><IoIosHome color="f69214"/></span>
              <h3 className="text-dark">Find Property.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="pr-5">
              <span className="custom-icon flaticon-coin text-primary"><IoIosCash color="f69214"/></span>
              <h3 className="text-dark">Buy Property.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="pr-5">
              <span className="custom-icon flaticon-home text-primary"><IoIosCard color="f69214" /></span>
              <h3 className="text-dark">Make Investment.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>

    <div className="site-section" id="properties-section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-7 text-left">
            <h2 className="section-title mb-3">Properties</h2>
          </div>
        </div>



        <Carousel showStatus={false} showIndicators={false} showThumbs={true} infiniteLoop={true} autoPlay={true} useKeyboardArrows={true}> 
                <div>
                    <img src={property_sm_1} alt="person1" class="img-fluid" />
                    <h1 className="legend">Hello</h1>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={property_sm_2} alt="person3" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={property_sm_3} alt="person5" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>    
            
                
          {/* <div className="property">
            <a href="property-single.html">
              <img src={property_1} alt="Propert 1" className="img-fluid"/>
            </a>
            <div className="prop-details p-3">
              <div><strong className="price">$3,400,000</strong></div>
              <div className="mb-2 d-flex justify-content-between">
                <span className="w border-r">6 beds</span> 
                <span className="w border-r">4 baths</span>
                <span className="w">4,250 sqft.</span>
              </div>
              <div>480 12th, Unit 14, San Francisco, CA</div>
            </div>
          </div>

          <div className="property">
            <a href="property-single.html">
              <img src={property_2} alt="Propert 2" className="img-fluid"/>
            </a>
            <div className="prop-details p-3">
              <div><strong className="price">$3,400,000</strong></div>
              <div className="mb-2 d-flex justify-content-between">
                <span className="w border-r">6 beds</span> 
                <span className="w border-r">4 baths</span>
                <span className="w">4,250 sqft.</span>
              </div>
              <div>480 12th, Unit 14, San Francisco, CA</div>
            </div>
          </div>

          <div className="property">
            <a href="property-single.html">
              <img src={property_3} alt="Property 3" className="img-fluid"/>
            </a>
            <div className="prop-details p-3">
              <div><strong className="price">$3,400,000</strong></div>
              <div className="mb-2 d-flex justify-content-between">
                <span className="w border-r">6 beds</span> 
                <span className="w border-r">4 baths</span>
                <span className="w">4,250 sqft.</span>
              </div>
              <div>480 12th, Unit 14, San Francisco, CA</div>
            </div>
          </div>

          <div className="property">
            <a href="property-single.html">
              <img src={property_4} alt="Propert 4" className="img-fluid"/>
            </a>
            <div className="prop-details p-3">
              <div><strong className="price">$3,400,000</strong></div>
              <div className="mb-2 d-flex justify-content-between">
                <span className="w border-r">6 beds</span> 
                <span className="w border-r">4 baths</span>
                <span className="w">4,250 sqft.</span>
              </div>
              <div>480 12th, Unit 14, San Francisco, CA</div>
            </div>
          </div> */}
                       

            <div className="row justify-content-center">
          <div className="col-md-4">
            <a href="listings.html" className="btn btn-primary btn-block">View All Property Listings</a>
          </div>
        </div>

        </div>
        </div>

            <section class="site-section border-bottom" id="agents-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-7 text-left">
            <h2 class="section-title mb-3">Agents</h2>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
          </div>
        </div>
        <div class="row">
          

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="team-member">
              <figure>
                <ul class="social">
                  <li><a href="www.facebook.com"><span class="icon-facebook"><IoLogoFacebook/></span></a></li>
                  <li><a href="www.twitter.com"><span class="icon-twitter"><IoLogoTwitter/></span></a></li>
                  <li><a href="www.linkedin.com"><span class="icon-linkedin"><IoLogoLinkedin/></span></a></li>
                  <li><a href="www.instagram.com"><span class="icon-instagram"><IoLogoInstagram/></span></a></li>
                </ul>
                <img src={person_5} alt="person 5" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3 class="mb-2">Kaiara Spencer</h3>
                <span class="position">Real Estate Agent</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="team-member">
              <figure>
                <ul class="social">
                <li><a href="www.facebook.com"><span class="icon-facebook"><IoLogoFacebook/></span></a></li>
                  <li><a href="www.twitter.com"><span class="icon-twitter"><IoLogoTwitter/></span></a></li>
                  <li><a href="www.linkedin.com"><span class="icon-linkedin"><IoLogoLinkedin/></span></a></li>
                  <li><a href="www.instagram.com"><span class="icon-instagram"><IoLogoInstagram/></span></a></li>
                </ul>
                <img src={person_6} alt="Person6" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3 class="mb-2">Dave Simpson</h3>
                <span class="position">Real Estate Agent</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="team-member">
              <figure>
                <ul class="social">
                <li><a href="www.facebook.com"><span class="icon-facebook"><IoLogoFacebook/></span></a></li>
                  <li><a href="www.twitter.com"><span class="icon-twitter"><IoLogoTwitter/></span></a></li>
                  <li><a href="www.linkedin.com"><span class="icon-linkedin"><IoLogoLinkedin/></span></a></li>
                  <li><a href="www.instagram.com"><span class="icon-instagram"><IoLogoInstagram/></span></a></li>
                </ul>
                <img src={person_7} alt="Person7" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3 class="mb-2">Ben Thompson</h3>
                <span class="position">Real Estate Agent</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="team-member">
              <figure>
                <ul class="social">
                <li><a href="www.facebook.com"><span class="icon-facebook"><IoLogoFacebook/></span></a></li>
                  <li><a href="www.twitter.com"><span class="icon-twitter"><IoLogoTwitter/></span></a></li>
                  <li><a href="www.linkedin.com"><span class="icon-linkedin"><IoLogoLinkedin/></span></a></li>
                  <li><a href="www.instagram.com"><span class="icon-instagram"><IoLogoInstagram/></span></a></li>
                </ul>
                <img src={person_8} alt="Person8" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3 class="mb-2">Kyla Stewart</h3>
                <span class="position">Real Estate Agent</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="team-member">
              <figure>
                <ul class="social">
                <li><a href="www.facebook.com"><span class="icon-facebook"><IoLogoFacebook/></span></a></li>
                  <li><a href="www.twitter.com"><span class="icon-twitter"><IoLogoTwitter/></span></a></li>
                  <li><a href="www.linkedin.com"><span class="icon-linkedin"><IoLogoLinkedin/></span></a></li>
                  <li><a href="www.instagram.com"><span class="icon-instagram"><IoLogoInstagram/></span></a></li>
                </ul>
                <img src={person_1} alt="Person" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3 class="mb-2">Kaiara Spencer</h3>
                <span class="position">Real Estate Agent</span>
              </div>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 mb-4">
            <div class="team-member">
              <figure>
                <ul class="social">
                <li><a href="www.facebook.com"><span class="icon-facebook"><IoLogoFacebook/></span></a></li>
                  <li><a href="www.twitter.com"><span class="icon-twitter"><IoLogoTwitter/></span></a></li>
                  <li><a href="www.linkedin.com"><span class="icon-linkedin"><IoLogoLinkedin/></span></a></li>
                  <li><a href="www.instagram.com"><span class="icon-instagram"><IoLogoInstagram/></span></a></li>
                </ul>
                <img src={person_2} alt="Person" class="img-fluid"/>
              </figure>
              <div class="p-3">
                <h3 class="mb-2">Dave Simpson</h3>
                <span class="position">Real Estate Agent</span>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section> 

    <section class="site-section" id="about-section">
      <div class="container">
        
        <div class="row">
          <div class="col-lg-6">

            <div class="owl-carousel slide-one-item-alt">
              <img src={property_3} alt="property" class="img-fluid"/>
              <img src={property_4} alt="property" class="img-fluid"/>
              <img src={property_3} alt="property" class="img-fluid"/>
              <img src={property_4} alt="property" class="img-fluid"/>
            </div>
            <div class="custom-direction">
              <a href="#" class="custom-prev">Prev</a><a href="#" class="custom-next">Next</a>
            </div>

          </div>
          <div class="col-lg-5 ml-auto">
            
            <h2 class="section-title mb-3">We Are The Best RealEstate Company</h2>
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit  Quo suscipit omnis iste velit maxime.</p>

                <ul class="list-unstyled ul-check success">
                  <li>Placeat maxime animi minus</li>
                  <li>Dolore qui placeat maxime</li>
                  <li>Consectetur adipisicing</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Placeat molestias animi</li>
                </ul>

                <p><a href="#" class="btn btn-primary mr-2 mb-2">Learn More</a></p>
            
          </div>
        </div>
      </div>
    </section>

    

    <section class="site-section border-bottom bg-light" id="services-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">Services</h2>
          </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-house"></span></div>
              <div>
                <h3>Search Property</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-coin"></span></div>
              <div>
                <h3>Buy Property</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-home"></span></div>
              <div>
                <h3>Invest a Home</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>


          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-flat"></span></div>
              <div>
                <h3>Post Properties</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="400">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-location"></span></div>
              <div>
                <h3>Property Locator</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="500">
            <div class="unit-4 d-flex">
              <div class="unit-4-icon mr-4"><span class="text-primary flaticon-mobile-phone"></span></div>
              <div>
                <h3>Stated Apps</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="site-section testimonial-wrap" id="testimonials-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">People Says...</h2>
          </div>
        </div>
      </div>
      <div class="slide-one-item home-slider owl-carousel">
          <div>
            <div class="testimonial">
              
              <blockquote class="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>

              <figure class="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person_3} alt="Person 3" class="w-50 img-fluid mb-3"/></div>
                <p>John Smith</p>
              </figure>
            </div>
          </div>
          <div>
            <div class="testimonial">

              <blockquote class="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <figure class="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person_2} alt="Person2" class="w-50 img-fluid mb-3"/></div>
                <p>Christine Aguilar</p>
              </figure>
              
            </div>
          </div>

          <div>
            <div class="testimonial">

              <blockquote class="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <figure class="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person_4} alt="Person4" class="w-50 img-fluid mb-3"/></div>
                <p>Robert Spears</p>
              </figure>

              
            </div>
          </div>

          <div>
            <div class="testimonial">

              <blockquote class="mb-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              <figure class="mb-4 d-flex align-items-center justify-content-center">
                <div><img src={person_5} alt="Person5" class="w-50 img-fluid mb-3"/></div>
                <p>Bruce Rogers</p>
              </figure>

            </div>
          </div>

        </div>
    </section>

    
    <section class="site-section" id="news-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title mb-3">News &amp; Events</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div class="h-entry">
              <a href="single.html"><img src={property_1} alt="Property1" class="img-fluid"/></a>
              <h2 class="font-size-regular"><a href="single.html" class="text-dark">20+ Real Properties for Realtors</a></h2>
              <div class="meta mb-4">Ham Brook <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="single.html">News</a></div>
            </div> 
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div class="h-entry">
              <a href="single.html"><img src={property_2} alt="Property" class="img-fluid"/></a>
              <h2 class="font-size-regular"><a href="single.html" class="text-dark">20+ Real Properties for Realtors</a></h2>
              <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="single.html">News</a></div>
              
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4 mb-lg-4">
            <div class="h-entry">
              <a href="single.html"><img src={property_3} alt="Property" class="img-fluid"/></a>
              <h2 class="font-size-regular"><a href="single.html" class="text-dark">20+ Real Properties for Realtors</a></h2>
              <div class="meta mb-4">James Phelps <span class="mx-2">&bullet;</span> Jan 18, 2019<span class="mx-2">&bullet;</span> <a href="single.html">News</a></div>
            </div> 
          </div>
          
        </div>
      </div>
    </section>

   


    <section class="site-section bg-light bg-image" id="contact-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            {/* <!-- <h3 class="section-sub-title">Get</h3> --> */}
            <h2 class="section-title mb-3">Contact Us</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 mb-5">

            

            <form action="#" class="p-5 bg-white">
              
              <h2 class="h4 text-black mb-5">Contact Form</h2> 

              <div class="row form-group">
                <div class="col-md-6 mb-3 mb-md-0">
                  <label class="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" class="form-control"/>
                </div>
                <div class="col-md-6">
                  <label class="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="email">Email</label> 
                  <input type="email" id="email" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                
                <div class="col-md-12">
                  <label class="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" class="form-control"/>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" class="form-control" placeholder="Write your notes or questions here..."></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input type="submit" value="Send Message" class="btn btn-primary btn-md text-white"/>
                </div>
              </div>

  
            </form>
          </div>
          <div class="col-md-5">
            
            <div class="p-4 mb-3 bg-white">
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="#">+1 232 3235 324</a></p>

              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="#">youremail@domain.com</a></p>

            </div>
            
          </div>
        </div>
      </div>
    </section>

    
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-5">
                <h2 class="footer-heading mb-4">About Stated</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div class="col-md-3 ml-auto">
                <h2 class="footer-heading mb-4">Quick Links</h2>
                <ul class="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-4">
              <h2 class="footer-heading mb-4">Subscribe Newsletter</h2>
            <form action="#" method="post" class="footer-subscribe">
              <div class="input-group mb-3">
                <input type="text" class="form-control border-secondary text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                  <button class="btn btn-primary text-black" type="button" id="button-addon2">Send</button>
                </div>
              </div>
            </form>  
            </div>
            
            <div class="">
              <h2 class="footer-heading mb-4">Follow Us</h2>
                <a href="#" class="pl-0 pr-3"><span class="icon-facebook"><IoLogoFacebook/></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-twitter"><IoLogoTwitter/></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"><IoLogoInstagram/></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"><IoLogoLinkedin/></span></a>
            </div>


          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
           
            </div>
          <p className="justify-center">
    Estate Eleven | Copyrights © - 2019 All Rights Reserved. With <IoMdHeart/> from Ovais Butt
</p>
          </div>
        </div>
      </div>
    </footer>

    </div>
  );
}

export default App;
