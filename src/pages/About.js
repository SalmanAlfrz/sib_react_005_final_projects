import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const property = [{
    name: "Effendi Prakoso",
    code: "RCTN-KS05-016",
    imageUrl: require("../images/Effendi.jpg")
},
{
    name: "Salman Alfarizi",
    code: "RCTN-KS05-018",
    imageUrl: require("../images/salman.jpg")
},
{
    name: "Moh. Aulia Miftakhurahmat",
    code: "RCTN-KS05-021",
    imageUrl: require("../images/miftah.jpg")
},]


const About = () => {
    return (
        <div className='h-full bg-gradient-to-br from-[#161334]/80 via-[#B286AB] to-[#7493D3] bg-cover'>
            <Navbar />
            <div className='flex flex-wrap gap-4 justify-evenly w-5/6 mx-auto my-10'>
                {property.map((item, index) => (
                <div className="card w-64 bg-base-100 shadow-xl" key={index}>
                    <figure className="px-5 pt-5">
                        <img src={item.imageUrl} style={{height: "200px"}} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.code}</p>
                    </div>
                </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default About;