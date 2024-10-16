import elevation from '../../../asset/Elevation-3.png'
export default function Section1() {
    return (
        <section id="#Overview">
            <div className="container">
                <h1 className='Main-heading'>Overview</h1>
                <div className='sub-container'>
                    <div>
                        <img src={elevation} alt="no_elevation" id='elevation' style={{ width: "400px" }} />
                    </div>
                    <div id='s1-main'>
                        <h3> The Business Address Of Command</h3>
                        <p>
                            VENUE 52 is an iconic commercial landmark masterfully
                            designed by the finest minds of The Wadhwa Group.
                            Its 17-storey tower features exclusive boutique offices
                            with small units starting from 600sq ft. and a full
                            floor upto 5000 sq ft.alongside & expansive retail promenade.
                            <br /><br />
                            Positioned strategically in Khar, it promises
                            unmatched connectivity and visibility—essential
                            for businesses poised to excel. VENUE 52 is a
                            catalyst for innovation, uniting startups and
                            established enterprises in a dynamic hub where
                            ambition meets opportunity.
                        </p>
                    </div>
                </div>
                <div className='container' id='Project-highlight' >
                    <h1>Project Highlight</h1>
                    <div id='s1-main2'>
                        <span className='sub-container'>Exclusive Retail Spaces</span><span className='sub-container'>|</span><span className='sub-container'>Versatile Office Sizes</span>
                        <span className='sub-container'>Innovative Flexible Design</span><span className='sub-container'>|</span><span className='sub-container'>Ample Parking Solutions</span>
                        <span className='sub-container'>High-Efficiency Elevators</span><span className='sub-container'>|</span><span className='sub-container'>Customizable Office Amenities</span>
                        <span className='sub-container'>Dedicated Vent Zone</span>
                    </div>
                </div>
            </div>
        </section>
    );
}