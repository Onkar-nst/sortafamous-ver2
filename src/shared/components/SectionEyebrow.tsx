import type { ComponentPropsWithoutRef } from "react";

interface SectionEyebrowProps extends ComponentPropsWithoutRef<"span"> {
  label: string;
}

/**
 * Uniform section eyebrow used across every collection section:
 * a blinking green dot + uppercase label + up-right arrow.
 * Styling lives in .sf-eyebrow (public/assets/css/main.css) so size, weight,
 * colour, gap and the dot animation are identical everywhere. It renders flush
 * to the left of whatever container it sits in.
 */
export default function SectionEyebrow({ label, className = "", ...rest }: SectionEyebrowProps) {
  return (
    <span className={`sf-eyebrow ${className}`.trim()} {...rest}>
      <span className="sf-eyebrow__dot" aria-hidden="true" />
      <span className="sf-eyebrow__label">{label}</span>
      <svg
        className="sf-eyebrow__arrow"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M4 12L12 4M12 4H5.5M12 4V10.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
