import Hero from "./img/hero.gif"

const Home = () => {
    return (
        <>
            <section>
                <div id="hero-wrapper">
                    <div id="hero-image">
                        <img id="hero" src={Hero} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home