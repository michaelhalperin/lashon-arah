import { Hero } from "../components/sections/Hero";
import { About } from "./About";
import { Activities } from "../components/sections/Activities";
import { Donate } from "./Donate";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Activities />
      <Donate />
      <Contact />
    </>
  );
};
