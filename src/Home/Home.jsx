import Nav from '../components/Nav/Nav';
import bannerBgLeft from '../assets/frame1.png';
import bannerBgRight from '../assets/frame2.png';
import Banner from '../components/Banner/Banner';
import left from '../assets/left.png';
import right from '../assets/right.png';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import Service from '../components/Service/Service';
import Testimonial from '../components/Testimonial/Testimonial';
import Faq from '../components/Faq/Faq';
import Appointment from '../components/Appointment/Appointment';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="bg-[#FBFBFB] text-[#020043] font-inter overflow-hidden">
      <div className="relative">
        <div className="relative z-20">
          <Nav></Nav>
        </div>
        <div className="relative z-20">
          <Banner></Banner>
        </div>

        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={bannerBgLeft}
            className="absolute left-0 top-0 z-0"
            alt=""
          />
          <img
            src={bannerBgRight}
            className="absolute right-0 top-0 z-0"
            alt=""
          />
        </div>

        <div className="absolute left-0 top-0">
          {' '}
          <img src={left} alt="" />{' '}
        </div>
        <div className="absolute right-0 top-0">
          {' '}
          <img src={right} alt="" />{' '}
        </div>
      </div>
      <div className="max-w-[1160px] mx-auto">
        <WhoWeAre></WhoWeAre>
        <Service></Service>
        <Testimonial></Testimonial>
        <Faq></Faq>
      </div>
      <Appointment></Appointment>
      <Footer></Footer>
    </div>
  );
};

export default Home;
