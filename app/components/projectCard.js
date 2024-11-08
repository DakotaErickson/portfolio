export default function ProjectCard({ title, technologies, description }) {
    return (
      <div className="w-full rounded flex flex-col items-start justify-between px-8 py-4 space-y-2 overflow-visible" style={{ backgroundColor: '#121c17' }}>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-slate-50">Technologies: {technologies}</p>
        <p className="text-slate-50">{description}</p>
      </div>
    );
  }
  