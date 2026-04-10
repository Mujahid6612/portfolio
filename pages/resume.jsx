import React from "react";
import Head from "next/head";
import ResumeModern from "../components/ResumeModern";

const ResumePage = () => {
  return (
    <>
      <Head>
        <title>Mujahid Ali | Resume</title>
        <meta
          name="description"
          content="Resume — Mujahid Ali, Senior Software Engineer. React, Next.js, React Native, Playwright."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <ResumeModern />
    </>
  );
};

export default ResumePage;
