import logo from '../../asset/wa-logo-dark.png';
export default function Navbar() {
    return (
        <nav >
            <div className='sub-container'>
                <div className='div_1' id='nav_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='div_2' id="nav_btn">
                    <a href="#Overview">Overview</a>
                    <a href="#Location">Location Advantages</a>
                    <a href="#Amenities">Amenities</a>
                    <a href="#plan">Plans</a>
                    <a href="SiteView">Plans</a>
                </div>
                <div className='div_3'>
                    <a href="#Contact-us">Contact us</a>
                </div>
            </div>
        </nav>
    );
}