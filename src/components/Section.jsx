// ./Section.jsx
const Section = ({ left, right }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
      <div className="md:w-1/2">{left}</div>
      <div className="md:w-1/2 text-center md:text-right">{right}</div>
    </div>
  );
};

export default Section;