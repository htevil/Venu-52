import Navbar from "../navbar";
import cover3 from "../../asset/cover-3.png" 

export default function Header()  {
    return(
        <header>
            <Navbar/>
            <div className="container">
                <img src="" alt="cover_img" id="cover_img" style={{width:"100%", maxWidth:"1440px"}}/>
            </div>
        </header>
    );
}