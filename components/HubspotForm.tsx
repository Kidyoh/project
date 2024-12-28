"use client";

import { useEffect } from "react";

interface HubspotFormProps {
  onFormReady?: () => void;
  className?: string;
}

export function HubspotForm({ onFormReady, className }: HubspotFormProps) {
  useEffect(() => {
    const loadForm = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          region: "na1",
          portalId: "48492375",
          formId: "ab7d73b8-d09e-41a5-9944-a93db3f25b0e",
          target: "#hubspotForm",
          onFormReady: () => {
            onFormReady?.();
          },
          css: "",
          cssClass: className,
          submitButtonClass: "hs-button",
          customStyle: {
            backgroundColor: "transparent",
            backgroundImage: "none"
          },
          inlineMessage: "Thanks for submitting the form.",
          errorMessageClass: "hs-error-msg text-red-500",
          formFieldClass: "hs-form-field",
          inputClass: "hs-input",
          labelClass: "hs-label",
        });
      }
    };

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = loadForm;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onFormReady, className]);

  return <div id="hubspotForm" className="bg-transparent" />;
}
