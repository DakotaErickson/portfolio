export default function ProjectCard({ title, technologies, description, link }) {
  return (
    <div className="w-full rounded flex flex-col items-start justify-between px-8 py-4 space-y-2 overflow-visible" style={{ backgroundColor: '#121c17' }}>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-slate-50">Technologies: {technologies}</p>
      <p className="text-slate-50">{description}</p>
      {link && ( 
        <a href={link} className="mt-1 hover:text-hoverGreen" target="_blank" rel="noopener">Give it a try →</a>
      )}
    </div>
  );
}