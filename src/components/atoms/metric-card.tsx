const MetricCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex flex-col gap-3 items-center">
    <span>{icon}</span>
    <span className="text-[#252425] text-xl md:text-2xl font-semibold">
      {value}
    </span>
    <span className="text-[#7A7A7A] text-sm md:text-md">{label}</span>
  </div>
);

export default MetricCard;
