import React from 'react';

const MobileServices = () => {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="rounded-[2.5rem] bg-zinc-900 py-12 px-8 sm:px-16 lg:py-16 text-center overflow-hidden relative">
          <div className="absolute inset-0 bg-blue-600/10" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase">Healthcare at Your Doorstep</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Mobile Clinical Services
            </p>
            <p className="mt-6 text-lg text-zinc-300">
              Our mobile team brings professional medical care, testing, and therapies directly to your home or office on your schedule.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
               <div>
                  <div className="text-4xl font-bold text-white">01</div>
                  <p className="mt-2 text-zinc-400 font-medium italic">Book Appointment</p>
               </div>
               <div>
                  <div className="text-4xl font-bold text-white">02</div>
                  <p className="mt-2 text-zinc-400 font-medium italic">Nurse Arrives</p>
               </div>
               <div>
                  <div className="text-4xl font-bold text-white">03</div>
                  <p className="mt-2 text-zinc-400 font-medium italic">Quality Care</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileServices;
