import { GraduationCap, Building2, BarChart3, Brain, XCircle, FileText } from "lucide-react";

export default function PrepCVPage2() {
  return (
    <div className="h-[380mm] w-[210mm] mx-auto bg-white text-gray-900 font-sans px-10 py-8 mt-16 flex flex-col gap-8">
      {/* SECTION 1 – THE PROBLEM */}
      <section>
        <h1 className="text-[15pt] font-extrabold text-center mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Why Universities Struggle with Placements
        </h1>
        <div className="grid grid-cols-4 gap-2 mb-3">
          <ProblemBlock text="Limited placement data & tracking" />
          <ProblemBlock text="No visibility on off-campus closures" />
          <ProblemBlock text="Weak, outdated reports for NAAC/NBA" />
          <ProblemBlock text="Students underprepared for real interviews" />
        </div>
        <blockquote className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-600 p-2 italic text-center text-[9pt] font-medium rounded-md shadow-sm max-w-3xl mx-auto">
          &quot;You&apos;ve built a great university. Now back it with real placement infrastructure that delivers results.&quot;
        </blockquote>
      </section>

      {/* SECTION 2 – PMS SOLUTION */}
      <section>
        <h2 className="text-[13.5pt] font-bold text-center mb-3">
          Your University&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Placement Operating System</span>
        </h2>
        <img
          src="/dashboard.png"
          alt="PMS Dashboard"
          className="w-full h-86 object-cover rounded-md border shadow-sm mb-3"
        />
        <div className="grid grid-cols-2 gap-3 mb-3">
          <FeatureBlock icon={<GraduationCap size={16} className="text-purple-600" />} title="Student Journey Tracking" text="Track every student's path from application to closure." />
          <FeatureBlock icon={<Building2 size={16} className="text-blue-600" />} title="Corporate Dashboards" text="Manage job postings, recruiter engagement & POCs." />
          <FeatureBlock icon={<BarChart3 size={16} className="text-purple-600" />} title="Weekly + Accreditation Reports" text="Compliance-ready, automated, exportable instantly." />
          <FeatureBlock icon={<Brain size={16} className="text-blue-600" />} title="On + Off-Campus Closures" text="Validate success both on-campus & beyond." />
        </div>
        <p className="text-center text-[9.5pt] font-semibold italic text-gray-800">
          &quot;Every student tracked. Every success recorded. Every report accreditation-ready.&quot;
        </p>
      </section>

      {/* SECTION 3 – AI INTERVIEWER ADD-ON */}
      <section>
        <h2 className="text-[13.5pt] font-bold text-center mb-3">
          Train Students with the Same AI Tools Companies Use
        </h2>
        <img
          src="/students.png"
          alt="AI Interview Interface and Coding IDE with students"
          className="w-full h-86 object-cover rounded-md border shadow-sm mb-3"
        />
        <div className="grid grid-cols-3 gap-2 mb-3">
          <FeatureBlock icon={<Brain size={16} className="text-purple-600" />} title="Adaptive AI Interviews" text="Real-time adaptive interviews." />
          <FeatureBlock icon={<FileText size={16} className="text-blue-600" />} title="Integrated Coding IDE" text="Python, Java, JS, and C++ supported." />
          <FeatureBlock icon={<GraduationCap size={16} className="text-purple-600" />} title="Role & Resume-Based" text="Custom interviews based on resumes." />
          <FeatureBlock icon={<BarChart3 size={16} className="text-blue-600" />} title="Instant Reports" text="Scores & insights generated instantly." />
          <FeatureBlock icon={<Building2 size={16} className="text-purple-600" />} title="Comprehensive Banks" text="Behavioral, technical, coding banks." />
          <FeatureBlock icon={<Brain size={16} className="text-blue-600" />} title="Non-Intrusive Proctoring" text="Privacy-conscious smart proctoring." />
        </div>
        <blockquote className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-2 italic text-center text-[9pt] font-medium rounded-md shadow-sm max-w-3xl mx-auto">
          &quot;This isn&apos;t mock prep. This is real-world simulation.&quot;
        </blockquote>
      </section>
    </div>
  );
}

function ProblemBlock({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1 bg-gradient-to-r from-red-50 to-pink-50 p-2 rounded-md shadow-sm border justify-center">
      <XCircle size={14} className="text-red-600 flex-shrink-0" />
      <p className="text-[8.5pt] text-gray-800 font-medium leading-snug">{text}</p>
    </div>
  );
}

function FeatureBlock({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-r from-blue-50 to-purple-50 p-2 rounded-md shadow-sm border h-full">
      <div className="mb-1">{icon}</div>
      <h3 className="text-[9pt] font-bold text-gray-900 leading-snug mb-0.5">{title}</h3>
      <p className="text-[8pt] text-gray-700 leading-snug">{text}</p>
    </div>
  );
}
