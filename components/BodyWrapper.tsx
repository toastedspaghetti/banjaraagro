// components/BodyWrapper.tsx
"use client";

import { usePathname } from "next/navigation";

export default function BodyWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInternal = pathname !== "/";
  const className = isInternal ? "page-internal" : "";

  return <div className={className}>{children}</div>;
}
