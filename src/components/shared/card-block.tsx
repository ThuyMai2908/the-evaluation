import BlockStack from "@/components/layouts/block-stack";
import { Typography } from "@/components/ui/typography";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import { ResponsiveProp } from "@/lib/breakpoints/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CardProps {
  title?: string;
  imageUrl?: string;
  aspectRatio?: ResponsiveProp<string>;
  className?: string;
}

const CardMediaWithText: React.FC<CardProps> = ({
  title,
  imageUrl,
  aspectRatio,
  className,
}) => {
  return (
    <div className={cn("relative overflow-hidden group ", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
        <Image
          src={imageUrl || ""}
          width={512}
          height={769}
          alt="card-content"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          sizes={DEFAULT_IMG_SIZES}
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      </div>

      <BlockStack
        className="absolute p-3 md:p-9 inset-0"
        alignHorizontal="end"
        alignVertical="center"
      >
        <Typography
          as="h3"
          variant={"bodyLg"}
          tone={"secondary"}
          fontWeight={"normal"}
        >
          {title}
        </Typography>
      </BlockStack>
    </div>
  );
};

export default CardMediaWithText;
