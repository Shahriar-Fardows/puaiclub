import images from "../assets/images";

const Home = () => {
    return (
        <div>
          <section className="bg-[url('../assets/images/homeBg.jpg')] bg-cover bg-center h-screen flex items-center justify-center relative">
<h5 className="text-[#854ec8] inter text-center">👋 Hey there! We&apos;re Doodle</h5>



            <img src={images?.image?.form_shape} alt="" /> 
          </section>
        </div>
    );
};

export default Home;