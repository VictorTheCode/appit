import { FeatureProps } from "@/interface";

const FeatureCard = ({ title, icon, description }: FeatureProps) => {
  return (
    <div>
      <div>
        <div className="p-5 border border-gray-900 rounded-lg shadow-md flex flex-col gap-3">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
