import logo from '../../asset/wa-logo-dark.png';
export default function Navbar() {
    return (
        <nav >
            <div className='sub-container2'>
                <div className='nav_div1'>
                    <img src={logo} alt='logo' id="nav_logo" />
                </div>
                <div className='nav_div2'>
                    <a href="#Overview" className='nav_btn' >Overview</a>
                    <a href="#Connectivity" className='nav_btn'>Connectivity</a>
                    <a href="#Amenities" className='nav_btn'>Amenities</a>
                    <a href="#plan" className='nav_btn'>Plans</a>
                    <a href="#Site-View" className='nav_btn'>Site View</a>
                    <a href="#About-us" className='nav_btn'>About us</a>
                </div>
                <div className='nav_div3'>
                    <a href="#Contact-us" className='nav_btn'>Contact us</a>
                </div>
            </div>
        </nav>
    );
}