import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Card from "../components/Card";

const cardData = [
  {
    title: "Cross-Border Payments Simplified",
    image: "/assets/images/pill.png",
    description:
      "Send and receive money across borders effortlessly with blockchain-backed transactions. TransactX eliminates the costly intermediaries, offering faster transfers and significantly lower fees than traditional methods.",
    color: "fuchsia",
  },
  {
    title: "Cross-Border Payments Simplified",
    image: "/assets/images/cuboid.png",
    description:
      "Send and receive money across borders effortlessly with blockchain-backed transactions. TransactX eliminates the costly intermediaries, offering faster transfers and significantly lower fees than traditional methods.",
    color: "lime",
  },
  {
    title: "Cross-Border Payments Simplified",
    image: "/assets/images/cone.png",
    description:
      "Send and receive money across borders effortlessly with blockchain-backed transactions. TransactX eliminates the costly intermediaries, offering faster transfers and significantly lower fees than traditional methods.",
    color: "cyan",
  },
  {
    title: "Cross-Border Payments Simplified",
    image: "/assets/images/icosahedron.png",
    description:
      "Send and receive money across borders effortlessly with blockchain-backed transactions. TransactX eliminates the costly intermediaries, offering faster transfers and significantly lower fees than traditional methods.",
    color: "violet",
  },
];

const FeaturesCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) =>
        curr === cardData.length - 1 ? 0 : curr + 1
      );
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex, isHovered]);
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl lg:text-6xl text-center mx-auto max-w-3xl">
          Explore the Next Generation of Payments with TransactX
        </h2>
        <div className="mt-36 lg:mt-48 flex">
          <div className="flex flex-none gap-8">
            {cardData.map((data, index) => (
              <div
                key={index}
                className="inline-flex transition-all duration-500"
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Card
                  key={data.title}
                  className="max-w-xs md:max-w-md"
                  color={data.color}
                >
                  <div className="flex justify-center -mt-28">
                    <div className="inline-flex relative">
                      <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
                      <img
                        src={data.image}
                        alt="Pill Image"
                        className="size-40 group-hover:-translate-y-6 transition duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="font-heading font-black text-3xl mt-12">
                    {data.title}
                  </h3>
                  <p className="text-lg text-zinc-400 mt-4">
                    {data.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }, index) => (
              <div
                key={index}
                className={twMerge(
                  "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                  index === selectedCardIndex && "bg-zinc-300"
                )}
                onClick={() => setSelectedCardIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
