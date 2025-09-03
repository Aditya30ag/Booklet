import { Card, CardContent } from "@/components/ui/card";
import { QrCode, CheckCircle2 } from "lucide-react";

export default function PrepCVPricingPage() {
  return (
    <div className="h-[297mm] w-[210mm] mx-auto bg-white text-gray-900 font-sans px-12 py-16">
      {/* HEADER */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Flexible, Subsidized Pricing Powered by MeitY
        </h1>
        <p className="mt-2 text-base max-w-2xl mx-auto text-gray-700 leading-relaxed">
          PrepCV delivers industry-grade placement infrastructure at a fraction of the market price. Our plans are subsidized under MeitY&apos;s GENESIS program, ensuring every university can access cutting-edge tools without budget constraints.
        </p>
      </header>

      {/* PRICING GRID */}
      <section className="grid grid-cols-3 gap-6 text-sm">
        <PricingPlan
          title="Placement Management System (PMS)"
          price="₹1,000 / student / year"
          note="(Subsidized from market ₹1,500+)"
          features={[
            "Centralized Placement Operating System",
            "End-to-End Student & Corporate Tracking",
            "Auto-Generated Accreditation Reports",
            "On + Off-Campus Closure Records",
            "Weekly Analytics Dashboards"
          ]}
        />
        <PricingPlan
          title="Standard AI Interviews"
          price="₹350 / interview (University Bundle)"
          note="(Market ₹650–₹800)"
          features={[
            "Role-Based AI Interviews",
            "University Bundle Pricing (min. 5-pack/month)",
            "Additional Credits at ₹400/interview",
            "Student Direct Purchase ₹450",
            "Integrated Behavioral + Technical Banks"
          ]}
        />
        <PricingPlan
          title="Dynamic AI Interviews (Commercial Grade)"
          price="₹1,500 / interview (University)"
          note="(Discounted from market ₹3,500)"
          features={[
            "Adaptive Real-Time AI Interviews",
            "Integrated Coding IDE (Python, Java, JS, C++)",
            "Full Proctoring + Detailed Reports",
            "University Negotiable Bundles Available",
            "Student Direct Purchase ₹1,800"
          ]}
        />
      </section>

      {/* OUTCOMES */}
      <section className="mt-12 grid grid-cols-4 gap-4 text-xs text-center">
        <Outcome text="40%+ Higher Placement Rates" />
        <Outcome text="150+ Companies Accessed" />
        <Outcome text="85% Student Preparedness" />
        <Outcome text="Validated Off-Campus Closures" />
      </section>

      {/* QR SECTION */}
      <footer className="mt-14 grid grid-cols-3 gap-8 text-center text-xs">
        <QrPlaceholder text="Scan to Schedule a Live Demo" />
        <QrPlaceholder text="Talk to Our Founders" />
        <QrPlaceholder text="Download Detailed Pricing PDF" />
      </footer>

      {/* FOOTNOTE */}
      <p className="mt-8 text-[10px] text-gray-500 leading-snug">
        *All pricing shown above is indicative and varies by university size, tier, and adoption scope. Subsidized rates apply only to institutions qualifying under the MeitY GENESIS program. Market references are provided for context and value comparison.
      </p>
    </div>
  );
}

function PricingPlan({ title, price, note, features }: { title: string; price: string; note: string; features: string[] }) {
  return (
    <Card className="border rounded-lg shadow-sm">
      <CardContent className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-blue-700">{title}</h3>
        <p className="text-2xl font-extrabold text-gray-900">{price}</p>
        <p className="text-[11px] text-gray-600 italic">{note}</p>
        <ul className="space-y-1 text-gray-700 leading-snug">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="text-green-600 flex-shrink-0" size={14} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function Outcome({ text }: { text: string }) {
  return <p className="bg-gradient-to-r from-green-50 to-green-100 p-3 rounded-md text-green-700 font-semibold shadow-sm">{text}</p>;
}

function QrPlaceholder({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 bg-gray-100 rounded-lg shadow-inner">
        <QrCode size={40} className="text-gray-500" />
      </div>
      <p className="mt-2 text-gray-700 font-medium leading-snug">{text}</p>
    </div>
  );
}
