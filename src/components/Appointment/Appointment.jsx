import bannerBgLeft from '../../assets/frame1.png';
import bannerBgRight from '../../assets/frame2.png';
import left from '../../assets/left2.png';
import right from '../../assets/right2.png';
import appointmentImg from '../../assets/media/team5.png';
import Button from '../../Shared/Button';
import arrow from '../../assets/media/Arrow 2.png';
import logoLight from '../../assets/media/logo light.png';

const Appointment = () => {
  return (
    <div>
      <div className="relative lg:py-40 py-12">
        <div className="max-w-[1160px] mx-auto relative rounded-[32px] z-20 overflow-hidden">
          <img
            className="overflow-hidden h-96 lg:h-full"
            src={appointmentImg}
            alt=""
          />
          <div
            className="absolute h-full w-full top-0 z-10 overflow-hidden"
            style={{
              borderRadius: '32px',
              background:
                'linear-gradient(to right, #020043 0%, rgba(2, 0, 67, 0.30) 100%)',
            }}
          ></div>
          <div className="absolute top-[107px] left-[60px] z-20">
            <h1 className="lg:text-[40px] text-[24px] text-white font-semibold lg:leading-[60px]">
              Get Your <br /> First Appointment <br /> at 50% Off!
            </h1>
            <div className="flex items-center gap-[22px] pt-6">
              <Button text={'Appointment'}></Button>
              <button className="flex items-center gap-2 font-medium rounded-xl border py-[14px] px-7 border-white text-white">
                Learn More <img src={arrow} alt="" />
              </button>
            </div>
          </div>
          <div className="absolute z-20 top-[60px] right-[60px]">
            <img src={logoLight} alt="" />
          </div>
        </div>
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={bannerBgLeft}
            className="absolute hidden left-0 top-0 z-0"
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
    </div>
  );
};

export default Appointment;
