"use client";

import BlockStack from "@/components/layouts/block-stack";
import FlexRow from "@/components/layouts/flex-row";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import { CallToActionBlock as CallToActionBlockProps } from "@/types/block";
import { useState } from "react";

export interface CardTextProps {
  id?: number;
  name?: string;
  content?: string;
  position?: string;
}

const DATA_FEEDBACK: CardTextProps[] = [
  {
    id: 1,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    id: 2,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    id: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
  {
    id: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero.",
    name: "Name Surname",
    position: "Position, Company name",
  },
];

export default function Feedback({
  header,
  content,
  action,
}: CallToActionBlockProps) {
  const { children, ...buttonProps } = action || {};
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="bg-lightBrown w-full py-16 md:py-[112px]">
      <BlockStack
        className="container relative gap-12 lg:gap-[80px]"
        alignHorizontal="between"
        alignVertical="center"
      >
        <BlockStack gap={6} className="max-w-4xl text-center">
          <Typography
            as="h2"
            variant={"titleSection"}
            tone={"accent"}
            fontWeight={"medium"}
          >
            {header || "Don’t just take our word for it"}
          </Typography>
        </BlockStack>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {DATA_FEEDBACK.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-8 md:basis-1/2 lg:basis-1/2"
              >
                <div>
                  <CardContent className="p-0">
                    <BlockStack gap={8} className="text-center">
                      <Typography tone={"accent"}>{item?.content}</Typography>
                      <BlockStack gap={4}>
                        <Typography variant={"bodySm"} tone={"accent"}>
                          {item?.name}
                        </Typography>
                        <Typography tone={"accent"}>
                          {item?.position}
                        </Typography>
                      </BlockStack>
                    </BlockStack>
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <FlexRow>
            <CarouselPrevious
              variant={"outline"}
              className="left-0 w-8 h-8 lg:w-12 lg:h-12 text-brown border-brown hover:bg-transparent"
            />
            <CarouselNext
              variant={"outline"}
              className="right-0 w-8 h-8 lg:w-12 lg:h-12 text-brown border-brown hover:bg-transparent"
            />
          </FlexRow>

          <FlexRow
            className="mt-12"
            alignHorizontal={"center"}
            alignVertical={"center"}
          >
            <FlexRow alignHorizontal={"center"} gap={3}>
              {DATA_FEEDBACK.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    activeIndex === index ? "bg-grey" : "bg-muted"
                  }`}
                />
              ))}
            </FlexRow>
          </FlexRow>
        </Carousel>
      </BlockStack>
    </section>
  );
}
