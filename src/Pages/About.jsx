import React from 'react';
import Img1 from '../assets/img/about-1.jpg';
import Img2 from '../assets/img/about-2.jpg';
import Img3 from '../assets/img/about-3.jpg';
import Img4 from '../assets/img/about-4.jpg';
import Img5 from '../assets/img/team-1.jpg';
import Img6 from '../assets/img/team-2.jpg';
import Img7 from '../assets/img/team-3.jpg';
import Img8 from '../assets/img/team-4.jpg';
import Img9 from '../assets/img/carousel-1.jpg';


function About() {
  return (
    <>
     <div>
      
      {/* Page Header Start */}
<div className="container-fluid page-header mb-5 p-0" style={{backgroundImage: `url(${Img9})`}}>
  <div className="container-fluid page-header-inner py-5">
    <div className="container text-center pb-5">
      <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center text-uppercase">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item text-white active" aria-current="page">About</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
{/* Page Header End */}


  {/* Booking Start */}
  <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
      <div className="bg-white shadow" style={{padding: 35}}>
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-3">
                <div className="date" id="date1" data-target-input="nearest">
                  <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                </div>
              </div>
              <div className="col-md-3">
                <div className="date" id="date2" data-target-input="nearest">
                  <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option selected>Adult</option>
                  <option value={1}>Adult 1</option>
                  <option value={2}>Adult 2</option>
                  <option value={3}>Adult 3</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option selected>Child</option>
                  <option value={1}>Child 1</option>
                  <option value={2}>Child 2</option>
                  <option value={3}>Child 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Booking End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
          <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Hotelier</span></h1>
          <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <div className="row g-3 pb-4">
            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-hotel fa-2x text-primary mb-2" />
                  <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                  <p className="mb-0">Rooms</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                  <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                  <p className="mb-0">Staffs</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="border rounded p-1">
                <div className="border rounded text-center p-4">
                  <i className="fa fa-users fa-2x text-primary mb-2" />
                  <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                  <p className="mb-0">Clients</p>
                </div>
              </div>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href>Explore More</a>
        </div>
        <div className="col-lg-6">
          <div className="row g-3">
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src={Img1} style={{marginTop: '25%'}} />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src={Img2} />
            </div>
            <div className="col-6 text-end">
              <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src={Img3} />
            </div>
            <div className="col-6 text-start">
              <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src={Img4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src={Img5} alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src={Img6} alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src={Img7} alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="rounded shadow overflow-hidden">
            <div className="position-relative">
              <img className="img-fluid" src={Img8} alt />
              <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="text-center p-4 mt-3">
              <h5 className="fw-bold mb-0">Full Name</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Newsletter Start */}
  <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="row justify-content-center">
      <div className="col-lg-10 border rounded p-1">
        <div className="border rounded text-center p-1">
          <div className="bg-white rounded text-center p-5">
            <h4 className="mb-4">Subscribe Our <span className="text-primary text-uppercase">Newsletter</span></h4>
            <div className="position-relative mx-auto" style={{maxWidth: 400}}>
              <input className="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
              <button type="button" className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter Start */}
  {/* Footer Start */}
  <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div className="container pb-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-4">
          <div className="bg-primary rounded p-4">
            <a href="index.html"><h1 className="text-white text-uppercase mb-3">Hotelier</h1></a>
            <p className="text-white mb-0">
              Download <a className="text-dark fw-medium" href="https://htmlcodex.com/hotel-html-template-pro">Hotelier – Premium Version</a>, build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
          <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />123 Street, New York, USA</p>
          <p className="mb-2"><i className="fa fa-phone-alt me-3" />+012 345 67890</p>
          <p className="mb-2"><i className="fa fa-envelope me-3" />info@example.com</p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-outline-light btn-social" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <div className="row gy-5 g-4">
            <div className="col-md-6">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">Company</h6>
              <a className="btn btn-link" href>About Us</a>
              <a className="btn btn-link" href>Contact Us</a>
              <a className="btn btn-link" href>Privacy Policy</a>
              <a className="btn btn-link" href>Terms &amp; Condition</a>
              <a className="btn btn-link" href>Support</a>
            </div>
            <div className="col-md-6">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">Services</h6>
              <a className="btn btn-link" href>Food &amp; Restaurant</a>
              <a className="btn btn-link" href>Spa &amp; Fitness</a>
              <a className="btn btn-link" href>Sports &amp; Gaming</a>
              <a className="btn btn-link" href>Event &amp; Party</a>
              <a className="btn btn-link" href>GYM &amp; Yoga</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            © <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved. 
            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
            Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-menu">
              <a href>Home</a>
              <a href>Cookies</a>
              <a href>Help</a>
              <a href>FQAs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
</div>

    </>
  )
}

export default About