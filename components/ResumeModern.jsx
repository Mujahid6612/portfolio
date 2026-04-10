import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPrint,
  FaBriefcase,
  FaGraduationCap,
  FaGlobe,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { workExperience } from "../data/workExperience";
import {
  resumeProfile,
  resumeSkillGroups,
  resumeEducation,
  resumeLanguages,
} from "../data/resumeProfile";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45 },
  }),
};

const ResumeModern = () => {
  const router = useRouter();

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black relative overflow-hidden print:bg-white print:from-white print:via-white print:to-white">
      <div className="absolute inset-0 overflow-hidden print:hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-40">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#00df9a] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 pb-20 pt-28 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="no-print flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <button
            type="button"
            onClick={handleBackHome}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-600 bg-zinc-900/60 text-sm font-semibold normal-case text-zinc-300 hover:border-[#00df9a]/50 hover:text-[#00df9a] hover:bg-zinc-900 transition-colors duration-200"
          >
            ← Back to portfolio
          </button>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00df9a] text-black text-sm font-semibold hover:bg-[#00c88a] transition-colors shadow-lg shadow-[#00df9a]/20"
            >
              <FaPrint className="text-base" />
              Print / Save as PDF
            </button>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="resume-paper rounded-2xl border border-[#00df9a]/25 bg-zinc-900/80 backdrop-blur-md shadow-2xl shadow-black/40 overflow-hidden print:shadow-none print:border print:border-gray-300 print:bg-white print:rounded-none"
        >
          <header className="px-6 sm:px-10 pt-10 pb-8 border-b border-white/10 print:border-gray-200 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 print:from-white print:to-white">
            <h1 className="text-3xl sm:text-4xl font-bold text-white print:text-gray-900 tracking-tight">
              {resumeProfile.name}
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-[#00df9a] print:text-emerald-700 font-semibold">
              {resumeProfile.title}
            </p>
            <p className="mt-4 text-gray-300 print:text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl">
              {resumeProfile.summary}
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 print:text-gray-600">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#00df9a] print:text-emerald-700 shrink-0" />
                <a
                  href={`mailto:${resumeProfile.email}`}
                  className="hover:text-[#00df9a] print:text-gray-800 print:no-underline"
                >
                  {resumeProfile.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-[#00df9a] print:text-emerald-700 shrink-0" />
                <a
                  href={`tel:${resumeProfile.phoneTel}`}
                  className="hover:text-[#00df9a] print:text-gray-800 print:no-underline"
                >
                  {resumeProfile.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#00df9a] print:text-emerald-700 shrink-0" />
                <span>{resumeProfile.location}</span>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {resumeProfile.links.map((link) => {
                const Icon =
                  link.label === "GitHub"
                    ? FaGithub
                    : link.label === "LinkedIn"
                    ? FaLinkedin
                    : HiOutlineExternalLink;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-200 print:border-gray-300 print:text-gray-800 text-sm hover:border-[#00df9a]/50 hover:text-[#00df9a] transition-colors"
                  >
                    <Icon className="text-[#00df9a] print:text-emerald-700" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </header>

          <div className="grid lg:grid-cols-12 gap-0 lg:gap-0">
            <aside className="lg:col-span-4 px-6 sm:px-8 py-8 border-b lg:border-b-0 lg:border-r border-white/10 print:border-gray-200 bg-black/20 print:bg-gray-50">
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.section custom={0} variants={fadeUp} initial="hidden" animate="visible">
                  <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00df9a] print:text-emerald-800 mb-4">
                    Skills
                  </h2>
                  <div className="space-y-5">
                    {resumeSkillGroups.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-xs font-semibold text-gray-500 print:text-gray-600 mb-2">
                          {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/20 print:bg-white print:text-emerald-900 print:border-emerald-200"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>

                {resumeEducation.length > 0 && (
                  <motion.section custom={1} variants={fadeUp} initial="hidden" animate="visible">
                    <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00df9a] print:text-emerald-800 mb-4">
                      <FaGraduationCap className="text-sm" />
                      Education
                    </h2>
                    <ul className="space-y-4">
                      {resumeEducation.map((edu, i) => (
                        <li key={i} className="text-sm text-gray-300 print:text-gray-800">
                          <p className="font-semibold text-white print:text-gray-900">
                            {edu.degree}
                          </p>
                          {edu.major && (
                            <p className="text-gray-400 print:text-gray-600 mt-0.5">
                              Major: {edu.major}
                            </p>
                          )}
                          <p className="text-gray-300 print:text-gray-800 mt-1">
                            {edu.school}
                          </p>
                          {edu.location && (
                            <p className="text-xs text-gray-500 print:text-gray-600 mt-0.5 flex items-center gap-1">
                              <FaMapMarkerAlt className="shrink-0" />
                              {edu.location}
                            </p>
                          )}
                          {edu.years && (
                            <p className="text-xs text-gray-500 print:text-gray-600 mt-1">
                              {edu.years}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.section>
                )}

                {resumeLanguages.length > 0 && (
                  <motion.section custom={2} variants={fadeUp} initial="hidden" animate="visible">
                    <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00df9a] print:text-emerald-800 mb-4">
                      <FaGlobe className="text-sm" />
                      Languages
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {resumeLanguages.map((lang) => (
                        <span
                          key={lang}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#00df9a]/10 text-[#00df9a] border border-[#00df9a]/20 print:bg-white print:text-emerald-900 print:border-emerald-200"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </motion.section>
                )}
              </motion.div>
            </aside>

            <div className="lg:col-span-8 px-6 sm:px-10 py-8">
              <motion.section
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.h2
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00df9a] print:text-emerald-800 mb-2"
                >
                  <FaBriefcase className="text-sm" />
                  Experience
                </motion.h2>
                <ul className="space-y-8">
                  {workExperience.map((job, index) => (
                    <motion.li
                      key={`${job.company}-${job.duration}`}
                      custom={index + 1}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="relative pl-5 border-l-2 border-[#00df9a]/35 print:border-emerald-600"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-white print:text-gray-900">
                            {job.company}
                          </h3>
                          <p className="text-[#00df9a] print:text-emerald-800 font-medium text-sm sm:text-base">
                            {job.role}
                          </p>
                          <p className="text-xs text-gray-500 print:text-gray-600 mt-1 flex items-center gap-1">
                            <FaMapMarkerAlt className="shrink-0" />
                            {job.location}
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-400 print:text-gray-600 whitespace-nowrap shrink-0">
                          {job.duration}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-gray-300 print:text-gray-700 leading-relaxed">
                        {job.responsibilities.map((line, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-[#00df9a] print:text-emerald-700 shrink-0">
                              •
                            </span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default ResumeModern;
