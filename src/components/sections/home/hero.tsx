import BlockStack from "@/components/layouts/block-stack";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import Image from "next/image";

const hero = {
  header:
    "Unveil Your Best Self with Cosmedix Clinics’ Expert Care and Cutting-Edge Treatments",
};

export default function Hero() {
  return (
    <section className="relative min-h-svh md:min-h-screen isolate">
      <div className="absolute inset-0 w-full h-full object-cover">
        <Image
          src="/img/hero.webp"
          width={1024}
          height={512}
          alt="hero"
          className="w-full h-full object-cover"
          sizes={DEFAULT_IMG_SIZES}
        />
      </div>
      <div className="container">
        <BlockStack
          className="absolute pb-10 md:pb-14 "
          fullHeight
          alignHorizontal="end"
          gap={6}
        >
          <BlockStack className="max-w-4xl">
            <Typography as="h1" variant="pageHeading">
              {hero.header}
            </Typography>
          </BlockStack>
          <Button className="w-fit border-2" variant="outline">
            Book Now
          </Button>
        </BlockStack>
      </div>
    </section>
  );
}
