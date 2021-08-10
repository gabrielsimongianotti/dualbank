import { useState } from "react";
import {
  Container,
  Frame,
  ImageLogo,
  RightFrame,
  ImageUser,
  LeftFrame,
  Copy,
} from "./styles";

import { Popout } from "../Popout";
import { PopoutBack } from "../PopoutBack";
import logo from "../../assets/Logos.png";
import CaretDown from "../../assets/CaretDown.png";
import CaretInverted from "../../assets/CaretsInverted.png";
import EyeOpen from "../../assets/EyerOpen.png";
import EyeClose from "../../assets/EyeClose.png";
import ChatText from "../../assets/ChatText.png";
import Bell from "../../assets/Bell.png";
import Calendar from "../../assets/Calendar.png";
import MagnifyingGlass from "../../assets/MagnifyingGlass.png";
import CopySimple from "../../assets/CopySimple.png";

export const Header: React.FC = () => {
  const [balance, setBalance] = useState(true);
  const [showPopout, setShowPopout] = useState(false);
  return (
    <Container>
      <LeftFrame>
        <ImageLogo src={logo} alt="DualBank" />
        <Frame>
          <div>
            <p>Conta Corrente</p>
            <PopoutBack visible={showPopout}>
              <img src={showPopout ? CaretInverted : CaretDown} alt="conta corrente" onClick={() => setShowPopout(!showPopout)} />
            </PopoutBack>
          </div>
          <Copy>
            <Popout text="copiar">
              <span onClick={() => navigator.clipboard.writeText('Ag 00005-1')}>Ag 00005-1 </span>
            </Popout>
            <Popout text="copiar">
              <span onClick={() => navigator.clipboard.writeText('C.C. 00000000000000000020-1')}>C.C. 00000000000000000020-1</span>
            </Popout>
            <Popout text="copiar tudo" style={{ width: 130 }}>
              <img src={CopySimple} alt="copiar" onClick={() => navigator.clipboard.writeText('Ag 00005-1 C.C. 00000000000000000020-1')} />
            </Popout>

          </Copy>
        </Frame>
        <Frame>
          <div>
            <p>Saldo</p>
            <img src={balance ? EyeClose : EyeOpen} alt="DualBank" onClick={() => setBalance(!balance)} />
          </div>

          <span style={{ color: "#69D531" }}>{balance ? "R$40.000,00" : null}</span>
        </Frame>
      </LeftFrame>
      <RightFrame>
        <div>
          <input type="text" placeholder="Pesquisar" alt="Pesquisar" />
          <img src={MagnifyingGlass} alt="lupa" />
        </div>
        <img src={ChatText} alt="mensagens" />
        <img src={Bell} alt="notificações" />
        <img src={Calendar} alt="calendario" />
        <ImageUser />
      </RightFrame>

    </Container>
  );
}