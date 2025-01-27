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
    <div className={cn("relative overflow-hidden", className)}>
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px]">
        <Image
          src={imageUrl || ""}
          width={512}
          height={769}
          alt="card-content"
          className="w-full h-full object-cover"
          sizes={DEFAULT_IMG_SIZES}
        />
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
