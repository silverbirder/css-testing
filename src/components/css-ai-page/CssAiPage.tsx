import "./css/index.css";

import { CssAiContact } from "../css-ai-contact/CssAiContact";
import { CssAiDemo } from "../css-ai-demo/CssAiDemo";
import { CssAiFeatures } from "../css-ai-features/CssAiFeatures";
import { CssAiFooter } from "../css-ai-footer/CssAiFooter";
import { CssAiHeader } from "../css-ai-header/CssAiHeader";
import { CssAiHero } from "../css-ai-hero/CssAiHero";
import { CssAiPageTop } from "../css-ai-page-top/CssAiPageTop";
import { CssAiPricing } from "../css-ai-pricing/CssAiPricing";
import { CssAiReviews } from "../css-ai-reviews/CssAiReviews";
import { CssAiTechStack } from "../css-ai-tech-stack/CssAiTechStack";

export const CssAiPage = () => {
  return (
    <div id="top">
      <CssAiHeader />
      <CssAiHero />
      <div className="container sections">
        <CssAiFeatures />
        <CssAiTechStack />
        <CssAiDemo />
        <CssAiReviews />
        <CssAiPricing />
        <CssAiContact />
      </div>
      <CssAiFooter />
      <CssAiPageTop />
    </div>
  );
};
