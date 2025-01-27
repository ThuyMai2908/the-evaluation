"use client";

import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/shared/icon";
import Link from "next/link";

export const DATA_SOCIAL = [
  {
    id: 1,
    icon: <FacebookIcon fill="#7D614B" />,
  },
  {
    id: 2,
    icon: <InstagramIcon fill="#7D614B" />,
  },
  {
    id: 3,
    icon: <TiktokIcon fill="#7D614B" />,
  },

  {
    id: 4,
    icon: <YoutubeIcon fill="#7D614B" />,
  },
];

export const ROUTERS = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Treatments",
  },
  {
    id: 3,
    title: "Blog",
  },
  {
    id: 4,
    title: "Concerns",
  },
  {
    id: 5,
    title: "Shop",
  },
  {
    id: 6,
    title: "Locate Us",
  },
];

export function NavigationSheet({ open }: { open: boolean }) {
  return (
    <div
      className={`bg-beige absolute inset-0 flex h-svh flex-col transition-transform duration-300 md:h-screen ${
        open ? "translate-y-0" : " translate-y-full"
      }`}
    >
      <div className="container flex flex-1 flex-col justify-center">
        <nav>
          <ul className="text-brownMenu grid gap-x-20 gap-y-8 font-medium md:w-fit md:grid-cols-2 xl:gap-x-20">
            {ROUTERS.map((item, _) => (
              <li key={item?.id}>
                <Link
                  className="text-3xl text-brownMenu hover:opacity-70 md:text-[64px] leading-1.2 font-medium"
                  href="/"
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="bg-white py-5">
        <div className="container flex justify-end gap-6">
          {DATA_SOCIAL.map((item, index) => (
            <Link key={index} target="_blank" href={"/"}>
              {item?.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
