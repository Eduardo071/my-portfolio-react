import { ColorFilter } from "../components/ColorFilter/ColorFilter";
import { Hero } from "../components/Hero/Hero";
import { NavBar } from "../components/navBar/NavBar";

export function Home() {
    return (
        <ColorFilter>
            <NavBar />
            <Hero/>
        </ColorFilter>
    )
}