"use client";

import Navbar from "../Components/Navbar";
import Image from "next/image";

// ---------------------- Awards ----------------------
const awards = [
  {
    title: "POSTER PRESENTATION",
    subtitle: "AVS College of Engineering",
    description: `Won 1st Prize in the Poster Presentation event at AVS College of Engineering by presenting an innovative and visually appealing poster on a technical topic.
The poster demonstrated strong understanding of the subject and practical application of concepts.
Evaluated by an expert jury, it was highly appreciated for clarity, design, and creativity.
Received a cash prize of ₹750 along with a certificate of recognition for outstanding performance.`,
    image: "/avs.jpeg",
  },
  {
    title: "PAPER PRESENTATION",
    subtitle: "Excel College of Engineering",
    description: `Won 3rd Prize in the Paper Presentation event conducted at Excel College of Engineering.
Presented an innovative technical paper based on real-world problem solving concepts.
The presentation was evaluated by an expert jury panel and appreciated for clarity and creativity.
Received a cash prize of ₹500 along with an official participation and merit certificate.`,
    image: "/excel.jpeg",
  },
  {
    title: "POSTER PRESENTATION",
    subtitle: "Gnanamani College of Engineering",
    description: `Won 1st Prize in the Poster Presentation event conducted at Gnanamani College of Engineering by presenting a creative and technically strong poster based on an innovative real-world application.
The poster was highly appreciated by the expert jury panel for its clarity, visual design, and technical depth.
The presentation stood out among many participants and received special appreciation from the event coordinators.
A merit certificate was awarded in recognition of this outstanding achievement.`,
    image: "/gnanamani.jpeg",
  },
  {
    title: "Symposium Wins",
    subtitle: "Dhirajlal College of Engineering",
    description: `Won 2nd Prize in the Ideathon event conducted at Dhirajlal College of Engineering.
Developed an innovative solution for a real-world problem within the given time frame.
The project was evaluated by a panel of expert judges for creativity, feasibility, and technical implementation.
Received a cash prize of ₹200 along with a certificate of recognition for outstanding performance.`,
    image: "/dhirajlal.jpeg",
  },
  {
    title: "Awards Day",
    subtitle: "KIOT",
    description: `Received the Best in Co-Curricular Award at Knowledge Institute of Technology for outstanding participation and achievements in various co-curricular activities.
Secured 1st Place in the Tamil Poem Competition by presenting a creative and impactful poem that impressed the judges.`,
    image: "/kiot.jpeg",
  },
  {
    title: "Knowledge Institute of Technology",
    subtitle: "Techtastic Association KIOT",
    description: `Awarded Best Mentee by the Techtastic Association at KIOT for outstanding learning, active participation, and consistent guidance under mentorship programs.
Achieved 1st Place in Academics by securing top grades and demonstrating exceptional understanding of technical subjects.`,
    image: "/mentee.jpeg",
  },
];

// ---------------------- Hackathons ----------------------
const hackathons = [
  {
    title: "TNWISE 2025",
    subtitle: "PMC Tech, Hosur",
    description: "Reached final round",
    image: "/pmc.jpeg",
  },
  {
    title: "Devspark'25 KPR College",
    subtitle: "24 Hours Hackathon",
    description: "Active Participation",
    image: "/dev.jpeg",
  },
  {
    title: "Smart India Hackathon (SIH)",
    subtitle: "Odisha Government",
    description: "Finalist — 5 teams selected from 500 problem statements",
    image: "/sih.jpeg",
  },
];

// ---------------------- Certifications ----------------------
const certifications = [
  {
    title: "NPTEL – Industry 4.0 & IIoT",
    description: "Introduction to Industry 4.0 & IIoT - 73% Elite",
    image: "/industry.jpeg",
  },
  
  {
    title: "Oracle",
    description: "Oracle Certified Foundation Associate Certificate & Recognition",
    image: "/oracle.jpeg",
  },
  {
    title: "Infosys Springboard",
    description: "AI-first Software Engineering",
    image: "/infosys.jpeg",
  },
  {
    title: "Accenture",
    description: "Technology Apprenticeship job simulation",
    image: "/accenture.jpeg",
  },
];

// ---------------------- Reusable Section ----------------------
function AchievementSection({ title, items }: any) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl text-blue-400 mb-8 text-center">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={`bg-slate-800 rounded-2xl overflow-hidden transform animate-slide-up transition-all duration-700 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] ${
              item.highlight ? "border-2 border-yellow-400" : ""
            }`}
            style={{
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "forwards",
            }}
          >
            <div className="relative w-full h-48 border-b border-gray-600 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-1">
                {item.title}
              </h3>
              {item.subtitle && (
                <h4 className="text-gray-400 mb-2">{item.subtitle}</h4>
              )}
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------------------- Main Page ----------------------
export default function Achievements() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-32 px-6 md:px-24">
        <h1 className="text-4xl text-blue-400 mb-12 text-center">
          Achievements
        </h1>

        <AchievementSection title="Awards & Appreciations" items={awards} />
        <AchievementSection title="Hackathons" items={hackathons} />
        <AchievementSection title="Certifications" items={certifications} />
      </section>
      <style jsx>{`
        @keyframes slide-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.7s forwards;
        }
      `}</style>
    </>
  );
}
