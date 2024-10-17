export default function Section7() {
    return (
        <section id="Contact-us">
            <div className="container1">
                <h3 className="sub-heading">Contact us</h3>
                <div className="s7-div1">
                    <div>Please fill your details below</div>
                    <form className="s7-subdiv1">
                        <input type="text" className="userdata" name="name" placeholder="Name*" />
                        <input type="text" className="userdata" name="email" placeholder="Email*" />
                        <input type="number" className="userdata" name="mobile" placeholder="Mobile*" />
                        <select name="configure" defaultValue="" className="userdata" >
                            <option value="" disabled>Select Configuration</option>
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                        </select>
                    </form>
                    <button className="formbtn">Submit</button>
                    <div className=""><b>Site Address:</b> 19th Road Crossing (Chitrakar Dhurandar Marg), Khar West, Mumbai - 400 052.</div>
                    <div> This project is registered under MahaRERA Registration No. P51800077490 Available on website https://maharera.mahaonline.gov.in</div>
                </div>
                
            </div>
        </section>
    );
}
