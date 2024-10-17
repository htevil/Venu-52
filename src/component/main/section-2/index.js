import Map from "../../../asset/map.webp"
import loc_img from '../../../asset/location-pin.png'
export default function Section2() {
    return (
        <section id="Connectivity">
            <div className="container1">
                <h1 className='main-heading'>Connectivity</h1>
                <div className='sub-container2'>
                    <div className="s2-div1">
                        <h3 className="sub-heading"> Hassle free Commutes</h3>
                        <div className="location">
                            <div className="loc">
                                <div className="s2-subdiv1">
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>S.V Road Metro Station</span>
                                </div>
                                 <span> 5 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1">
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>Khar Railway Station</span>
                                </div>
                                 <span> 6 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1">
                                    <img src={loc_img} alt="loc_img" className="loc_img"  />
                                    <span>Carter Road</span>
                                </div>
                                 <span> 5 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1">
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>Chhatrapati Shivaji Maharaj International Airport</span>
                                </div>
                                 <span> 20 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1" >
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>Juhu</span>
                                </div>
                                <span> 15 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1">
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>Santacruz (W)</span>
                                </div>
                                <span> 7 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1" >
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>Bandstand</span>
                                </div>
                                <span> 10 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1" >
                                    <img src={loc_img} alt="loc_img"  className="loc_img"/>
                                    <span>Mount Mary</span> 
                                </div>
                                <span> 12 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1" >
                                    <img src={loc_img} alt="loc_img" className="loc_img" />
                                    <span>Pali Hill</span>
                                </div>
                                <span> 5 min</span>
                            </div>
                            <div div className="loc">
                                <div className="s2-subdiv1" >
                                    <img src={loc_img} alt="loc_img" className="loc_img"/>
                                    <span>Coastal Road, Carter Road Exit</span>
                                </div>
                                 <span> 7 min</span>
                            </div>
                        </div>
                    </div>
                    <div className="s2-div2">
                        <img src={Map} alt="Map" id='map' />
                    </div>
                </div>
            </div>
        </section>
    );
}