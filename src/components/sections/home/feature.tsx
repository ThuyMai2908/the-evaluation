"use client";

import InlineGrid from "@/components/layouts/inline-grid";
import TextWithMedia from "@/components/shared/text-media";
import { TextMediaCardProps } from "@/types/block";
import { motion } from "framer-motion";

const PRODUCT_DATA: TextMediaCardProps[] = [
  {
    id: 1,
    imageUrl: "/img/feature-1.webp",
    title: "Specialise in non-surgical corrective and cosmetic treatments",
  },
  {
    id: 2,
    imageUrl: "/img/feature-1.webp",
    title: "Option between In-Clinic and Virtual Consultation",
  },
];
const Feature = () => {
  return (
    <motion.section
      className="container text-brown py-16 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <InlineGrid
        className="min-h-full border-brown border-t-0 border-r-0 md:border-t md:border-r h-full gap-6 md:gap-x-0"
        columns={{ default: 1, md: 2 }}
        alignItems="center"
      >
        {PRODUCT_DATA.map((block, _) => (
          <TextWithMedia
            className="border border-brown relative rounded-bl-12 xl:rounded-bl-6.25 md:border-r-0 border-t border-r md:border-t-0 p-4 md:p-10 xl:p-60"
            key={block?.id}
            imageUrl={block?.imageUrl}
            title={block?.title}
            id={block?.id}
          />
        ))}
      </InlineGrid>
    </motion.section>
  );
};

export default Feature;
