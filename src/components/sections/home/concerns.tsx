"use client";

import FlexRow from "@/components/layouts/flex-row";
import CardMediaWithText from "@/components/shared/card-block";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { TextMediaCardProps } from "@/types/block";
import { motion } from "framer-motion";
import { useState } from "react";

const CONCERN_DATA: TextMediaCardProps[] = [
  {
    id: 1,
    imageUrl: "/img/corner-1.webp",
    title: "Facial Anti-Ageing",
  },
  {
    id: 2,
    imageUrl: "/img/corner-2.webp",

    title: "Acne Scarring & Acne Clearance",
  },
  {
    id: 3,
    imageUrl: "/img/corner-3.webp",

    title: "Melasma, Pigmentation & Freckles",
  },
  {
    id: 4,
    imageUrl: "/img/corner-6.webp",

    title: "Rosacea",
  },
  {
    id: 5,
    imageUrl: "/img/corner-4.webp",

    title: "Moles, Skin Tags & Lumps",
  },
  {
    id: 6,
    imageUrl: "/img/corner-5.webp",

    title: "Surgical & Burns Scars",
  },
  {
    id: 7,
    imageUrl: "/img/corner-6.webp",

    title: "Stretch Marks",
  },
  {
    id: 8,
    imageUrl: "/img/corner-7.webp",

    title: "Laser Tattoo Removal",
  },
  {
    id: 9,
    imageUrl: "/img/corner-8.webp",
    title: "Spider Veins",
  },
];
const Concerns = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section className=" py-16 md:py-112">
      <div className="container">
        <motion.div
          className="mb-12 md:mb-20 gap-6 flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography variant={"titleSection"} as="h2">
            Concerns
          </Typography>
          <Typography as="p" variant={"body"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {CONCERN_DATA.map((item, index) => (
              <CarouselItem
                key={index}
                className="gap-8 md:basis-1/2 lg:basis-1/3"
              >
                <div>
                  <CardMediaWithText
                    className="aspect-[4/5] rounded-lg"
                    key={index}
                    imageUrl={item?.imageUrl}
                    title={item?.title}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <FlexRow
            className="mt-12"
            alignHorizontal={"between"}
            alignVertical={"center"}
          >
            <FlexRow alignHorizontal={"center"} gap={3}>
              {CONCERN_DATA.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    activeIndex === index ? "bg-brown" : "bg-muted"
                  }`}
                />
              ))}
            </FlexRow>
            <FlexRow gap={4}>
              <CarouselPrevious
                variant={"outline"}
                className="static w-8 h-8 lg:w-12 lg:h-12 text-brown border-brown translate-y-0"
              />
              <CarouselNext
                variant={"outline"}
                className="static  w-8 h-8 lg:w-12 lg:h-12  text-brown border-brown translate-y-0"
              />
            </FlexRow>
          </FlexRow>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Concerns;
