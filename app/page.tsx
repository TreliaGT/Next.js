import Image from "next/image";
import Link from "next/link";
import HomeBanner from "./components/HomeBanner";
import TitleText from "./components/TitleText";
export default function Home() {
  return (
    <main>
      <HomeBanner />
      <TitleText />
    </main>
  );
}
