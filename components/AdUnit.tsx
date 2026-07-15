"use client";

import { useEffect, useRef } from "react";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  className?: string;
}

export default function AdUnit({ slot, format = "auto", className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    try {
      const adsbygoogle = (window as unknown as Record<string, unknown>).adsbygoogle as unknown[];
      if (adsbygoogle) {
        adsbygoogle.push({});
      }
    } catch {
      // AdBlock detectado o AdSense no configurado
    }
  }, []);

  if (!adsenseClient || !slot) {
    return null;
  }

  return (
    <div ref={adRef} className={"ads-container min-h-[90px] flex items-center justify-center " + className}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}