import type { CSSProperties, ReactNode } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/landing-theme";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  maxWidth?: number;
};

export default function SectionShell({
  id,
  children,
  className = "",
  style,
  dark = false,
  maxWidth = 1100,
}: SectionShellProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id={id}
      className={`landing-section ${className}`}
      style={{
        background: dark ? "linear-gradient(160deg, #060f1e 0%, #0A1D3D 60%, #0d2550 100%)" : style?.background ?? "#fff",
        ...style,
      }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp}
        style={{ maxWidth, margin: "0 auto" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
