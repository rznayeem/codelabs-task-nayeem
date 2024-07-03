import logo from '../../assets/media/logo dark.png';
import arrow from '../../assets/media/Arrow 1.png';

const Nav = () => {
  return (
    <nav className="max-w-[1160px] mx-auto flex items-center justify-between py-5">
      <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
        <img src={logo} alt="" />
      </div>
      <ul className="flex items-center justify-between gap-6">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Blogs</li>
        <li className="cursor-pointer">About Us</li>
      </ul>
      <div>
        <button className="flex items-center gap-2 font-medium rounded-xl border py-[14px] px-7 border-[#343268]">
          Appointment <img src={arrow} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
