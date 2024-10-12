import React from "react";

interface MetricCardProps {
  percentage: string;
  title: string;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ percentage, title, description }) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-[18px] border border-solid border-black flex-grow">
      <span className="font-bold text-[5rem] text-black">{percentage}</span>
      <div className="flex flex-col gap-2">
        <span className="font-bold text-[1.25rem] text-black">{title}</span>
        <span className="font-normal text-[1rem] text-black">{description}</span>
      </div>
    </div>
  );
};

const LinkShieldMetrics: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 self-stretch">
      {/* Metric Card 1 */}
      <MetricCard
        percentage="98%"
        title="Client Satisfaction Rate"
        description="Our clients consistently rate our services highly, reflecting our commitment to excellence and customer satisfaction."
      />
      
      {/* Metric Card 2 */}
      <MetricCard
        percentage="90%"
        title="Reduction in Downtime"
        description="By implementing advanced solutions, we’ve helped clients achieve a 90% reduction in system downtime, ensuring uninterrupted operations."
      />
      
      {/* Metric Card 3 */}
      <MetricCard
        percentage="85%"
        title="Faster Project Delivery"
        description="LinkShield's efficient processes and expert team enable us to deliver projects 85% faster than the industry average, accelerating your time-to-market."
      />
    </div>
  );
};

export default LinkShieldMetrics;
