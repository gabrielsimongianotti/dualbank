import { useState } from "react";
import { Frame, ItemTag } from "./styles";

import EyeOpen from "../../assets/EyerOpen.png";
import EyeClose from "../../assets/EyeClose.png";

interface PropsTag {
  title: string;
  value: string;
  backgroundColor: string;
}

export const Tag = ({ backgroundColor, title, value }: PropsTag) => {
  const [balance, setBalance] = useState(true);
  return (
    <Frame>
      <ItemTag backgroundColor={backgroundColor}>{title[0]}</ItemTag>
      <div>
        <div>
          <p>{title}</p>
          <img src={balance ? EyeClose : EyeOpen} alt="eye" onClick={() => setBalance(!balance)} />
        </div>
        <span >{balance ? value  : null}</span>
      </div>
    </Frame>
  );
}