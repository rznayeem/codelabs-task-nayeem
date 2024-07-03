import arrow from '../assets/media/Arrow 1.png';

const Button = ({ text }) => {
  return (
    <div>
      <button className="flex items-center gap-2 font-medium bg-[#FFC637] rounded-xl py-[14px] px-7">
        {text} <img src={arrow} alt="" />
      </button>
    </div>
  );
};

export default Button;
