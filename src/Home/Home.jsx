import images from "../assets/images";

const Home = () => {
    return (
        <div>
            <section className="bg-cover bg-center bg-no-repeat "  style={{ backgroundImage: `url(${images?.image?.homeBg})` }}>
                <div className="container mx-auto py-40">
                <h5 className="text-[#854ec8] inter text-center">👋 Hey there! We&apos;re Doodle</h5>
                <div className="flex flex-col items-center justify-center space-y-8">
                    <h1 className="text-[#1b2a52]  text-center text-6xl/[80px] font-bold space lin">Explore the Future with <br/> PU <span className="bg-[#854ec8] text-white px-4 border rounded-full">AI Club</span></h1>
                    <p className="inter text-[#1b2a52] text-center "> The Presidency University AI Club is a hub for students to explore  AI, Machine Learning,<br/> and Data Science. Join us to learn, collaborate, and innovate! 🚀</p>
                    <img src={images?.image?.form_shape} alt="robot" />
                </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
