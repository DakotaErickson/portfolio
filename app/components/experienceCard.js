export default function ExperienceCard({ title, dateRange, techStack, description }) {
    return (
      <div className="w-full rounded flex flex-col items-start justify-between px-8 py-4 space-y-2 overflow-visible" style={{ backgroundColor: '#121c17' }}>
        <p className="font-semibold text-white">{title}, {dateRange}</p>
        <p className="text-slate-50">Tech Stack: {techStack}</p>
        <p className="text-slate-50">{description}</p>
      </div>
    );
  }
  