import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

export default function App() {
  /* ───────── Data ───────── */
  const projects = [
    {
      title: "RHD Classification Model",
      desc: "Detecting Right Hemisphere Brain Damage via Speech Analysis",
      kpi: "Achieved 79% accuracy (AUC: 0.88) using Support Vector Machine (SVM)",
      kpi2: "Extracted and aggregated 13 MFCC features to identify distinct speech patterns.",
    },
    {
      title: "ECIMS",
      desc: "Inventory Management System for Single Location Businesses",
      kpi: "Created interactive Figma storyboards detailing user flows for inventory, reorder processes, and supplier interactions.",
      kpi2: "Developed responsive login and sign-up pages using HTML, CSS, and React from Figma designs.",
    },
    {
      title: "Dysarthria Classification Model",
      desc: "Detecting Dysarthria via Speech Analysis",
      kpi: "Engineered a ResNet-18 CNN to classify dysarthric vs. healthy speech using 2D MFCC spectrograms",
      kpi2: "Achieved 82% accuracy (AUC: 0.89) using Residual Neural Networks (ResNet).",
    },
  ];

  const skills = [
    { skill: "AI / ML", level: 5 },
    { skill: "Data Analytics", level: 5 },
    { skill: "Web Dev", level: 4 },
    { skill: "Programming", level: 4 },
    { skill: "DevOps / Tools", level: 3 },
    { skill: "Cybersecurity", level: 2 },
  ];

  const legend = {
    "AI / ML": "TensorFlow, Scikit-learn, FastICA, MFCCs, CNNs, LLMs",
    "Data Analytics": "Pandas, NumPy, Feature Extraction, Preprocessing Audio Data",
    "Web Dev": "HTML, CSS, JavaScript, React, Node.js, Express",
    Programming: "Mental-Health Chatbot",
    "DevOps / Tools": "Git, Docker, Azure DevOps, CI/CD Pipelines, SQL, PHPUnit",
    Cybersecurity: "Coursework & Self-Study",
  };

  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white">
      {/* ─── Hero with Typewriter & Ellipsis ───────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden"
        style={{
          background: `
            linear-gradient(to bottom, rgba(15,23,42,0.8), rgba(31,41,55,0.9)),
            url('/bg2.png') center/cover no-repeat
          `,
        }}
      >
        {/* Your name in Nintendo font */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter
            words={["Visar Rraci"]}
            loop={1}
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={800}
            className="text-white text-4xl sm:text-5xl md:text-6xl"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-4"
        >
          <Typewriter
            words={[
              "Published Author | AI / ML Engineer | Full-Stack Developer",
            ]}
            loop={1}
            cursor
            cursorStyle="..."
            typeSpeed={80}
            deleteSpeed={30}
            delaySpeed={1200}
            className="text-white text-lg sm:text-xl"
          />
        </motion.div>

          {/* Counters */}
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-yellow-400 font-mono"
          >
          {[
            { label: "MSCST", string: (
            <>
              <span className="text-purple-500">LSU</span>
              <span>S</span>
            </>
            ) },
            { label: "GPA", string: "4.0" },
            { label: "Best Model Accuracy", string: "82%" },
          ].map((kpi) => (
            <div key={kpi.label} className="text-center">
            <span className="block text-2xl sm:text-3xl md:text-4xl">
              {kpi.string}
            </span>
            <span className="text-xs sm:text-sm text-slate-300">
              {kpi.label}
            </span>
            </div>
          ))}
          </motion.div>

          {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
          className="mt-8"
        >
          <a
          href="#projects"
          className="bg-yellow-400 text-black font-bold px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
          >
          View My Work
          </a>
        </motion.div>

        {/* Blinking ellipsis */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <span className="blink-ellipsis">…</span>
        </div>
      </section>

      {/* ─── Projects ─────────────────────────────────────────── */}
      <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold text-center mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3 }}
              className="bg-slate-700 border border-slate-600 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-slate-300">{p.desc}</p>
              <span className="inline-block mt-4 bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded text-xs">
                {p.kpi}
              </span>
              {p.kpi2 && (
                <span className="inline-block mt-4 bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded text-xs">
                  {p.kpi2}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Skills Snapshot ───────────────────────────────── */}
      <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Skills Snapshot</h2>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={skills} cx="50%" cy="50%" outerRadius="80%">
            <PolarGrid stroke="#475569" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: "#e2e8f0", fontSize: 12 }}
            />
            <PolarRadiusAxis angle={30} domain={[0, 5]} tick={false} />
            <Radar
              name="Proficiency"
              dataKey="level"
              stroke="#facc15"
              fill="#facc15"
              fillOpacity={0.4}
              animationDuration={1200}
            />
          </RadarChart>
        </ResponsiveContainer>

        <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
          {skills.map((s) => (
            <div key={s.skill}>
              <span className="font-medium text-slate-100">{s.skill}:</span>{" "}
              {legend[s.skill]}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
