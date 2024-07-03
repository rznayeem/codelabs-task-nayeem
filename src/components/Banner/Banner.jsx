import bannerImg from '../../assets/media/banner.png';
import group1 from '../../assets/media/group1.png';
import group2 from '../../assets/media/group2.png';
import group4 from '../../assets/media/group4.png';
import group5 from '../../assets/media/group5.png';

const Banner = () => {
  return (
    <div className="mb-4">
      <div>
        <div className="max-w-[1160px] mt-4  mx-auto relative">
          <img src={bannerImg} alt="" />
          <div
            className="absolute h-full w-full top-0 z-10"
            style={{
              borderRadius: '48px',
              background:
                'linear-gradient(179deg, rgba(0, 193, 157, 0.00) -25.42%, rgba(2, 0, 67, 0.47) 107.11%)',
            }}
          ></div>
        </div>
      </div>
      <div className="max-w-[1160px] mx-auto">
        <h1 className="text-5xl font-semibold text-center leading-[56px] mt-7">
          Comprehensive Care <br /> for Every Patient
        </h1>
        <div className="grid grid-cols-5 gap-5 mt-11">
          <div
            className="p-5 -mt-[122px]  h-[312px]"
            style={{
              borderRadius: '24px',
              border: '0.5px solid rgba(2, 0, 67, 0.20)',
              background: '#FBFBFB',
            }}
          >
            <h1 className="text-[40px] font-semibold">90%</h1>
            <p>Patient satisfaction rate, reflecting our commitment.</p>
            <div className="flex justify-center">
              <img src={group1} alt="" />
            </div>
          </div>
          <div
            className="bg-[#FBFBFB] p-5 h-[190px]"
            style={{
              borderRadius: '24px',
              border: '0.5px solid rgba(2, 0, 67, 0.20)',
              background: '#FFFFF5',
            }}
          >
            <h1 className="text-[40px] font-semibold">500+</h1>
            <div className="flex">
              <p className="text-nowrap">
                Board-certified <br /> doctors
              </p>

              <img className="mt-5" src={group2} alt="" />
            </div>
          </div>
          <div
            className="bg-[#FBFBFB] p-5 h-[162px] self-end"
            style={{
              borderRadius: '24px',
              border: '0.5px solid rgba(2, 0, 67, 0.20)',
              background: '#FBFBFB',
            }}
          >
            <h1 className="text-[40px] font-semibold flex items-center gap-3">
              4.8{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clip-path="url(#clip0_21_96)">
                  <path
                    d="M1.7691 16.5337L6.51577 20.0004L4.7131 25.5831C4.42178 26.4489 4.41809 27.3857 4.70258 28.2539C4.98707 29.122 5.5445 29.8749 6.29177 30.4004C7.02624 30.9428 7.91629 31.2333 8.82931 31.2288C9.74232 31.2242 10.6294 30.9248 11.3584 30.3751L15.9998 26.9591L20.6424 30.3711C21.3756 30.9103 22.2608 31.2033 23.1709 31.2077C24.081 31.2121 24.9691 30.9279 25.7075 30.3958C26.4458 29.8637 26.9964 29.1111 27.2802 28.2464C27.5639 27.3816 27.5661 26.4492 27.2864 25.5831L25.4838 20.0004L30.2304 16.5337C30.9626 15.9984 31.5069 15.2454 31.7856 14.3823C32.0642 13.5191 32.063 12.59 31.782 11.7276C31.501 10.8652 30.9547 10.1136 30.2211 9.58028C29.4875 9.04692 28.6041 8.75903 27.6971 8.75774H21.8664L20.0971 3.24307C19.8189 2.37502 19.2721 1.61776 18.5357 1.08049C17.7993 0.543229 16.9113 0.253723 15.9998 0.253723C15.0882 0.253723 14.2002 0.543229 13.4638 1.08049C12.7274 1.61776 12.1807 2.37502 11.9024 3.24307L10.1331 8.75774H4.30777C3.40076 8.75903 2.51736 9.04692 1.78374 9.58028C1.05013 10.1136 0.503823 10.8652 0.222864 11.7276C-0.058095 12.59 -0.0593386 13.5191 0.219311 14.3823C0.497961 15.2454 1.04225 15.9984 1.77444 16.5337H1.7691Z"
                    fill="#FFE03D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_21_96">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </h1>
            <p>Over 20,000 Patient</p>
            <div className="flex justify-center"></div>
          </div>
          <div
            className="bg-[#FBFBFB] p-5 h-[190px]"
            style={{
              borderRadius: '24px',
              border: '0.5px solid rgba(2, 0, 67, 0.20)',
              background: '#FFFFF5',
            }}
          >
            <h1 className="text-[40px] font-semibold">90%</h1>
            <div className="flex">
              <p className="text-nowrap text-[14px]">
                Money spend <br /> for poor patient.
              </p>

              <img className="mt-5" src={group4} alt="" />
            </div>
          </div>
          <div
            className="bg-[#FBFBFB] p-5 h-[312px] -mt-[122px]"
            style={{
              borderRadius: '24px',
              border: '0.5px solid rgba(2, 0, 67, 0.20)',
              background: '#FBFBFB',
            }}
          >
            <h1 className="text-[40px] font-semibold">50+</h1>
            <p>Free lession video for patient</p>
            <div className="flex justify-center">
              <img src={group5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
