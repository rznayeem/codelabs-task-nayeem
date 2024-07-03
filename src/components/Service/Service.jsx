import Button from '../../Shared/Button';
import HeaderTItle from '../../Shared/HeaderTItle';
import team4 from '../../assets/media/team4.png';
import team3 from '../../assets/media/team3.png';
import team2 from '../../assets/media/team2.png';

const Service = () => {
  return (
    <div className="bg-[#FFFFF5] p-10 rounded-[32px] lg:mt-40">
      <div className="flex flex-col lg:flex-row items-center gap-[124px]">
        <div className="max-w-[428px]">
          <HeaderTItle text={'Service'}></HeaderTItle>
          <h1 className="text-4xl mt-4 font-semibold leading-[54px] mb-4">
            Empowering Health, Enriching Lives
          </h1>
          <p className="text-[#4D4C7B] mb-10">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <Button text={'Appointment'}></Button>
        </div>
        <div className="">
          <div className="relative">
            <img className="rounded-[30px]" src={team4} alt="" />
            <div className="absolute bg-[#02004399] rounded-[20px] lg:left-5 lg:bottom-5 bottom-0 max-w-[321px] p-[18px] z-10">
              <h3 className="text-white text-xl font-medium mb-2">
                Advanced Technology
              </h3>
              <div className="flex gap-[18px]">
                <p className="text-[#FFFFFFCC] text-[12px]">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
                <div className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <circle cx="24" cy="24" r="24" fill="#FFC637" />
                    <path
                      d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z"
                      fill="#FFFFF5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-7 mt-[60px]">
        <div className="relative">
          <img className="rounded-[30px]" src={team3} alt="" />
          <div className="absolute bg-[#02004399] rounded-[20px] lg:left-5 lg:bottom-5 bottom-0 max-w-[321px] p-[18px] z-10">
            <h3 className="text-white text-xl font-medium mb-2">
              Online Doctor Meet
            </h3>
            <div className="flex gap-[18px]">
              <p className="text-[#FFFFFFCC] text-[12px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which <br /> allow for greater precision
              </p>
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#FFC637" />
                  <path
                    d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z"
                    fill="#FFFFF5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="rounded-[30px]" src={team2} alt="" />
          <div className="absolute bg-[#02004399] rounded-[20px] lg:left-5 lg:bottom-5 bottom-0 max-w-[321px] p-[18px] z-10">
            <h3 className="text-white text-xl font-medium mb-2">
              Consultancy your health
            </h3>
            <div className="flex gap-[18px]">
              <p className="text-[#FFFFFFCC] text-[12px]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which <br /> allow for greater precision
              </p>
              <div className="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="24" fill="#FFC637" />
                  <path
                    d="M32.1421 16.8579C32.1421 16.3056 31.6944 15.8579 31.1421 15.8579L22.1421 15.8579C21.5899 15.8579 21.1421 16.3056 21.1421 16.8579C21.1421 17.4101 21.5899 17.8579 22.1421 17.8579L30.1421 17.8579L30.1421 25.8579C30.1421 26.4101 30.5899 26.8579 31.1421 26.8579C31.6944 26.8579 32.1421 26.4101 32.1421 25.8579L32.1421 16.8579ZM17.7071 31.7071L31.8492 17.565L30.435 16.1508L16.2929 30.2929L17.7071 31.7071Z"
                    fill="#FFFFF5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
