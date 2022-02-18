import Hero from "./img/hero.gif";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <div id="hero-image-wrapper">
          <div id="hero-image-blur">
            <img id="hero" src={Hero} />
          </div>
          <section id="title-text">
            <h1 className="HeroText">Track Films You've Watched.</h1>
            <h1 className="HeroText">Save Ones You Want To See.</h1>
            <h1 className="HeroText">Tell your friends what's good.</h1>
          </section>
          <div id="content-wrapper"></div>
        </div>
      </div>
    </>
  );
};

// TODO:
// - Find a way to mimic the "border blur in letterboxd"
// - Do I need to create a Component Page for the "Content Page"?

export default Home;
