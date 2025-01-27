import BlockStack from "@/components/layouts/block-stack";
import { Typography } from "@/components/ui/typography";
import { DEFAULT_IMG_SIZES } from "@/config/common";
import { TextMediaCardProps } from "@/types/block";
import Image from "next/image";
import React from "react";

const TextWithMedia: React.FC<TextMediaCardProps> = ({
  id,
  imageUrl,
  title,
  className,
}) => {
  return (
    <BlockStack
      className={className}
      gap={3}
      fullHeight
      alignHorizontal="between"
    >
      <div className="mb-24">
        <Typography as="h3" variant={"bodyLg"}>
          {title}
        </Typography>
      </div>
      <div className="pb-8">
        <Typography as="span" variant={"bodyLg"}>
          {id}
        </Typography>
      </div>
      {imageUrl && (
        <div
          className={`absolute bottom-8 right-6 aspect-[288/234] w-[45%] max-w-[230px] overflow-hidden rounded-lg object-cover xl:bottom-[60px] xl:right-[60px] xl:max-w-[288px]`}
        >
          <Image
            src={imageUrl}
            width={1024}
            height={512}
            alt=""
            className="w-full h-full object-cover"
            sizes={DEFAULT_IMG_SIZES}
          />
        </div>
      )}
    </BlockStack>
  );
};

export default TextWithMedia;
