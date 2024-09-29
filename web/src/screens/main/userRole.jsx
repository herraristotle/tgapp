import React from 'react';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import './userRole.css';
import { useNavigate } from 'react-router-dom';

const UserRoleScreen = () => {
    const navigate = useNavigate();

    const handleBuyerClick = () => {
        // Handle buyer selection
        console.log("User is a buyer");
    };

    const handleSellerClick = () => {
        // Handle seller selection
        console.log("User is a seller");
    };

    return (
        <TelegramScreen className="buyer-seller-screen">
            <TelegramText className="buyer-seller-title">Are you a seller or buyer?</TelegramText>
            
            <div className="buyer-seller-buttons">
                <TelegramButton className="buyer-button" onClick={handleBuyerClick}>
                    I am buyer 💰
                </TelegramButton>
                <TelegramButton className="seller-button" onClick={handleSellerClick}>
                    I am seller 👨‍💼
                </TelegramButton>
            </div>
            
            <TelegramButton className="back-button" onClick={() => navigate(-1)}>
                ← Back
            </TelegramButton>
        </TelegramScreen>
    );
};

export default UserRoleScreen;