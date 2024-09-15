import CutCornerButton from "../components/CutCornerButton";
import TextButton from "../components/TextButton";

const listItems = [
  "Send money globally with minimal fees and maximum speed.",
  "Blockchain-based transactions with top-tier security and transparency.",
  "Fast, seamless payments for freelancers and small businesses worldwide.",
  "Access decentralized finance tools like lending and staking.",
  "Transparent currency conversions with real-time market rates.",
];

const FeaturesGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                Empowering the future of blockchain
              </h2>
              <p className="text-xl lg:text-2xl text-zinc-400 mt-8">
                TransactX provides roubust and secure infrastructure to support
                the next generation of decentralized applications.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                {listItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 outline-fuchsia-500/10 rounded-full -outline-offset-4">
                      <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold ">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex mt-12 gap-8">
                <CutCornerButton children={"Get Started"} />
                <TextButton children={"Learn More"} />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <img
                  src="/assets/images/torus-knot.png"
                  alt="Torus Knot 3D Image"
                  className="size-96 max-w-none"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Shape"
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <img
                  src="/assets/images/cone.png"
                  alt="Cone 3D Image"
                  className="size-96 max-w-none rotate-12"
                />
                <img
                  src="/assets/images/hemisphere.png"
                  alt="Hemisphere 3D Shape"
                  className="absolute size-96 top-3/4 -z-10"
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
                TransactX Drives the Future of Payments
              </h2>
              <div className="flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6">
                <p>
                  TransactX is revolutionizing global payments with seamless,
                  borderless transactions powered by blockchain. Our platform
                  enables individuals, freelancers, and businesses to send and
                  receive money with minimal fees, real-time tracking, and
                  transparent currency conversions, while integrating seamlessly
                  with DeFi services for added financial flexibility.
                </p>
                <p>
                  Built for scalability and security, TransactX ensures faster,
                  more secure transactions in a decentralized environment. With
                  an intuitive interface and robust protection, we’re making
                  cross-border payments simpler, more affordable, and accessible
                  to everyone.
                </p>
              </div>
              <div className="flex mt-12 gap-8">
                <CutCornerButton children={"Get Started"} />
                <TextButton children={"Learn More"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
