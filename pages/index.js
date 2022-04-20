import Head from "next/head";
import styled from "styled-components";

const Header = styled.h1`
  color: red;
  &::after {
    content: "🚀";
  }
`;
export default function Home() {
  return <Header>csc</Header>;
}
