"use client";

import Link from "next/link";
import { HTMLAttributes, JSX } from "react";
import BlockStack from "@/components/layouts/block-stack";
import FlexRow from "@/components/layouts/flex-row";
import InlineGrid from "@/components/layouts/inline-grid";
import EmailLink from "@/components/shared/email-link";
import GoogleMapsLink from "@/components/shared/google-map-link";
import {
  ArrowIcon,
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "@/components/shared/icon";
import Logo from "@/components/shared/logo";
import PhoneCallLink from "@/components/shared/phone-call-link";
import { Typography } from "@/components/ui/typography";
import { Information } from "@/config/information";
import { cn } from "@/lib/utils";

type FooterProps = HTMLAttributes<HTMLDivElement>;

export const DATA_SOCIAL = [
  {
    id: 1,
    ariaLabel: "Find us on Facebook",
    href: Information.socialLinks.facebook,
    Icon: FacebookIcon,
  },
  {
    id: 2,
    ariaLabel: "Find us on Instagram",
    href: Information.socialLinks.instagram,
    Icon: InstagramIcon,
  },
  {
    id: 3,
    ariaLabel: "Find us on Tiktok",
    href: Information.socialLinks.tiktok,
    Icon: TiktokIcon,
  },

  {
    id: 4,
    ariaLabel: "Find us on Youtube",
    href: Information.socialLinks.youtube,
    Icon: YoutubeIcon,
  },
];

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={cn("bg-brownFooter relative py-60", className)}
      {...props}
    >
      <InlineGrid
        className="container gap-5 sm:gap-0"
        columns={{ default: 1, md: 2 }}
      >
        <BlockStack className="col-span-1">
          <Logo
            className="h-14 lg:h-24"
            href="/"
            imageUrl="/img/logo-footer.webp"
          />
          <BlockStack gap={1} className="items-start pt-10 sm:pt-60">
            {[
              ["Home", "/", "Blog", "/", "Concerns", "/"],
              ["Treatments", "/", "Shop", "/", "Locate Us"],
            ].map((row, rowIndex) => (
              <FlexRow key={rowIndex} gap={{ default: 2, xl: 8 }}>
                {row.map((item, index) => (
                  <Typography key={index} variant={"menu"} as="span">
                    {item}
                  </Typography>
                ))}
              </FlexRow>
            ))}
          </BlockStack>
        </BlockStack>

        <InlineGrid
          className="col-span-1 gap-5 sm:gap-0"
          columns={{ default: 1, xl: 4 }}
        >
          <BlockStack
            className="col-span-1 lg:col-span-2"
            gap={{ default: 5, lg: 14 }}
          >
            <BlockStack gap={2}>
              <Typography variant={"tag"} as="p">
                Contact us:
              </Typography>
              <PhoneCallLink />
            </BlockStack>
            <BlockStack gap={2}>
              <Typography variant={"tag"} as="p">
                Email
              </Typography>
              <EmailLink />
            </BlockStack>
          </BlockStack>

          <BlockStack gap={{ default: 5, lg: 14 }}>
            <BlockStack gap={2}>
              <Typography variant={"tag"} as="p">
                Address:
              </Typography>
              <GoogleMapsLink />
            </BlockStack>
            <BlockStack gap={2}>
              <Typography variant={"tag"} as="p">
                Opening hours
              </Typography>
              <Typography variant={"titleSm"}>9am—6pm</Typography>
            </BlockStack>
            <FlexRow gap={6}>
              {DATA_SOCIAL.map((item, index) => (
                <Link
                  key={index}
                  aria-label={item.ariaLabel}
                  href={item.href || "/"}
                  target="_blank"
                >
                  <item.Icon />
                </Link>
              ))}
            </FlexRow>
          </BlockStack>

          <BlockStack className="justify-between " alignVertical="center">
            <div
              onClick={goToTop}
              className=" absolute bottom-2 right-2 xl:relative cursor-pointer bg-beige border rounded-full w-fit"
            >
              <div className="relative w-10 h-10">
                <div className=" absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 w-fit h-fit">
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <div className="pointer-events-none uppercase text-sm text-gray-400 font-medium">
              © {new Date().getFullYear()}-Copyright
            </div>
          </BlockStack>
        </InlineGrid>
      </InlineGrid>
    </footer>
  );
};
