import React from "react";

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Official WhatsApp Icon
 * Uses the authentic WhatsApp speech bubble and telephone receiver vector paths.
 * Renders with fill="currentColor" by default, matching Lucide icon conventions.
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = "w-5 h-5",
  size,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size || width || 24}
      height={size || height || 24}
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M19.05 4.91C16.96 2.82 14.18 1.66 11.22 1.66 5.34 1.66 0.54 6.46 0.54 12.34c0 1.93.51 3.82 1.48 5.48L0.55 23.34l5.85-1.54c1.57.86 3.34 1.31 5.13 1.31h.01c5.88 0 10.68-4.8 10.68-10.68 0-2.86-1.12-5.56-3.15-7.58zM11.22 21.05c-1.63 0-3.23-.44-4.63-1.27l-.33-.2-3.41.89 1.11-3.32-.22-.34c-.87-1.34-1.33-2.9-1.33-4.51 0-4.64 3.77-8.42 8.42-8.42 2.25 0 4.36.88 5.94 2.47 1.58 1.59 2.46 3.7 2.46 5.94-.01 4.64-3.79 8.42-8.44 8.42zm4.59-6.31c-.25-.13-1.48-.73-1.71-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.26-.76-.68-1.27-1.52-1.42-1.76-.15-.24-.01-.37.11-.49.11-.11.25-.29.37-.44.12-.15.16-.26.24-.44.08-.17.04-.33-.02-.46-.06-.13-.57-1.38-.78-1.89-.2-.49-.41-.42-.57-.43-.15 0-.32-.01-.49-.01-.17 0-.45.06-.69.31-.24.25-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.84 2.81 4.45 3.94.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.08 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.07-.11-.25-.17-.5-.3z" />
    </svg>
  );
};

export default WhatsAppIcon;
