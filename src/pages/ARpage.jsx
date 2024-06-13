import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ar_page.css';

const ARpage = () => {
    const navigate = useNavigate();

    const handleBackToMainPage = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <a-scene vr-mode-ui="enabled: false" embedded
                     arjs="sourceType: webcam; videoTexture: true; debugUIEnabled: false;">
                <a-entity gltf-model="../images/magnemite/scene.gltf"
                          rotation="0 180 0" scale="0.15 0.15 0.15"
                          gps-entity-place="longitude: 37.2398; latitude: 127.0833;" animation-mixer/>
                <a-camera gps-camera rotation-reader> </a-camera>
            </a-scene>
            <button
                onClick={handleBackToMainPage}
                className="backButton">
                Back to Main
            </button>
        </div>
    );
};

export default ARpage;

