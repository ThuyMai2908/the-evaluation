import Concerns from "@/components/sections/home/concerns";
import Feature from "@/components/sections/home/feature";
import Feedback from "@/components/sections/home/feedback";
import Hero from "@/components/sections/home/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Concerns />
      <Feedback />
    </>
  );
}
