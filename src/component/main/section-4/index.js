import { useState } from 'react';
import plan from '../../../asset/Map.png';

export default function Section4() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section id="Plans">
            <div className="container1">
                <h1 className="main-heading">Master Plan</h1>
                <div className="s4-div1">
                    <img src={plan} alt="plan" className="plan-img" onClick={openModal} />
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <img src={plan} alt="plan" className="modal-image" />
                    </div>
                </div>
            )}
        </section>
    );
}
