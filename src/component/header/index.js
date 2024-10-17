import Navbar from "../navbar";


export default function Header()  {
    return(
        <header>
            <Navbar/>
            <div className="container2">
                <img src="" alt="cover_img" id="cover_img" style={{width:"100%", maxWidth:"1440px"}}/>
            </div>
        </header>
    );
}