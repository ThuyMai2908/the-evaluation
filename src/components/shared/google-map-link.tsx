import Link from "next/link";
import { MapPinIcon } from "lucide-react";
import { ContactLink } from "@/types/links";
import { Typography } from "@/components/ui/typography";
import { Information } from "@/config/information";

export default function GoogleMapsLink({
  children,
  withIcon = false,
}: ContactLink) {
  return (
    <Link
      aria-label="Find us on Google Maps"
      href={Information.location.googleMapsUrl}
      target="_blank"
      className="flex items-center gap-4"
    >
      {withIcon && <MapPinIcon className="text-primary" />}

      <Typography tone={"secondary"}>
        {children || Information.location.label}
      </Typography>
    </Link>
  );
}
