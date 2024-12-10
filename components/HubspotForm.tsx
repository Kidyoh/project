"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    hbspt: any;
  }
}

export function HubspotForm() {
  useEffect(() => {
    // Only initialize the form after the script has loaded
    const initForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "48492375",
          formId: "ab7d73b8-d09e-41a5-9944-a93db3f25b0e",
          target: "#hubspot-form-container"
        });
      }
    };

    // If the script is already loaded, initialize the form
    if (window.hbspt) {
      initForm();
    }
  }, []);

  return (
    <>
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "48492375",
              formId: "ab7d73b8-d09e-41a5-9944-a93db3f25b0e",
              target: "#hubspot-form-container"
            });
          }
        }}
      />
      <div id="hubspot-form-container" />
    </>
  );
}
