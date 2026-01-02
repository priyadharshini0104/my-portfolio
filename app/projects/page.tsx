"use client";

import Navbar from "../Components/Navbar";
import Image from "next/image";

const mainProjects = [
  {
    title: "Rain Alert Notification",
    description: "A weather-based notification system that alerts farmers about upcoming rain events using API integration and predictive algorithms.",
    tech: "Python, Node.js, Weather API, Push Notifications",
    algorithm: "Used Rainfall Prediction algorithm with historical weather data & API integration to forecast rain probability.",
    image: "/Rain Alert.jpeg",
  },
  {
    title: "Smart Dustbin System",
    description: "IoT-based smart waste management system using ultrasonic sensors to monitor dustbin levels and notify authorities.",
    tech: "NodeMCU, Sensors, Flutter, Firebase",
    algorithm: "Ultrasonic sensor data monitored in real-time, processed to determine fill percentage, notifications triggered when bins are near full.",
    image: "/Dust-BIN.jpeg",
  },
  {
    title: "Agricare Website",
    description: "Soil image analysis & plant growth monitoring system with fertilizer recommendations & nearby shop locator.",
    tech: "Python, Flask, OpenCV, ML models, Google Maps API",
    algorithm: "Soil images analyzed using ML model to detect nutrient deficiency; plant growth compared with ideal images; fertilizer recommended based on analysis & location; weather data integrated for crop suggestions.",
    image: "/Agricare.jpeg",
  },
];

const smallProjects = [
  {
    title: "Flipkart Clone",
    description: "E-commerce clone with product listing, cart & checkout.",
    link: "https://www.linkedin.com/posts/priyadharshini-dhanasekaran-778017283_topperworld-webdevelopment-activity-7232748501820960769-hUna?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEThNIwBoeN7747-MfZEsyiBlgH465Eh75Y&utm_campaign=copy_link",
  },
  {
    title: "Fruit Classifier",
    description: "CNN model to classify fruit images.",
    link: "https://www.linkedin.com/posts/priyadharshini-dhanasekaran-778017283_codectechnology-aiinternship-cnn-activity-7344208494775934977-bUn8?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEThNIwBoeN7747-MfZEsyiBlgH465Eh75Y&utm_campaign=copy_link",
  },
  {
    title: "Memes to Melodies",
    description: "Instagram channel web page converting memes to music posts.",
    link: "https://www.linkedin.com/posts/priyadharshini-dhanasekaran-778017283_oasisinfobyte-activity-7226802469844963330-B28G?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAEThNIwBoeN7747-MfZEsyiBlgH465Eh75Y&utm_campaign=copy_link",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      {/* Main Projects */}
      <section className="bg-slate-900 text-white pt-32 px-6 md:px-24">
        <h1 className="text-4xl text-blue-400 mb-12 text-center">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden transform opacity-0 animate-slide-up transition-transform duration-700 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
              style={{ animationDelay: `${index * 0.3}s`, animationFillMode: "forwards" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="object-cover w-full h-64"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-400 mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <p className="text-gray-400 italic mb-2">Tech Stack: {project.tech}</p>
                <p className="text-gray-400 italic">Algorithm: {project.algorithm}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Small Projects */}
      <section className="bg-slate-900 text-white py-16 px-6 md:px-24">
        <h2 className="text-3xl text-blue-400 mb-6 text-center">Other Projects</h2>
        <p className="text-gray-300 mb-12 text-center text-lg">
          Click on the projects below to see detailed posts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {smallProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
            >
              <h3 className="text-xl text-blue-400 font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Animations */}
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.7s forwards; }
      `}</style>
    </>
  );
}
