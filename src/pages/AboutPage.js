const property = [{
    name: "Effendi Prakoso",
    code: "RCTN-KS05-016",
    imageUrl: require("../images/Effendi.jpg"),
    title: 'Bertugas untuk Integrasi data API'
},
{
    name: "Salman Alfarizi",
    code: "RCTN-KS05-018",
    imageUrl: require("../images/salman.jpg"),
    title: 'Bertugas untuk Integrasi UI UX'
},
{
    name: "Moh. Aulia Miftakhurahmat",
    code: "RCTN-KS05-021",
    imageUrl: require("../images/miftah.jpg"),
    title: 'Bertugas untuk mendesain UI UX'
},]

const AboutPage = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mb-10">About Us</h1>
            <div className="w-4/5 mx-auto mb-10">
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 gap-10">
                    {
                        property.map((item, index) => (
                            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                <figure className="px-10 pt-10">
                                    <img src={item.imageUrl} alt="Shoes" className="rounded-xl h-72" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.code}</p>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutPage;