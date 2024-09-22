const latestPosts = [{}];

import type { CollectionEntry } from "astro:content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Card from "../components/Card";
import CutCornerButton from "../components/CutCornerButton";
import Tag from "../components/Tag";
import { getPostColorFromCategory } from "../utils/postUtils";

const LatestPosts = (props: { latestPosts: CollectionEntry<"blog">[] }) => {
  const { latestPosts } = props;
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "start center"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

  return (
    <section className="py-60">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Discover the Latest Trends and Insights in Crypto Payments
          </h2>
          <p className="text-xl lg:text-2xl text-center text-zinc-400 mt-8">
            Everything you need to know about crypto payments.
          </p>
        </div>
        <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, category, description } }, i) => (
                <Card
                  key={i}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 1 || i === 3) && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              )
            )}
          </div>
          <motion.div
            className="hidden md:flex flex-col gap-8"
            ref={targetRef}
            style={{
              marginTop,
            }}
          >
            {latestPosts.map(
              ({ data: { title, category, description } }, i) => (
                <Card
                  key={i}
                  buttonText="Read More"
                  color={getPostColorFromCategory(category)}
                  className={twMerge((i === 0 || i === 2) && "md:hidden")}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="font-heading font-black text-3xl mt-3">
                    {title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-6">{description}</p>
                </Card>
              )
            )}
          </motion.div>
        </div>
        <div className="flex justify-center mt-48 md:mt-32">
          <CutCornerButton children={"Read More"} />
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
