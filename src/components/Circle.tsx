import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Circle = (
  props: ComponentPropsWithoutRef<"div"> & { animate?: boolean }
) => {
  const { children, className, animate = false } = props;
  return (
    <div
      className={twMerge(
        "bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={twMerge(
          "absolute rounded-full inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10",
          animate && " border-[6px] border-transparent border-t-fuchsia-500/30"
        )}
      />
      {children}
    </div>
  );
};

export default Circle;
