import PrepCVCoverPage from "@/components/PrepCVCoverPage";
import PrepCVPage2 from "@/components/PrepCVPage2";
import PrepCVPricingPage from "@/components/PrepCVPricingPage";
import PrepCVPage4 from "@/components/PrepCVPage4";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Page 1 - Cover Page */}
      <div className="page-break">
        <PrepCVCoverPage />
      </div>
      
      {/* Page 2 - Problem/Solution */}
      <div className="page-break">
        <PrepCVPage2 />
      </div>
      
      {/* Page 3 - Pricing */}
      <div className="page-break">
        <PrepCVPricingPage />
      </div>
      
      {/* Page 4 - ROI/CTA */}
      <div className="page-break">
        <PrepCVPage4 />
      </div>
    </div>
  );
}
