import elevation from '../../../asset/Elevation-3.png'
export default function Section1() {
    return (
        <section id="Overview">
            <div className="container1">
                <h1 className='main-heading'>Overview</h1>
                <div className='sub-container2'>
                    <div className='s1-div1'>
                        <img src={elevation} alt="no_elevation" id='ove_img'/>
                    </div>
                    <div className='s1-div2'>
                        <h3  className="sub-heading" id='ove_heading'> The Business Address Of Command</h3>
                        <p id='ove_para'>
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
                <div className='sub-container1' id='Project-Highlight' >
                    <h1 className="main-heading" >Project Highlight</h1>
                    <div className='s1-div3'>
                        <span id='hig_1'>Exclusive Retail Spaces</span><span id='hig_2'>Versatile Office Sizes</span><span id='hig_3'>Innovative Flexible Design</span>
                        <span id='hig_4'>Ample Parking Solutions</span><span id='hig_5'>High-Efficiency Elevators</span><span id='hig_6'>Customizable Office Amenities</span>
                        <span id='hig_7'>Dedicated Vent Zone</span>
                    </div>
                </div>
            </div>
        </section>
    );
}