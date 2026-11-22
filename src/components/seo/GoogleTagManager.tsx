import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * Google Tag Manager. GA4 and any other tags are configured inside the GTM
 * container, not in code. Renders nothing when no container ID is set.
 */
export function GoogleTagManager() {
  const id = siteConfig.analytics.gtmId;
  if (!id) return null;
  return (
    <Script id="gtm" strategy="lazyOnload">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

/** GTM's fallback for visitors with JavaScript disabled. Place right after <body>. */
export function GoogleTagManagerNoScript() {
  const id = siteConfig.analytics.gtmId;
  if (!id) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
