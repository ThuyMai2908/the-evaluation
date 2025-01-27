import { APP_NAME, DEFAULT_IMG_SIZES } from "@/config/common";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  imageUrl?: string;
  href?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ imageUrl, href, className }) => {
  if (href) {
    return (
      <Link aria-label="Go to home" href={href}>
        <Image
          src={imageUrl || "/img/logo-header.webp"}
          width={256}
          height={128}
          alt={APP_NAME}
          className={cn("h-12 w-auto object-cover", className)}
          sizes={DEFAULT_IMG_SIZES}
        />
      </Link>
    );
  }
  return (
    <Image
      src="/img/logo-header.webp"
      width={256}
      height={128}
      alt={APP_NAME}
      className={cn("h-12 w-auto object-contain", className)}
      sizes={DEFAULT_IMG_SIZES}
    />
  );
};

export default Logo;
