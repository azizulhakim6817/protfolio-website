// components/Hero.jsx
import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    <div>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi, I'm Your Name</h1>

            <p className="py-6">
              Full Stack Developer | UI Designer | Problem Solver
            </p>

            {/* Resume Button */}
            <a
              href="/resume.pdf" // Place resume.pdf inside /public folder
              download
              className="btn btn-primary gap-2"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadResume;
