import React from 'react';
import { useNavigate } from 'react-router-dom';
import TelegramScreen from "../../components/kit/Screen/TelegramScreen";
import TelegramText from "../../components/kit/Text/TelegramText";
import TelegramButton from "../../components/kit/Button/TelegramButton";
import './MainScreen.css';

const MainScreen = () => {
    const navigate = useNavigate();

    const handleLetsGoClick = () => {
        navigate('/user-role');
    };

    return (
        <TelegramScreen className="wallet-screen">
            <TelegramText className="wallet-title">Wallet in Telegram,</TelegramText>
            <TelegramText className="wallet-subtitle">made for crypto</TelegramText>
            
            <div className="feature-list">
                <div className="feature-item">
                    <div className="feature-icon easy-to-buy"></div>
                    <div className="feature-text">
                        <TelegramText className="feature-title">Easy to buy</TelegramText>
                        <TelegramText className="feature-description">Purchase Bitcoin, Toncoin, Notcoin and USDt by card or via P2P Market.</TelegramText>
                    </div>
                </div>
                
                <div className="feature-item">
                    <div className="feature-icon send-to-friend"></div>
                    <div className="feature-text">
                        <TelegramText className="feature-title">Send to a friend</TelegramText>
                        <TelegramText className="feature-description">Worldwide transfers on Telegram are instant and free.</TelegramText>
                    </div>
                </div>
                
                <div className="feature-item">
                    <div className="feature-icon convenient-to-use"></div>
                    <div className="feature-text">
                        <TelegramText className="feature-title">Convenient to use</TelegramText>
                        <TelegramText className="feature-description">Open your Wallet directly from the Telegram menu.</TelegramText>
                    </div>
                </div>
            </div>
            
            <TelegramButton className="lets-go-button ripple-effect" onClick={handleLetsGoClick}>Let's go</TelegramButton>
            
            <TelegramText className="agreement-text">By tapping "Let's go" you agree to User Agreement</TelegramText>
        </TelegramScreen>
    );
};

export default MainScreen;
