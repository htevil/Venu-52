import north from '../../../asset/views/North.webp';
import south from '../../../asset/views/South.webp';
import east from '../../../asset/views/East.webp';
import west from '../../../asset/views/West.webp';
import { useState } from 'react';

export default function Section5() {
    const [view, setView] = useState(east); // Set initial image as `east`

    const handleView = (value) => {
        switch (value) {
            case "north":
                setView(north);
                break;
            case "east":
                setView(east);
                break;
            case "west":
                setView(west);
                break;
            case "south":
                setView(south);
                break;
            default:
                setView(east);
        }
    };

    return (
        <section id="Site-View">
            <div className="container1">
                <h1 className="main-heading">Site View</h1>
                <div className="s5-div1">
                    <div className='s5-subdiv1'>
                        <button onClick={() => handleView("east")} className='sit_btn'>East</button>
                        <button onClick={() => handleView("west")} className='sit_btn'>West</button>
                        <button onClick={() => handleView("south")} className='sit_btn'>South</button>
                        <button onClick={() => handleView("north")} className='sit_btn'>North</button>
                    </div>
                    <div className='s5-subdiv2'>
                        <img src={view} alt='sit_img' className='sit_img' />
                    </div>
                </div>
            </div>
        </section>
    );
}
