'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineEmail } from 'react-icons/md';

export default function ResetPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-white relative overflow-hidden">
      {/* Top right background image */}
      <div className="absolute hidden lg:block top-0 md:top-2 -right-[10%] sm:-right-[5%] w-[80%] sm:w-[70%] md:w-[60%] h-[40%] md:h-[50%] pointer-events-none">
        <div className="relative w-full h-full">
          <Image 
            src="/assets/bg_image.png" 
            alt="Background decoration" 
            fill
            priority
      
          />
        </div>
      </div>

      {/* Bottom left background image */}
      <div className="absolute hidden lg:block bottom-0 md:bottom-5 -left-[20%] sm:-left-[15%] md:-left-[10%] w-[70%] sm:w-[60%] md:w-[52%] h-[45%] md:h-[55%] pointer-events-none">
        <div className="relative w-full h-full">
          <Image 
            src="/assets/bg_image.png" 
            alt="Background decoration" 
            fill
            
          />
        </div>
      </div>
      <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[55%] rounded-3xl bg-white p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm relative mx-auto my-6 md:m-12 z-10">
        <div className="mb-6 md:mb-8 text-center max-w-4xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h1 className="mb-2 md:mb-3 text-2xl md:text-3xl font-bold text-[#323232]">Reset Password</h1>
          <p className="text-xs sm:text-sm text-[#545757]">
            Forgot your password? No worries! Simply reset it to 
            regain access to your account.
          </p>
        </div>

        <form className="space-y-5 md:space-y-6 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-[#323232]">
              Email
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <span className="text-gray-500">
                  <MdOutlineEmail size={20} />
                </span>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md bg-white py-2.5 sm:py-3 pl-10 pr-3 text-[#282828] placeholder-gray-400 focus:outline-none text-sm"
                placeholder="Email Address"
                required
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #000066, #FE3D00) border-box',
                  border: '1px solid transparent',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px',
                  letterSpacing: '-0.084px',
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto rounded-md bg-[#000066] py-3 text-sm font-semibold text-white block"
          >
            Send Me a New Password
          </button>
        </form>

        <div className="mt-4 text-center max-w-3xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <p className="text-xs sm:text-sm text-[#545757]">
            Remember your password?{' '}
            <Link href="/signin" className="font-medium text-[#000066]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 