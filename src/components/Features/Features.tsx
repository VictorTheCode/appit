import FeatureCard from "./FeatureCard";
import { featuresData } from "./features.ts";

const Features = () => {
  return (
    <div className="flex flex-col items-center">
      <header className="flex flex-col items-center gap-3">
        <h1 className="text-[4rem] font-bold">Discover Appit Features</h1>
        <p className="text-center text-xl text-gray-500 max-w-xl">
          Explore Appit's powerful features designed to help you connect, share
          and engage with your community effortlessly.
        </p>
      </header>
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
