import Link from "next/link";
import { MailIcon } from "lucide-react";
import { ContactLink } from "@/types/links";
import { Information } from "@/config/information";
import { Typography } from "@/components/ui/typography";

export default function EmailLink({ children, withIcon }: ContactLink) {
  return (
    <Link
      aria-label="Send us an email"
      href={Information.email.mail}
      target="_blank"
      className="flex items-center gap-4"
    >
      {withIcon && <MailIcon className="text-primary w-4 h-4" />}
      <Typography tone={"secondary"}>
        {children || Information.email.label}
      </Typography>
    </Link>
  );
}
