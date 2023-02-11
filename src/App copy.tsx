import React, { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Background from "./components/Background";
import Footer from "./components/Footer";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


export default function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);
  const [bestRoll, setBestRoll] = React.useState(
    parseInt(localStorage.getItem("bestRoll")!) || 0
  );
  const [abc,setAbc] =useState('')

  React.useEffect(() => {
    (async () => {
      await thirdweb()
    })();
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  async function thirdweb() {
    // initialize the SDK
    const sdk = new ThirdwebSDK("mumbai");

    // connect to your smart contract
    const contract = await sdk.getContract("0xe68904F3018fF980b6b64D06d7f7fBCeFF4cB06c");

    // get all NFTs
    const nfts = await contract.erc721.getAll();
    setAbc(nfts[0]?.metadata?.image?nfts[0]?.metadata?.image:'')
  }

  React.useEffect(() => {
    localStorage.setItem("bestRoll", bestRoll.toString());
  }, [bestRoll]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 2),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 2; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setRolls((oldRolls) => oldRolls + 1);
    } else {
      setTenzies(false);

      if (!bestRoll || rolls < bestRoll) {
        setBestRoll(rolls);
      }

      setDice(allNewDice());
      setRolls(0);
    }
  }

  function holdDice(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return abc?(
    <>
      {tenzies && <Confetti />}
      <Background />
      <main>
        <a href="https://tenzi-react.netlify.app/">
          <h1 className="title">Tenzi!</h1>
        </a>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElements}</div>
        {/* <div className="dice-container">{abc}</div> */}
        <div className="dice-container">{tenzies ?"You won a Thirdwave NFT!!":"Keep Trying.."}</div>
        {tenzies&&<img src={abc}/>}
        <button className="roll-dice" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
        <div className="stats">
          <div>
            Rolls:
            <br />
            {rolls}
          </div>
          {bestRoll ? (
            <div>
              Best:
              <br />
              {bestRoll}
            </div>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
    </>
  ):
  (<div id="root">
  <div id="pre-loader">
       <p>Loading Website...</p>
  </div>
</div>);
}
