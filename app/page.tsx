import Image from "next/image";
import Link from "next/link";
import HomeBanner from "./components/HomeBanner";
import TitleText from "./components/TitleText";
import ImageText from "./components/ImageText";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <TitleText />
      <section className="Stacked">
        <ImageText/>
        <ImageText/>
        <ImageText/>
      </section>
    </main>
  );
}
