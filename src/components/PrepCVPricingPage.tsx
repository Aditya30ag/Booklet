import { Card, CardContent } from "@/components/ui/card";
import { QrCode, CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

export default function PrepCVPricingPage() {
  return (
    <div className="h-[297mm] w-[210mm] mx-auto bg-gradient-to-br from-slate-50 to-white text-gray-900 font-sans px-12 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      {/* HEADER */}
      <header className="mb-12 text-center relative z-10">
       
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
          Flexible, Subsidized Pricing
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed font-small">
          PrepCV delivers industry-grade placement infrastructure at a fraction of the market price. Our plans are subsidized under MeitY&apos;s GENESIS program, ensuring every university can access cutting-edge tools without budget constraints.
        </p>
      </header>

      {/* PRICING GRID */}
      <section className="grid grid-cols-3 gap-8 text-sm relative z-10">
        <PricingPlan
          title="Placement Management System"
          price="₹1,000"
          period="/ student / year"
          note="(Subsidized from market ₹1,500+)"
          features={[
            "Centralized Placement Operating System",
            "End-to-End Student & Corporate Tracking",
            "Auto-Generated Accreditation Reports",
            "On + Off-Campus Closure Records",
            "Weekly Analytics Dashboards"
          ]}
          isPopular={false}
        />
        <PricingPlan
          title="Standard AI Interviews"
          price="₹350"
          period="/ interview (University Bundle)"
          note="(Market ₹650–₹800)"
          features={[
            "Role-Based AI Interviews",
            "University Bundle Pricing (min. 5-pack/month)",
            "Additional Credits at ₹400/interview",
            "Student Direct Purchase ₹450",
            "Integrated Behavioral + Technical Banks"
          ]}
          isPopular={true}
        />
        <PricingPlan
          title="Dynamic AI Interviews (Commercial Grade)"
          price="₹1,500"
          period="/ interview (University)"
          note="(Discounted from market ₹3,500)"
          features={[
            "Adaptive Real-Time AI Interviews",
            "Integrated Coding IDE (Python, Java, JS, C++)",
            "Full Proctoring + Detailed Reports",
            "University Negotiable Bundles Available",
            "Student Direct Purchase ₹1,800"
          ]}
          isPopular={false}
        />
      </section>

      {/* OUTCOMES */}
      <section className="mt-16 grid grid-cols-4 gap-6 text-center relative z-10">
        <Outcome 
          text="40%+ Higher Placement Rates" 
          icon={<TrendingUp className="w-6 h-6" />}
          color="from-green-500 to-emerald-500"
        />
        <Outcome 
          text="150+ Companies Accessed" 
          icon={<Users className="w-6 h-6" />}
          color="from-blue-500 to-cyan-500"
        />
        <Outcome 
          text="85% Student Preparedness" 
          icon={<Award className="w-6 h-6" />}
          color="from-purple-500 to-pink-500"
        />
        <Outcome 
          text="Validated Off-Campus Closures" 
          icon={<CheckCircle2 className="w-6 h-6" />}
          color="from-orange-500 to-red-500"
        />
      </section>

      {/* QR SECTION */}
      <footer className="mt-16 grid grid-cols-3 gap-8 text-center relative z-10">
        <QrPlaceholder 
          text="Scan to Schedule a Live Demo" 
          icon="🎯"
          color="from-blue-500 to-cyan-500"
        />
        <QrPlaceholder 
          text="Talk to Our Founders" 
          icon="💬"
          color="from-purple-500 to-pink-500"
        />
        <QrPlaceholder 
          text="Download Detailed Pricing PDF" 
          icon="📄"
          color="from-green-500 to-emerald-500"
        />
      </footer>

      {/* FOOTNOTE */}
      <div className="mt-12 relative z-10">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-200">
          <p className="text-xs text-gray-600 leading-relaxed text-center">
            <span className="font-semibold text-gray-700">*</span> All pricing shown above is indicative and varies by university size, tier, and adoption scope. Subsidized rates apply only to institutions qualifying under the MeitY GENESIS program. Market references are provided for context and value comparison.
          </p>
        </div>
      </div>
    </div>
  );
}

function PricingPlan({ title, price, period, note, features, isPopular }: { 
  title: string; 
  price: string; 
  period: string; 
  note: string; 
  features: string[]; 
  isPopular: boolean;
}) {
  return (
    <Card className={`relative border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
      isPopular 
        ? 'bg-gradient-to-br from-blue-50 to-purple-50 ring-2 ring-blue-200 transform scale-105' 
        : 'bg-white hover:bg-gray-50'
    } py-4`}>
      
      <CardContent className="p-2 space-y-2">
        <div className="text-center">
          <h3 className="text-md font-bold text-gray-800 mb-2 leading-tight">{title}</h3>
          <div className="mb-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {price}
            </span>
            <span className="text-sm text-gray-600 ml-1">{period}</span>
          </div>
          <p className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full inline-block">
            {note}
          </p>
        </div>
        <ul className="space-y-2 text-gray-700">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
              <span className="text-sm leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Outcome({ text, icon, color }: { text: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${color} text-white mb-4`}>
        {icon}
      </div>
      <p className="text-sm font-semibold text-gray-800 leading-tight">{text}</p>
    </div>
  );
}

function QrPlaceholder({ text, icon, color }: { text: string; icon: string; color: string }) {
  return (
    <div className="flex flex-col items-center group">
      <div className={`relative p-6 bg-gradient-to-br ${color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
        <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
          <QrCode size={32} className="text-gray-600" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-lg">{icon}</span>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-700 font-semibold leading-tight max-w-32">{text}</p>
    </div>
  );
}
