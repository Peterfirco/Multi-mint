import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../App.css';
import { WalletContext } from "../../context/WalletContext";

const InputWallets = () => {

    const navigate = useNavigate();
    const { setWallets } = useContext(WalletContext);
    const [inputValue, setInputValue] = useState("");

    function nextStep() {
        const walletsArray = inputValue.split('\n'); // Разделяем текст на массив строк (каждая строка — кошелёк)
        setWallets(walletsArray);

        navigate('/info_wallets');
    }

    return(
        <header className="header">

            <p className="input-wallets-info">First Step: Enter your wallets to input area</p>

            <div className="input-wallets-txt">
                
                <textarea
                    className="input-wallets-area"
                    placeholder="Enter your wallets:"
                    value={inputValue} // Привязываем состояние к текстовому полю
                    onChange={(e) => setInputValue(e.target.value)} // Обновляем состояние при вводе текста
                />

            </div>

            <div>
                <button className="input-wallets-btn" onClick={nextStep}>Next</button>
            </div>

        </header>
    );
}

export default InputWallets;
