

import Hero from "..//Sections/Hero/Hero"
import About from "..//Sections/About/About"
import Sevices from "..//Sections/Services/Services"
import Contact from "..//Sections/Contact/Contact"
import Testimonials from "..//Sections/Testimonials/Testimonials"
import styled from "styled-components"


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Home = () => {
    return (
        <Container>
            <Hero />
            <About />
            <Sevices />
            <Testimonials />
            <Contact />
        </Container>
    )
}

export default Home
