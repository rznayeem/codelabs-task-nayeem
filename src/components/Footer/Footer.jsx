import logoLight from '../../assets/media/logo light.png';
import social from '../../assets/social.png';

const Footer = () => {
  return (
    <footer className="bg-[#020043] text-[#FFFFF599]">
      <div className="max-w-[1160px] mx-auto py-[120px]">
        <img src={logoLight} alt="" />
        <div className="flex justify-between">
          <p className="mt-8">
            123 Main Street Anytown, USA <br /> Postal Code: 12345
            <br />
            <br />
            Support: support@oyolloo.com <br />
            (Available : 10:00am to 07:00pm)
          </p>
          <div className="space-y-5">
            <p>Home</p>
            <p>About Us</p>
            <p>Success Page</p>
            <p>Terms and condition</p>
          </div>
          <div className="space-y-5">
            <p>Patient Portal</p>
            <p>Contact Us</p>
            <p>Scheduling</p>
            <p>Patient Portal</p>
          </div>
          <div>
            <h3 className="leading-10">Follow Us</h3>
            <img src={social} alt="" />
            <p className="text-[#FFFFF5CC] text-xs mt-11">@docplus 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
