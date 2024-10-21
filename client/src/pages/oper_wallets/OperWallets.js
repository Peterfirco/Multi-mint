import React, { useContext, useState } from "react";
import { WalletContext } from "../../context/WalletContext"; // Импортируем контекст
import { useNavigate } from "react-router-dom";
import '../../App.css';


const OperWallets = () => {
    const { wallets } = useContext(WalletContext); // Получаем список кошельков из контекста

    // Локальные состояния для конфигурации
    const [ticker, setTicker] = useState('');
    const [priorityFeeValue, setPriorityFeeValue] = useState('');
    const [timeout, setTimeoutValue] = useState('');
    const [loops, setLoops] = useState('');

    const navigate = useNavigate();

    function prevStep() {
        navigate('/info_wallets')
    }

    function nextStep() {
        // navigate('/info_wallets');
    }

    return (
        <header className="header">
            <div className="">
                <h1 className="main-captial">Mint</h1>

                <h2>Network</h2>
                <div>

                    <div className="network_radiobtn_item">
                        <input type="radio" className="network_radio" id="contactChoice1" name="contact" />
                        <label htmlFor="contactChoice1" className="network_radio_txt">Mainnet</label>
                    </div>

                    {/* <input type="radio" className="network_radio" id="contactChoice2" name="contact" />
                    <label htmlFor="contactChoice2" className="network_radio_txt">Testnet-11</label> */}

                    <div className="network_radiobtn_item">
                        <input type="radio" className="network_radio" id="contactChoice3" name="contact" />
                        <label htmlFor="contactChoice3" className="network_radio_txt">Testnet-10</label>
                    </div>

                    {/* <input type="radio" className="network_radio" id="contactChoice4" name="contact" />
                    <label htmlFor="contactChoice4" className="network_radio_txt">Devnet</label> */}

                </div>

                <h2>Wallet Addresses</h2>
                <div>
                    {wallets.map((wallet, index) => (
                        <div key={index}>
                            <input 
                                type="checkbox" 
                                id={`wallet_${index}`} 
                                name="wallet_addresses" 
                                className="network_checkbox"
                            />
                            <label htmlFor={`wallet_${index}`}>{wallet}</label>
                        </div>
                    ))}
                </div>

                <h2>Configuration</h2>

                {/* Ticker */}
                <div>
                    <label htmlFor="ticker_input">Ticker:</label>
                    <input 
                        type="text" 
                        id="ticker_input" 
                        name="ticker_input"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value)} // Обновляем состояние при вводе текста
                    />
                </div>

                {/* Priority Fee Value (float) */}
                <div>
                    <label htmlFor="priority_input">Priority Fee Value:</label>
                    <input 
                        type="number" 
                        id="priority_input" 
                        name="priority_input"
                        step="0.01" // Позволяем вводить дробные числа
                        value={priorityFeeValue}
                        onChange={(e) => setPriorityFeeValue(e.target.value)} // Обновляем состояние для float
                    />
                </div>

                {/* Timeout */}
                <div>
                    <label htmlFor="timeout_input">Timeout:</label>
                    <input 
                        type="number" 
                        id="timeout_input" 
                        name="timeout_input"
                        value={timeout}
                        onChange={(e) => setTimeoutValue(e.target.value)} // Обновляем состояние для timeout
                    />
                </div>

                {/* Log level */}
                <div>
                    <div className="network_radiobtn_item">
                        <input type="radio" id="contactChoice5" className="network_radio" name="contact" />
                        <label htmlFor="contactChoice5" className="network_radio_txt">DEBUG</label>
                    </div>
                    <div className="network_radiobtn_item">
                        <input type="radio" id="contactChoice6" className="network_radio" name="contact" />
                        <label htmlFor="contactChoice6" className="network_radio_txt">INFO</label>
                    </div>
                </div>

                {/* Loops */}
                <div>
                    <label htmlFor="loops_input">Loops:</label>
                    <input 
                        type="number" 
                        id="loops_input" 
                        name="loops_input"
                        value={loops}
                        onChange={(e) => setLoops(e.target.value)} // Обновляем состояние для loops
                    />
                </div>

                <button className="input-wallets-btn" onClick={prevStep}>Prev</button>
                <button className="input-wallets-btn" onClick={nextStep}>Next</button>

            </div>
        </header>
    );
}

export default OperWallets;
