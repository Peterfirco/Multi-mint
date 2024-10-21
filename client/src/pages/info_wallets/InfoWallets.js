import React, { useContext } from "react";
import { WalletContext } from "../../context/WalletContext";
import { useNavigate } from "react-router-dom";
import '../../App.css';

const InfoWallets = () => {

    const navigate = useNavigate();
    const { wallets } = useContext(WalletContext);

    function prevStep() {
        navigate('/input_wallets')
    }

    function nextStep() {
        navigate('/oper_wallets');
    }

    return(
        <header className="header">

            <div>
                <h1>Info Wallets</h1>
                <ul>
                    {wallets.map((wallet, index) => (
                        <li key={index}>{wallet}</li>
                    ))}
                </ul>
            </div>

            <div>
                
                <button className="input-wallets-btn" onClick={prevStep}>Prev</button>
                <button className="input-wallets-btn" onClick={nextStep}>Next</button>

            </div>

        </header>
    );
}

export default InfoWallets;