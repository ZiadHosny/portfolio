'use client'
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { BiMessageSquareError } from "react-icons/bi";

const oneSecond: number = 1000;

export const NotFound = () => {
  const [seconds, setSeconds] = useState(4);
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, oneSecond);
    const timeout = setTimeout(() => {
      router.push('/')
    }, oneSecond * 4);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };

  }, []);

  return (
    <div className="flex flex-col items-center sm:items-start my-[130px] mx-auto">
      <h1 className="heading flex items-center gap-[5px]">
        <BiMessageSquareError />
        Wrong URL
      </h1>
      <h2 className="subheading text-center">The page you're looking for doesn't exist.</h2>
      <p className="text-clearWhite text-left font-light text-normal">Redirecting to Home page in... {seconds} seconds</p>
    </div>
  );
};
