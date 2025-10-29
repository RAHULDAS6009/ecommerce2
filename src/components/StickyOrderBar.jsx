import React, { useEffect, useMemo, useState } from "react";

/**
 * StickyOrderBar
 * - Fixed bottom bar, full-width
 * - Mobile-first; works on desktop too
 * - Optional "show on scroll" behavior
 *
 * Props:
 *  - href?: string            -> where the CTA goes (e.g. "/checkout")
 *  - onClick?: () => void     -> optional handler if you want to open a modal instead of a link
 *  - ctaText?: string         -> left big text (default: "Order Now – Cash on Delivery")
 *  - subText?: string         -> small supporting text (default: "15 days money back guarantee")
 *  - bg?: string              -> background color (default: "#78C043" green)
 *  - textColor?: string       -> text color (default: "#fff")
 *  - zIndex?: number          -> default: 9998 (put your WhatsApp above with 9999)
 *  - showOnScroll?: boolean   -> only show after user scrolls a bit (default: true)
 *  - minScrollPx?: number     -> px to scroll before showing (default: 120)
 *  - stickyOnMobileOnly?: boolean -> show only on <=768px (default: false)
 */
const StickyOrderBar = ({
  href = "/checkout",
  onClick,
  ctaText = "Order Now – Cash on Delivery",
  subText = "15 days money back guarantee",
  bg = "#78C043",
  textColor = "#ffffff",
  zIndex = 9998,
  showOnScroll = true,
  minScrollPx = 120,
  stickyOnMobileOnly = false,
}) => {
  const [visible, setVisible] = useState(!showOnScroll);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (!showOnScroll) return;
    const onScroll = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      setVisible(scrolled > minScrollPx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showOnScroll, minScrollPx]);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  }, []);

  if (closed) return null;
  if (stickyOnMobileOnly && !isMobile) return null;

  const Bar = (
    <div
      role="region"
      aria-label="Order now bar"
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex,
        background: bg,
        color: textColor,
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 12px",
        boxShadow: "0 -8px 20px rgba(0,0,0,.12)",
        transform: "translateZ(0)",
      }}
    >
      {/* content wrapper for max width */}
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          alignItems: "center",
          gap: 12,
          paddingInline: 8,
        }}
      >
        {/* cart icon */}
        <span aria-hidden="true" style={{ display: "inline-flex" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6h15l-1.5 8.5a2 2 0 0 1-2 1.7H9.2a2 2 0 0 1-2-1.6L5 3H2"
              stroke={textColor}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="20" r="1.6" fill={textColor} />
            <circle cx="18" cy="20" r="1.6" fill={textColor} />
          </svg>
        </span>

        {/* texts */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
          <strong
            style={{
              fontSize: 16,
              lineHeight: 1.1,
              letterSpacing: 0.2,
              margin: 0,
            }}
          >
            {ctaText}
          </strong>
          <span style={{ fontSize: 12, opacity: 0.95 }}>{subText}</span>
        </div>

        {/* CTA button */}
        {/* {href && !onClick ? (
          <a
            href={href}
            style={{
              textDecoration: "none",
              background: "#111",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 14px",
              borderRadius: 8,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "nowrap",
            }}
            aria-label="Proceed to checkout"
          >
            Order Now
          </a>
        ) : (
          <button
            onClick={onClick}
            style={{
              background: "#111",
              color: "#fff",
              fontWeight: 700,
              padding: "10px 14px",
              borderRadius: 8,
              border: 0,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            aria-label="Proceed"
          >
            Order Now
          </button>
        )} */}

        {/* close button
        <button
          onClick={() => setClosed(true)}
          aria-label="Hide order bar"
          style={{
            marginLeft: 6,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "none",
            background: "rgba(0,0,0,.2)",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          title="Close"
        >
          ✕
        </button> */}
      </div>
    </div>
  );

  return Bar;
};

export default StickyOrderBar;
