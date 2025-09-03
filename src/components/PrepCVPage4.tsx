import { BarChart3, Building2, GraduationCap, FileText, CheckCircle2, Brain } from "lucide-react";

export default function PrepCVPage4() {
  return (
    <div className="h-[297mm] w-[210mm] mx-auto bg-white text-gray-900 font-sans flex flex-col">
      {/* HEADER */}
      <header className="text-center py-6 bg-gradient-to-r from-blue-50 to-purple-50 mb-6">
        <h1 className="text-[18pt] font-extrabold leading-snug bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Unparalleled ROI — Placement Infrastructure at 1/10th the Cost
        </h1>
        <p className="mt-2 text-[10.5pt] text-gray-700 max-w-3xl mx-auto">
          What would normally cost <span className="font-semibold">10–100x more</span> in manpower, PrepCV delivers instantly — subsidized under <span className="font-semibold">MeitY GENESIS</span> to supercharge your placement outcomes.
        </p>
      </header>

      {/* OUTCOMES */}
      <section className="px-10 py-6 bg-white mb-6">
        <h2 className="text-[14pt] font-bold text-center mb-6">Outcomes Universities Care About</h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          <KPIBlock icon={<BarChart3 size={28} className="text-white" />} title="40%+" subtitle="Higher Placement Rates" color="from-green-400 to-green-600" />
          <KPIBlock icon={<Building2 size={28} className="text-white" />} title="150+" subtitle="Companies Reached" color="from-blue-400 to-blue-600" />
          <KPIBlock icon={<GraduationCap size={28} className="text-white" />} title="85%" subtitle="Student Preparedness" color="from-purple-400 to-purple-600" />
          <KPIBlock icon={<FileText size={28} className="text-white" />} title="100%" subtitle="Validated Closures" color="from-pink-400 to-pink-600" />
        </div>
      </section>

      {/* TRUSTED & BACKED */}
      <section className="px-10 py-6 bg-gradient-to-r from-green-50 to-green-100 border-y border-green-300 mb-6">
        <h2 className="text-[14pt] font-bold text-center mb-4">Recognized. Subsidized. Trusted.</h2>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
          <TrustBlock text="Recognized under MeitY GENESIS program" />
          <TrustBlock text="Built for Indian universities, subsidized pricing" />
          <TrustBlock text="Trusted by recruiters & institutions nationwide" />
        </div>
      </section>

      {/* ECOSYSTEM VALUE */}
      <section className="px-10 py-6 bg-white mb-6">
        <h2 className="text-[14pt] font-bold text-center mb-6">More Than a Platform. A Complete Ecosystem.</h2>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <EcosystemBlock icon={<Building2 size={22} className="text-blue-600" />} title="PrepCV PMS" text="Management backbone" />
          <EcosystemBlock icon={<Brain size={22} className="text-purple-600" />} title="AI Interviewer" text="Training module" />
          <EcosystemBlock icon={<FileText size={22} className="text-blue-600" />} title="RebuildCV" text="Free AI Resume Builder" />
          <EcosystemBlock icon={<GraduationCap size={22} className="text-purple-600" />} title="Role Suggestion Tool" text="Career pathing" />
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-purple-600 p-4 italic text-[10pt] font-medium rounded-md shadow max-w-3xl mx-auto text-center">
          Partnering universities unlock <span className="font-semibold">free access to RebuildCV.com</span> — giving students <span className="font-semibold">unlimited resume versions, AI optimization, and scaling tools</span> no manual service team could ever match.
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h2 className="text-[16pt] font-extrabold mb-4">👉 Join India&apos;s End-to-End Placement Revolution</h2>
        <div className="flex justify-center gap-12 mb-6">
          <CTAQr text="Schedule a Live Demo" />
          <CTAQr text="Talk to Our Founders" />
        </div>
        <div className="text-[9pt] leading-snug">
          <p><span className="font-semibold">Kaushal Sharma</span>, Founder & CEO</p>
          <p>✉️ kaushal@hirecentive.com | 📞 +91 8660185080</p>
        </div>
      </section>
    </div>
  );
}

function KPIBlock({ icon, title, subtitle, color }: { icon: React.ReactNode; title: string; subtitle: string; color: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white border">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gradient-to-r ${color}`}>
        {icon}
      </div>
      <h3 className="text-[14pt] font-extrabold text-gray-900">{title}</h3>
      <p className="text-[9.5pt] text-gray-700 font-medium">{subtitle}</p>
    </div>
  );
}

function TrustBlock({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow border">
      <CheckCircle2 size={16} className="text-green-600" />
      <p className="text-[9pt] text-gray-800 leading-snug">{text}</p>
    </div>
  );
}

function EcosystemBlock({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-3 rounded-md shadow border text-center">
      <div className="mb-1">{icon}</div>
      <h3 className="text-[9.5pt] font-bold text-gray-900 leading-snug">{title}</h3>
      <p className="text-[8.5pt] text-gray-700 leading-snug">{text}</p>
    </div>
  );
}

function CTAQr({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-white text-gray-600 flex items-center justify-center rounded-md shadow-inner border text-xs">
        [QR]
      </div>
      <p className="text-[9pt] font-medium mt-2">{text}</p>
    </div>
  );
}
