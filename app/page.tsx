'use client'
import ExperienceCard from "./components/experienceCard";
import ProjectCard from "./components/projectCard";
import Image from "next/image";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleWorkHistoryClick = () => {
    setActiveSection("workHistory");
    setMenuOpen(false);
  };

  const handleSideProjectsClick = () => {
    setActiveSection("sideProjects");
    setMenuOpen(false);
  };

  const handleResetClick = () => setActiveSection("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <header className="w-full h-14 rounded-full flex items-center justify-between px-4 sm:px-8 whitespace-nowrap relative" style={{ backgroundColor: '#121c17' }}>
        <h1
          className="text-slate-50 text-2xl sm:text-3xl cursor-pointer hover:text-[#50795d] truncate overflow-hidden"
          onClick={handleResetClick}
        >
          Dakota Erickson
        </h1>
        
        <nav className="hidden custom:flex"> {/* Now only displays on screens >= 750px */}
        <ul className="flex space-x-4 sm:space-x-6">
          <li>
            <a href="#workHistory" className="text-[#e1eae2] hover:text-[#50795d]" onClick={handleWorkHistoryClick}>Work History</a>
          </li>
          <li>
            <a href="#sideProjects" className="text-[#e1eae2] hover:text-[#50795d]" onClick={handleSideProjectsClick}>Side Projects</a>
          </li>
          <li>
            <a href="/Resume.pdf" className="text-[#e1eae2] hover:text-[#50795d]" target="_blank" rel="noopener noreferrer" download="Dakota-Erickson-Resume.pdf">
              Download Resume
            </a>
          </li>
        </ul>
      </nav>

      <button className="custom:hidden text-[#e1eae2] hover:text-[#50795d]" onClick={() => setMenuOpen(!menuOpen)}>
        <HiMenu size={28} />
      </button>

        {menuOpen && (
          <nav className="absolute top-full mt-1 left-0 w-full flex flex-col items-center bg-[#121c17] rounded-lg py-4 space-y-4 sm:hidden">
            <a href="#workHistory" className="text-[#e1eae2] hover:text-[#50795d]" onClick={handleWorkHistoryClick}>Work History</a>
            <a href="#sideProjects" className="text-[#e1eae2] hover:text-[#50795d]" onClick={handleSideProjectsClick}>Side Projects</a>
            <a href="/Resume.pdf" className="text-[#e1eae2] hover:text-[#50795d]" target="_blank" rel="noopener noreferrer" download="Dakota-Erickson-Resume.pdf">
              Download Resume
            </a>
          </nav>
        )}
      </header>



      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-full">
        {activeSection === "" && (
          <section className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-12 gap-4 sm:gap-8 max-w-full">
            <div className="text-4xl sm:text-5xl font-extrabold" style={{ color: '#121c17' }}>
              <p>Who am I?</p>
            </div>
            <div className="text-lg sm:text-xl text-slate-50 max-w-full">
              <p>
                I am a software engineer who is constantly seeking learning opportunities, enhancing my skills by experimenting with new technologies, and looking for ways to contribute to innovative projects.
              </p>
            </div>
          </section>
        )}

        <section className="w-full max-w-4xl">
          {activeSection === "workHistory" && (
            <section className="flex flex-col p-6 sm:p-12 gap-4 sm:gap-8 max-w-full">
              <div className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left" style={{ color: '#121c17' }}>
                <p>Work History</p>
              </div>
              <div className="flex flex-col space-y-4 text-lg text-slate-50">
                <ExperienceCard title="Software Engineer, TaxRise" dateRange="September 2023 - Present" techStack="Python (FastAPI), Javascript (Nodejs), MySQL, Salesforce" description="I joined TaxRise as a software engineer tasked with creating and maintaining Python (FastAPI) and Javascript (Node.js) APIs. I also had the opportunity to do some serverless AWS development (Python lambdas) as well as exposure to Salesforce development." />
                <ExperienceCard title="Software Engineer, Figure" dateRange="March 2021 - July 2023" techStack="Kotlin (Spring Boot), Apache Kafka, Docker/Kubernetes, PostgreSQL" description="I was a founding member of the private label team, working on the back end using Kotlin (Spring Boot). I created an environment that allows for loan officers to efficiently create and maintain leads and to transition leads into loan applications. This was a mix between greenfield work and integrating with existing services to support business requirements." />
                <ExperienceCard title="Software Engineer, NetApp" dateRange="March 2021 - July 2023" techStack="Python (Flask), TypeScript (Angular)" description="I accepted a position as a software engineer at NetApp after graduating college. I worked primarily in Python (Flask), but I was exposed to many different technologies. As part of an amazing team, I always managed to deliver on what was requested while dealing with shifting priorities." />
              </div>
            </section>
          )}

          {activeSection === "sideProjects" && (
            <section className="flex flex-col p-6 sm:p-12 gap-4 sm:gap-8 max-w-full">
              <div className="text-4xl sm:text-5xl font-extrabold text-center sm:text-left" style={{ color: '#121c17' }}>
                <p>Side Projects</p>
              </div>
              <div className="flex flex-col space-y-4 text-lg text-slate-50">
                <ProjectCard title="Portfolio website" technologies="React, Next.js, TailwindCSS" description="I created this website as an opportunity to showcase myself, but also to gain exposure to modern front end technologies." />
                <ProjectCard title="Real-time chat app" technologies="Node.js, Socket.io" description="A real-time chat app using Node.js and Socket.io, allowing users to join a room and chat. Includes geolocation for sending user location." />
                <ProjectCard title="Blog App" technologies="Flask, SQLite" description="A blog website with full CRUD functionality, developed to learn backend principles and tools like Flask and SQLite." />
              </div>
            </section>
          )}
        </section>
      </main>

      <footer className="w-full h-14 rounded-full flex items-center justify-center px-8" style={{ backgroundColor: '#121c17' }}>
        <a href="https://github.com/DakotaErickson?tab=repositories" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
          <Image src="/GitHub_Logo.png" alt="Github icon" priority width={64} height={64} />
        </a>
        <a href="https://linkedin.com/in/dakota-erickson" className="flex items-center gap-2 hover:underline ml-8" target="_blank" rel="noopener noreferrer">
          <Image src="/Linkedin_Logo.png" alt="LinkedIn icon" priority width={64} height={64} />
        </a>
      </footer>
    </div>
  );
}
