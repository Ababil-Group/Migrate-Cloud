"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type TFadeInLeftWithSlowBounceProps = {
  children: React.ReactNode;
  className?: string;
};

const FadeInDownWithSlowBounce = ({
  children,
  className,
}: TFadeInLeftWithSlowBounceProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInDownWithSlowBounce;
