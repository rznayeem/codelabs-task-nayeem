import Button from '../../Shared/Button';
import team1 from '../../assets/media/team1.png';

const WhoWeAre = () => {
  return (
    <div className="mt-40 flex items-center gap-[123px]">
      <div className="w-[50%]">
        <h3 className="py-[10px] bg-[#FFFFF5] px-6 rounded-full border border-[#343268] max-w-max mb-4">
          Who we are
        </h3>
        <h1 className="text-4xl font-semibold leading-[54px] mb-4">
          We Help To Get Soultions
        </h1>
        <p className="text-[#4D4C7B] mb-10">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <Button text={'Learn more'}></Button>
      </div>
      <div className="w-[50%]">
        <div className="relative">
          <img src={team1} alt="" />
          <div className="absolute bg-[#343268] rounded-[32px] -left-24 -bottom-10 max-w-[395px] py-[47px] px-7 z-10">
            <h3 className="text-white text-2xl font-medium mb-5">
              Our mission is simple
            </h3>
            <p className="text-[#FFFFFFCC]">
              To provide high-quality healthcare services that are accessible,
              personalized, and patient-centered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
