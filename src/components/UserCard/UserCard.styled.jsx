import styled from "styled-components";

export const UserCardItem = styled.li`
  width: 380px;
  height: 460px;
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    scale: 1.04;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  height: 218px;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;

    content: "";
    width: 100%;
    height: 8px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ImageLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const CardHeroPicture = styled.img`
  margin: 28px 36px 16px;
`;

export const AvatarCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translate(-50%, 50%);
  z-index: 10;
  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarImage = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 62px 16px 36px;
`;

export const InfoTweets = styled.p`
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const InfoFollowers = styled.p`
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const ButtonFollow = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  margin: 0 auto;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;

  font-weight: 600;
  font-family: inherit;
  font-size: 18px;
  font-size: 100%;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
