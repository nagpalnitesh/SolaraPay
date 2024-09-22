import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Circle from "../components/Circle";
import CutCornerButton from "../components/CutCornerButton";
import Hexagon from "../components/Hexagon";

const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const cuboidRotate = useTransform(scrollYProgress, [0, 1], [45, -45]);
  const cylinderRotate = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[700px]" size={700} reverse />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon className="size-[1100px]" size={1100} duration={50} />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle
              className="absolute -top-[400px] left-[0px]"
              children={
                <motion.img
                  src="/assets/images/cuboid.png"
                  alt="Cuboid 3D image"
                  className="size-[140px]"
                  style={{ rotate: cuboidRotate }}
                />
              }
              animate
            />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle
              className="absolute -left-[600px] -top-[80px]"
              children={
                <motion.img
                  src="/assets/images/cylinder.png"
                  alt="Cylinder 3D image"
                  className="size-[140px]"
                  style={{ rotate: cylinderRotate }}
                />
              }
              animate
            />
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Start building using blockchain technology, with TransactX
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton children="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
