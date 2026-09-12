type StatsCounterProps = {
  value: string | number;
  label: string;
  suffix?: string;
};

export function StatsCounter({ value, label, suffix = "" }: StatsCounterProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary">
        {value}
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-text-secondary uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
