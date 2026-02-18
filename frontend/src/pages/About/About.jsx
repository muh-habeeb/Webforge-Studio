import Footer from "@components/Footer";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4"> 
          WebForge Studio: Visual Website Builder with Intelligent Data
          Engine{" "}
        </h2>
        <p className="text-lg text-gray-700">
          This project presents the development of a visual website builder that
          enables users to create frontend layouts through drag-and-drop
          components while interactively configuring backend data models and
          APIs. The system bridges frontend design and backend logic through a
          guided schema creation process, allowing users to connect data-driven
          components efficiently. The platform aims to simplify full-stack
          development while maintaining structural control and scalability.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
