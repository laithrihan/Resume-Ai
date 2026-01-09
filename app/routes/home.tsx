import { Navbar, ResumeCard } from "~/components/index";
import type { Route } from "./+types/home";
import { resumes } from "~/constants/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume AI" },
    { name: "description", content: "Welcome to Resume AI!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          <h2>
            Get instant feedback on your resume and track your job applications.
          </h2>
        </div>

        <section className="resumes-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </section>
      </section>
    </main>
  );
}
