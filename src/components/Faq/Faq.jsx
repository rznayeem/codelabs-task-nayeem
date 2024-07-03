import { useState } from 'react';
import HeaderTItle from '../../Shared/HeaderTItle';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(null);
  const faqs = [
    {
      title: ' What are your office hours?',
      description:
        'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.',
    },
    {
      title: 'How can I schedule an appointment?',
      description:
        'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.',
    },
    {
      title: 'Do you accept insurance?',
      description:
        'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.',
    },
    {
      title: 'What should I bring to my appointment?',
      description:
        'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.',
    },
    {
      title: 'Do you offer telemedicine appointments?',
      description:
        'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.',
    },
  ];
  const toggle = idx => {
    setIsOpen(prevIdx => (prevIdx === idx ? null : idx));
  };

  return (
    <div className="lg:mt-40 m-5 lg:m-0">
      <HeaderTItle text={'Faq'}></HeaderTItle>
      <h1 className="text-4xl mt-4 font-semibold leading-[54px] mb-4">
        Frequntly Asked Question
      </h1>
      <div>
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-3">
            <button
              onClick={() => toggle(idx)}
              className="flex h-full w-full py-[18px] pl-[46px] rounded-lg justify-between font-medium outline-none bg-[#FFFFF5]"
            >
              <span className="">{faq.title}</span>
              <span className="rounded-full p-2">
                <svg
                  className="ml-8 size-3 shrink-0 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === idx && '!rotate-180'
                    }`}
                  />
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === idx && '!rotate-180'
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${
                isOpen === idx
                  ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden pl-[46px] pr-[103px] text-sm text-[#34326899]">
                {faq.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
