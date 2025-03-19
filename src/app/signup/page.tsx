'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineMailOutline, MdLockOutline } from 'react-icons/md';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-white">
      <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] xl:w-[55%] rounded-3xl bg-white p-6 sm:p-8 md:p-10 shadow-sm mx-auto">
        <div className="mb-6 md:mb-8 text-center max-w-4xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <h1 className="mb-2 md:mb-3 text-2xl md:text-3xl font-bold text-[#323232]">Create Account</h1>
          <p className="text-xs sm:text-sm text-[#545757]">
            Welcome to ARCHICONNECT Academy! Get ready to enjoy our courses 
            designed to enrich your skills and bring you lasting benefits.
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
                  <MdOutlineMailOutline size={20} />
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

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-[#323232]">
              New Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <span className="text-gray-500">
                  <MdLockOutline size={20} />
                </span>
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="block w-full rounded-md bg-white py-2.5 sm:py-3 pl-10 pr-10 text-[#282828] placeholder-gray-400 focus:outline-none text-sm"
                placeholder="New Password"
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
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 z-10"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="text-gray-400">
                  {showPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#323232]">
              Confirm Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 z-10">
                <span className="text-gray-500">
                  <MdLockOutline size={20} />
                </span>
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                className="block w-full rounded-md bg-white py-2.5 sm:py-3 pl-10 pr-10 text-[#282828] placeholder-gray-400 focus:outline-none text-sm"
                placeholder="Confirm Password"
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
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 z-10"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <span className="text-gray-400">
                  {showConfirmPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FiEye size={18} />
                  )}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto rounded-md bg-[#000066] py-3 text-sm font-semibold text-white block"
          >
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center max-w-3xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
          <p className="text-xs sm:text-sm text-[#545757]">
            Already have an account?{' '}
            <Link href="/signin" className="font-medium text-[#000066]">
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-6 space-y-3 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 max-w-3xl mx-auto">
          <Link href="/phone-signup">
            <div className="flex w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto items-center justify-center gap-3 rounded-md bg-[#000066] py-2.5 sm:py-3 text-sm font-semibold text-white cursor-pointer">
              <Image 
                src="/assets/lucide_phone-call.svg" 
                alt="Mobile icon" 
                width={18}
                height={18} 
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              Sign Up with mobile
            </div>
          </Link>

          <button
            type="button"
            className="flex w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto items-center justify-center gap-3 rounded-md bg-[#000066] py-2.5 sm:py-3 text-sm font-semibold text-white"
          >
            <Image 
              src="/assets/devicon_google.svg" 
              alt="Google icon" 
              width={18}
              height={18}
              className="w-4 h-4 sm:w-5 sm:h-5" 
            />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
} 