'use client';

import Image from 'next/image';
import Link from 'next/link';
import PopUp from '@/components/popUp/page';
import { useState } from 'react';

export default function Page() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isAsideBarOpen, setIsAsideBarOpen] = useState(false);

  const handleUserClick = () => setIsPopUpOpen(!isPopUpOpen);
  const handleAsideBarClick = () => setIsAsideBarOpen(!isAsideBarOpen);

  return (
    <main>
      <nav className="flex justify-center gap-10 border-b-2 py-4 lg:items-center lg:justify-around">
        <div
          className="absolute left-10 block cursor-pointer lg:hidden"
          onClick={() => handleAsideBarClick()}
        >
          <Image
            src="/hamburger-icon.jpg"
            width={28}
            height={28}
            alt="hamburger"
          />
        </div>

        <div className="flex gap-7">
          <h2 className="text-5xl font-semibold text-[#d61344] lg:text-3xl">
            PuRat
          </h2>
          <p className=" hidden h-9 w-[1.5px] bg-slate-300 lg:block"></p>
        </div>

        <div className="hidden lg:block">
          <ul className="flex gap-16 text-gray-500">
            <li className="flex items-center justify-center gap-2">
              <Image src="/education.svg" width={20} height={20} alt="logo" />
              <span>Team Inbox</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Image src="/education.svg" width={20} height={20} alt="logo" />
              <span>Broadcast</span>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Image src="/education.svg" width={20} height={20} alt="logo" />
              <span>Chatbots</span>
            </li>
            <li>
              <span>...More</span>
            </li>
            <Link
              href="/login"
              className="rounded border bg-[#d61344] px-2 py-[2px] font-semibold text-white"
            >
              Login
            </Link>
          </ul>
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-3">
            <div>
              <Image src="/user.png" width={30} height={30} alt="user" />
            </div>
            <p className="h-9 w-[2px] bg-slate-300"></p>
            <div onClick={() => handleUserClick()} className="cursor-pointer">
              <Image src="/user.png" width={30} height={30} alt="user" />
            </div>
          </div>
        </div>
      </nav>

      {isPopUpOpen && <PopUp />}

      <aside className={`lg:block ${isAsideBarOpen ? 'block' : 'hidden'}`}>
        <div className="h-[90vh] w-60 border-r-2 px-4 py-5">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2">
              <Image src="/education.svg" width={24} height={24} alt="logo" />
              <span>Broadcast history</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/education.svg" width={24} height={24} alt="logo" />
              <span>Scheduled Broadcast</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/education.svg" width={24} height={24} alt="logo" />
              <span>Template Message</span>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
