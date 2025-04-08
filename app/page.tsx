'use client';
import HomeBanner from "./components/HomeBanner";
import TitleText from "./components/TitleText";
import ImageText from "./components/ImageText";
import ContactSection from "./components/ContactSection";
import Tags from "./components/tags";
import useFadeIn from './hooks/useFadeIn';
import BackgroundShapes from "./components/BackgroundShapes";

export default function Home() {
  useFadeIn();

  return (
    <main>
      <HomeBanner />
      <div className="relative">
        <TitleText />
        {/* <section className="stacked">
          <ImageText />
          <ImageText />
        </section> */}
        <Tags />
        <ContactSection />
        <BackgroundShapes />
      </div>
    </main>
  );
}
