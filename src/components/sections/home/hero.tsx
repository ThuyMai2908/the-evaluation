"use client";

import BlockStack from "@/components/layouts/block-stack";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import { motion } from "framer-motion";
import Image from "next/image";

const hero = {
  header:
    "Unveil Your Best Self with Cosmedix Clinics’ Expert Care and Cutting-Edge Treatments",
};

export default function Hero() {
  return (
    <section className="relative min-h-svh md:min-h-screen isolate">
      <motion.div
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/img/hero.webp"
          width={1024}
          height={512}
          alt="hero"
          className="w-full h-full object-cover"
          sizes={DEFAULT_IMG_SIZES}
        />
      </motion.div>
      <div className="container">
        <BlockStack
          className="absolute pb-10 md:pb-14 "
          fullHeight
          alignHorizontal="end"
          gap={6}
        >
          <motion.div
            className="max-w-4xl flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography as="h1" variant="pageHeading">
              {hero.header}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button className="w-fit border-2" variant="outline">
              Book Now
            </Button>
          </motion.div>
        </BlockStack>
      </div>
    </section>
  );
}
