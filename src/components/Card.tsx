import styled from 'styled-components';
import { Button } from './Button';

const WrapperCard = styled.article`
  width: 300px;
  padding: 10px 10px 22px 10px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.2);
`;

const ImageCard = styled.img`
  display: block;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;
  object-position: center;
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 0 10px;
`;

const TitleCard = styled.h2`
  font-size: 16px;
  color: #000000;
  font-weight: 700;
`;

const ActionsCard = styled.div`
  display: flex;
  gap: 1rem;
`;

function Card() {
  return (
    <WrapperCard>
      <ImageCard src="./photo.png" alt="Example" />
      <ContentCard>
        <TitleCard>Headline</TitleCard>
        <p>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </p>
        <ActionsCard>
          <Button as="a" href="#link">
            See more
          </Button>
          <Button outline>Save</Button>
        </ActionsCard>
      </ContentCard>
    </WrapperCard>
  );
}

export { Card };
