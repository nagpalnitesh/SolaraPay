import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    avatar: "/assets/images/avatar-erica-wyatt.jpg",
    name: "Erica Wyatt",
    title: "Product Manager - BlockLink",
  },
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    avatar: "/assets/images/avatar-harry-bender.jpg",
    name: "Harry Bender",
    title: "Product Manager - BlockLink",
  },
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    avatar: "/assets/images/avatar-cameron-yang.jpg",
    name: "Cameron Yanng",
    title: "Product Manager - BlockLink",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-zinc-800">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {testimonials.map(({ title, name, avatar, text }, index) => (
            <motion.blockquote
              key={index}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.5,
                ease: "easeInOut",
                duration: 1,
              }}
              className={twMerge(index === 2 && "md:hidden lg:block")}
            >
              <p className="font-heading text-3xl lg:text-4xl font-black">
                &ldquo;{text}&rdquo;
              </p>
              <cite className="mt-8 block">
                <div className="flex gap-3 items-center">
                  <div>
                    <div
                      className="size-16 bg-zinc-700 rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${avatar})`,
                      }}
                    >
                      {/* <img className="rounded-full" src={avatar} alt={name} /> */}
                    </div>
                  </div>
                  <div>
                    <div className="not-italic text-lg font-black">{name}</div>
                    <div className="text-zinc-400 not-italic">{title}</div>
                  </div>
                </div>
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
