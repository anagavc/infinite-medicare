export const SectionTitle = ({ title }) => {
  return (
    <div className="flex space-x-4 items-center">
      <span className="w-1/5 h-2 bg-sec"></span>
      <h4 className="text-2xl font-heading font-bold text-sec">{title}</h4>
    </div>
  );
};
export const Paragraph = ({ title, color, align }) => {
  return (
    <p className={` text-${align} font-body text-base text-${color}`}>
      {title}
    </p>
  );
};
export const HeadingSix = ({ title, color, align, size }) => {
  return (
    <h6
      className={`text-${size} text-${color}  font-heading text-${align} font-bold  w-full`}
    >
      {title}
    </h6>
  );
};
