import StickyHeader from "./components/Header";
import Hero from "./components/Hero";
import MentorshipSection from "./components/MentorshipSection";

export default function Home() {
  return (
    <main>
      <StickyHeader />
      <Hero />
      <MentorshipSection />
    </main>
  );
}
