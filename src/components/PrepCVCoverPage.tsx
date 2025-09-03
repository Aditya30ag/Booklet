import { QrCode, BarChart3, GraduationCap, Building2, Brain, FileText } from "lucide-react";

export default function PrepCVCoverPage() {
  return (
    <div className="h-[297mm] w-[210mm] mx-auto bg-white text-gray-900 font-sans px-14 py-12 flex flex-col justify-between">
      {/* TOP HEADER WITH LOGOS */}
      <header className="flex justify-between items-center mb-8 border-b pb-3">
        <img src="/Hirecentive - The Pitch Deck (August 18 2025) (11).png" alt="Hirecentive Logo" className="h-14" />
        <div className="flex gap-6">
        <img src="/Hirecentive - The Pitch Deck (August 18 2025) (11).png" alt="Hirecentive Logo" className="h-14" />
          <img src="/placeholder-startup-india.png" alt="Startup India Logo" className="h-10 bg-gray-200 rounded" />
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="text-center mb-10">
        <h1 className="text-[21pt] font-extrabold leading-snug bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Reinventing Campus Placements with AI-Powered Management & Training
        </h1>
        <p className="mt-3 text-[11pt] max-w-3xl mx-auto text-gray-700 leading-relaxed">
          End-to-End Placement Infrastructure for Universities. <span className="font-semibold">Subsidized by MeitY</span> under the GENESIS program to deliver <span className="font-semibold">high quality at accessible rates</span>.
        </p>
      </section>

      {/* VISUAL HERO (SINGLE PLACEHOLDER) */}
      <section className="mb-10">
        <div className="w-full h-56 bg-gray-200 rounded-xl shadow-md border flex items-center justify-center text-gray-500 text-sm italic">
          [Placeholder: PMS Dashboard + AI Interviewer]
        </div>
      </section>

      {/* KEY HIGHLIGHTS */}
      <section className="mb-10">
        <h2 className="text-center text-[13pt] font-bold text-gray-900 mb-5">
          Key Highlights
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <KeyHighlight icon={<BarChart3 size={22} className="text-blue-600" />} text="End-to-End Management" />
          <KeyHighlight icon={<GraduationCap size={22} className="text-purple-600" />} text="On & Off-Campus Tracking" />
          <KeyHighlight icon={<Building2 size={22} className="text-blue-600" />} text="Corporate Integrations" />
          <KeyHighlight icon={<Brain size={22} className="text-purple-600" />} text="AI Mock Interviews" />
          <KeyHighlight icon={<FileText size={22} className="text-blue-600" />} text="Ready Reports" />
        </div>
      </section>

      {/* CTA QR CODES + AUTHORITY */}
      <footer className="mt-12 flex flex-col items-center gap-6">
        <div className="flex justify-center gap-20">
          <QrBlock text="🎥 Watch PrepCV in 2 Minutes" />
          <QrBlock text="⚡ See PMS in Action" />
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <img src="/Hirecentive - The Pitch Deck (August 18 2025) (11).png" alt="Hirecentive Logo" className="h-10" />
          <img src="/Hirecentive " alt="Hirecentive Logo" className="h-10" />
        </div>
        <p className="text-[9pt] text-gray-600 italic">Nationally recognized, globally competitive.</p>
        <div className="text-[9pt] text-gray-500 leading-snug text-center border-t pt-3 w-full">
          PrepCV • Building India&apos;s End-to-End Placement Revolution • Subsidized for Indian Universities • www.prepcv.in
        </div>
      </footer>
    </div>
  );
}

function KeyHighlight({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg shadow-md border h-full">
      {icon}
      <p className="text-[9pt] font-semibold text-gray-800 leading-snug mt-1 text-center">{text}</p>
    </div>
  );
}

function QrBlock({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      <div className="p-3 bg-white border rounded-md shadow-lg w-20 h-20 flex items-center justify-center">
        <QrCode size={40} className="text-gray-600" />
      </div>
      <p className="text-[9pt] text-gray-800 font-medium leading-snug max-w-[140px]">{text}</p>
    </div>
  );
}
