import React from 'react';

const HeaderTItle = ({ text }) => {
  return (
    <div className="flex">
      <h3 className="py-[10px] px-6 rounded-full border border-[#343268]">
        {text}
      </h3>
    </div>
  );
};

export default HeaderTItle;
