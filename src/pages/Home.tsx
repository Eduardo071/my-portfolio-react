import { Projects } from "../components/Projects/Projects";
import { About } from "../components/About/About";
import { ColorFilter } from "../components/ColorFilter/ColorFilter";
import { Hero } from "../components/Hero/Hero";
import { Skills } from "../components/Skills/Skills";
import { NavBar } from "../components/navBar/NavBar";
import { Contact } from "../components/Contact/Contact";

export function Home() {
    return (
        <ColorFilter>
            <NavBar />
            <Hero/>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </ColorFilter>
    )
}