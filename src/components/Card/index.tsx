import { useState } from "react";
import { Frame, DateText, Title, Description } from "./styles";

import ShieldCheck from "../../assets/ShieldCheck.png"
import eyeOpen from "../../assets/eyeBig.png";
import eyeBigClose from "../../assets/eyeBigClose.png";
import Refresh from "../../assets/Refresh.png";
import CaretDown from "../../assets/CaretDown.png";

interface PropsTag {
  date: string;
  value: string;
}

export const Card = ({ date, value }: PropsTag) => {
  const [balance, setBalance] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const [dateRefresh, setDateRefresh] = useState(`${new Date().getHours()}:${new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}`);
  return (
    <>
      <Title>
        <div>
          <DateText>Data do Saldo</DateText>
          <span >{date}</span>
        </div>
        <img src={CaretDown} alt="olho" onClick={() => setShowDescription(!showDescription)} />
      </Title>
      {showDescription ?
        <Description>
          <p>Saldo atualizado às {dateRefresh}</p>
          <img src={Refresh} alt="Refresh" onClick={() => setDateRefresh(`${new Date().getHours()}:${new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()}`)} />
        </Description>
        : null}
      <Frame>
        <img src={ShieldCheck} alt="olho" />
        <div>
          <p>Saldo disponível</p>
          <span >{balance ? value : null}</span>
        </div>
        <img src={balance ? eyeOpen : eyeBigClose} alt="olho" onClick={() => setBalance(!balance)} />
      </Frame>
    </>
  );
}