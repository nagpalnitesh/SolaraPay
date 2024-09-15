import { twMerge } from "tailwind-merge";
import TextButton from "../components/TextButton";

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
  return (
    <section className="py-24 overflow-x-clip md:-mt-28">
      <div className="container mx-auto">
        <h2 className="font-heading font-black text-4xl lg:text-6xl text-center mx-auto max-w-3xl">
          Explore the Next Generation of Payments with TransactX
        </h2>
        <div className="mt-36 flex lg:mt-10 overflow-x-scroll py-28 px-1.5">
          <div className="flex flex-none gap-8">
            {cardData.map((data, i) => (
              <div key={i}>
                <div className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group">
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300",
                      data.color === "lime" && "bg-lime-500",
                      data.color === "cyan" && "bg-cyan-500",
                      data.color === "violet" && "bg-violet-500"
                    )}
                  ></div>
                  <div
                    className={twMerge(
                      "absolute size-16 rounded-xl bg-fuchsia-500 top-1.5 right-1.5 -z-10 group-hover:bg-fuchsia-400",
                      data.color === "lime" &&
                        "bg-lime-500 group-hover:bg-lime-400",
                      data.color === "cyan" &&
                        "bg-cyan-500 group-hover:bg-cyan-400",
                      data.color === "violet" &&
                        "bg-violet-500 group-hover:bg-violet-400"
                    )}
                  ></div>
                  <div className="absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]"></div>
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
                  <div className="flex justify-between mt-12">
                    <TextButton children={"Learn More"} color={data.color} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({ title }) => (
              <div
                key={title}
                className="size-2.5 bg-zinc-500 rounded-full cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
