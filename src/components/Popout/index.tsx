import React from 'react';
import CopySimple from "../../assets/CopySimple.png";

import { Container } from './styles';

interface TooltipProps {
  text: string;
  style?:object;
}

export const Popout: React.FC<TooltipProps> = ({ text, children, ...rest }) => {
  return (
    <Container>
      {children}
      <div {...rest}>
        <img src={CopySimple} alt="copiar" />
        <p>
          {text}
        </p>
      </div>
    </Container>
  );
};