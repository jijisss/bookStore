import styled from "styled-components";
import "../components/default.css";
import { type } from "@testing-library/user-event/dist/type";
import { useState, useRef } from "react";
import React from "react";
import { event } from "jquery";

type Props = {
  title?: string | React.ReactNode,
};

function Accordion(props: Props) {
  const parentRef = React.useRef < HTMLDivElement > null;
  const chiledRef = React.useRef < HTMLDivElement > null;
  const [isCollapse, setCollapse] = React.useState(false);

  const handleButtonClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || chiledRef.current === null) {
        if (parentRef.currrent.clientHeight > 0) {
          parentRef.current.style.height = "0";
        } else {
          parentRef.current.style.height = `${chiledRef.current.clientHeight}px`;
        }
      }
      setCollapse(!isCollapse);
    },
    [isCollapse]
  );

  return (
    <Container>
      <Header>
        {props.title}
        <Button>열기</Button>
      </Header>
      <ContensWrapper ref={parentRef}>
        <Contens ref={chiledRef}>{props.contents}</Contens>
      </ContensWrapper>
    </Container>
  );
}

const ContensWrapper = styled.div`
    height: 0;
    width: 100%;
    overflow: hidden:
    transition: height 0.35s ease;
`;

const Contens = styled.div`
  padding: 4px 8px;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;

  height: 32px;
  margin: 0 32px 8px;
`;

const Button = styled.div`
  top: 8px;
  right: 8px;
  font-size: 14px;
  position: absolute;
`;
export default Accordion;
