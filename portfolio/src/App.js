import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
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
      title: "RHD Classifier",
      desc: "Detecting brain damage via MFCCs.",
      kpi: "79 % accuracy",
    },
    {
      title: "SmartStockX",
      desc: "Inventory management with real-time updates.",
      kpi: "3 front-end pages",
    },
    {
      title: "Mental-Health Chatbot",
      desc: "AI-based emotion classifier.",
      kpi: "15k text samples",
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
    "AI / ML": "RHD Classifier",
    "Data Analytics": "RHD Classifier",
    "Web Dev": "ECIMS • SmartStockX",
    Programming: "Mental-Health Chatbot",
    "DevOps / Tools": "ECIMS CI/CD Pipeline",
    Cybersecurity: "Coursework & Self-Study",
  };

  /* ───────── JSX ───────── */
  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-white font-sans">
      {/* ─── Hero ───────────────────────────────────────────── */}
{/* ─── Hero with public/bg.png & gradient overlay ────────────────── */}
<section
  className="relative flex flex-col items-center justify-center h-screen text-center px-4"
  style={{
    background: `
      linear-gradient(
        to bottom,
        rgba(15,23,42,0.8),
        rgba(31,41,55,0.9)
      ),
      url('/bg.png') center/cover no-repeat
    `
  }}
>
  {/* Animated title & subtitle */}
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl font-bold text-white"
  >
    Visar Rraci
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="mt-4 text-xl text-white"
  >
    Published Author&nbsp;|&nbsp;Software Engineer&nbsp;|&nbsp;Boxer
  </motion.p>

  {/* Counters */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0 }}
    className="mt-10 flex flex-wrap justify-center gap-6 text-yellow-400 font-semibold"
  >
    {/* ...your CountUp code here */}
  </motion.div>

  {/* Button */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.2 }}
    className="mt-8"
  >
    <a
      href="#projects"
      className="bg-yellow-400 text-black font-medium px-6 py-2 rounded shadow hover:bg-yellow-300 transition"
    >
      View&nbsp;My&nbsp;Work
    </a>
  </motion.div>
</section>


      {/* ─── Projects ──────────────────────────────────────── */}
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
              transition={{ delay: i * 0.2 }}
              className="bg-slate-700 border border-slate-600 p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-slate-300">{p.desc}</p>

              {/* KPI chip */}
              <span className="inline-block mt-4 bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded text-xs">
                {p.kpi}
              </span>
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

        {/* legend */}
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
