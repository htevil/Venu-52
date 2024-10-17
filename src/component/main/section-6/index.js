import logo from '../../../asset/wa-logo-dark.png';
export default function Section6() {
    return (
        <section id="About-us">
            <div className="container1">
                <h1 className="main-heading">About us</h1>
                <div className="s6-div1">
                    <img src={logo} alt='logo' className='com_logo'/>
                    <div className='s6-subdiv1'>
                        <p>The Wadhwa Group, esteemed creators of the landmark projects
                            Platina, and The Capital at BKC is set to unveil another groundbreaking
                            corporate icon in Mumbai's business cosmopolis, Khar.
                            This project introduces the finest boutique offices, designed to serve
                            as a prestigious business address for a select few, especially for those
                            near Bandra (W), Khar (W), Santacruz (W), and Juhu. Aimed at
                            empowering businesses with game-changing opportunities, it also seeks
                            to leave a lasting impression on clients and allies alike.
                        </p>
                        <br />
                        <p>
                            Renowned for its concentration of wealth, five-star hospitality, luxury
                            entertainment spots, fine dining, and world-class education and
                            healthcare facilities, Khar stands as the most sought-after residential
                            destination.
                        </p>
                        <br />
                        <p>
                            Capitalizing on its impressive growth trajectory, The Wadhwa Group
                            is set to unveil a new commercial landmark within its predominantly
                            residential landscape. The strategic location ensures convenience,
                            making it a seamless and stress-free experience for the uber-rich.
                        </p>
                    </div>
                </div>
            </div >
        </section >
    );
}