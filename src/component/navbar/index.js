import logo from '../../asset/wa-logo-dark.png';
export default function Navbar() {
    return (
        <nav>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>
                <a href="#Overview">Overview</a>
                <a href="#Location-Advantages">Location Advantages</a>
                <a href="#Amenities">Amenities</a>
                <a href="#Plans">Plans</a>
                <a href="#Gallery" >Gallery</a>
                <a href="#Contact-us">Contact us</a>
            </div>
        </nav>
    );
}