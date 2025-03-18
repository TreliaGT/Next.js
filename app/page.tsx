'use client';
import HomeBanner from "./components/HomeBanner";
import TitleText from "./components/TitleText";
import ImageText from "./components/ImageText";
import ContactSection from "./components/ContactSection";
import Tags from "./components/tags";
import useFadeIn from './hooks/useFadeIn';

export default function Home() {
  useFadeIn();

  return (
    <main>
      <HomeBanner />
      <TitleText />
      <section className="stacked">
        <ImageText />
        <ImageText />
      </section>
      <Tags />
      <ContactSection />
    </main>
  );
}
