import logoLight from '../../assets/media/logo light.png';
import social from '../../assets/social.png';

const Footer = () => {
  return (
    <footer className="bg-[#020043] text-[#FFFFF599]">
      <div className="max-w-[1160px] mx-auto lg:py-[120px] py-[40px] px-10 lg:px-0">
        <img src={logoLight} alt="" />
        <div className="flex flex-wrap justify-between sm:gap-5">
          <p className="mt-8">
            123 Main Street Anytown, USA <br /> Postal Code: 12345
            <br />
            <br />
            Support: support@oyolloo.com <br />
            (Available : 10:00am to 07:00pm)
          </p>
          <div className="space-y-5 mt-10 lg:mt-0">
            <p>Home</p>
            <p>About Us</p>
            <p>Success Page</p>
            <p>Terms and condition</p>
          </div>
          <div className="space-y-5 mt-10 lg:mt-0">
            <p>Services</p>
            <p>Scheduling</p>
            <p>Contact Us</p>
            <p>Patient Portal</p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h3 className="leading-10">Follow Us</h3>
            <img src={social} alt="" />
            <p className="text-[#FFFFF5CC] text-xs lg:mt-11 mt-5">
              @docplus 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
