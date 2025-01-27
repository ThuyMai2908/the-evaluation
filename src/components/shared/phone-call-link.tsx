import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { ContactLink } from "@/types/links";
import { Typography } from "@/components/ui/typography";
import { Information } from "@/config/information";

export default function PhoneCallLink({
  children,
  withIcon = false,
}: ContactLink) {
  return (
    <Link
      aria-label="Call us"
      href={`tel:${Information.phone.phone}`}
      target="_blank"
      className="flex items-center gap-4"
    >
      {withIcon && <PhoneIcon className="text-primary w-4 h-4" />}
      <Typography variant={"titleSm"}>
        {children || Information.phone.label}
      </Typography>
    </Link>
  );
}
