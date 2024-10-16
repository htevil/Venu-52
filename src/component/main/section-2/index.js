import Map from "../../../asset/map.webp"
export default function Section2() {
    return (
        <section id="#Location and Elevation">
            <div className="container">
                <h1 className='Main-heading'>Location</h1>
                <div className='Main-div'>
                    <div className="div_1">
                        <h3> Hassle free Commutes</h3>
                        <div>
                            <span>S.V Road Metro Station</span> <span> 5 min</span>
                        </div>
                        <div>
                            <span>Khar Railway Station</span> <span> 6 min</span>
                        </div>
                        <div>
                            <span>Carter Road</span> <span> 5 min</span>
                        </div>
                        <div>
                            <span>Chhatrapati Shivaji Maharaj International Airport</span> <span> 20 min</span>
                        </div>
                        <div>
                            <span>Juhu</span> <span> 15 min</span>
                        </div>
                        <div>
                            <span>Santacruz (W)</span> <span> 7 min</span>
                        </div>
                        <div>
                            <span>Bandstand</span> <span> 10 min</span>
                        </div>
                        <div>
                            <span>Mount Mary</span> <span> 12 min</span>
                        </div>
                        <div>
                            <span>Pali Hill</span> <span> 5 min</span>
                        </div>
                        <div>
                            <span>Coastal Road, Carter Road Exit</span> <span> 7 min</span>
                        </div>
                    </div>
                    <div className="div_2">
                        <img src={Map} alt="Map" id='Map' style={{ width: "400px" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}