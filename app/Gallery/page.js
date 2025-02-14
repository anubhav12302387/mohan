import React from 'react';

const Page = () => {
  const images = [
    "https://media.licdn.com/dms/image/v2/D5622AQER6-IQN07aRw/feedshare-shrink_800/feedshare-shrink_800/0/1692042254380?e=1742428800&v=beta&t=QI112tXevdNKO37Wpg_ENPL17TxvQ5kFR5qbz7Oa8-E",
    "https://media.licdn.com/dms/image/v2/D5622AQECKJ_IIaQuDA/feedshare-shrink_1280/feedshare-shrink_1280/0/1689962299980?e=1742428800&v=beta&t=Nv7R1VTm6SIUA8A0ehPbanD-jm_ce38CH3iDEogiAlQ",
    "https://media.licdn.com/dms/image/v2/D5622AQHSpKBj59mUTQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1689962299854?e=1742428800&v=beta&t=P4Ppgl-yMilaBLzX0f2FgO0QhW-ZgcOzOgxjjmgNhOs",
    "https://media.licdn.com/dms/image/v2/D5622AQHcxUeZRCdXQQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1689962300218?e=1742428800&v=beta&t=BJMnPwKDQEeDgXlYtXBEYf0lfNnfs3ZDVwpJKt1FB6U",
    "https://media.licdn.com/dms/image/v2/D5622AQHHDKPQ4GhTWQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732092102668?e=1742428800&v=beta&t=eePDk23pczWA5YYLsqJtlIorBM0tTpu-D_oBSqDisW8",
    "https://media.licdn.com/dms/image/v2/D5622AQEL1d5AayDl6w/feedshare-shrink_1280/feedshare-shrink_1280/0/1732092097318?e=1742428800&v=beta&t=f_OW1MgNbdcPaWFw36uDVEhcYxf9XAx537ep1Dy3Wdg"
  ];

  return (
    <div className='h-screen pt-28 bg-black text-white'>
      <div className='binary-code z-0'></div>
      
      <div className='z-10 text-center'>
        <h1 className='md:text-5xl text-4xl my-4 font-bold'>Cybersecurity in Action: A Visual Journey</h1>
        <p className='md:text-xl text-lg max-w-3xl mx-auto'>Dive into my curated gallery of projects, solutions, and breakthroughs in the world of digital security.</p>
      </div>

      <div className='z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-12 p-6'>
        {images.map((src, index) => (
          <div key={index} className='relative overflow-hidden rounded-xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg hover:scale-105 transition-transform duration-300 shadow-lg'>
            <img src={src} alt={`Gallery ${index + 1}`} className='w-full h-full object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
