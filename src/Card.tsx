import styled from "styled-components";

const WrapperCard = styled.div`
  width: 300px;
  padding: 10px 10px 22px 10px;
  background-color: #ffffff;
`;

const Image = styled.div`
  width: 100%;
  height: 170px;
  img {
    min-width: 100%;
  }
`;

function Card() {
  return (
    <WrapperCard>
      <Image>
        <img src="./photo.png" alt="Photo" />
      </Image>
    </WrapperCard>
  );
}

export { Card };
