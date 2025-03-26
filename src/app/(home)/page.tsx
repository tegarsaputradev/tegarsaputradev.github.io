"use client";
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Container from "@/components/layout/Container";
import Navbar from "@/components/navbar/Navbar";
import ParticlesBackground from "@/components/particles-background/ParticlesBackground";
import RecentProject from "@/components/recent-project/RecentProject";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <Container>
      <ParticlesBackground />
      <Navbar />
      <Jumbotron />
      <Skills />
      <About />
      <RecentProject />
      <Footer />
    </Container>
  );
}
