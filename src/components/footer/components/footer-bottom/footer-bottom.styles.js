import styled from 'styled-components';

export const FooterBottomStyles = styled.div`
  background: #F8F8F8;
  padding: 10px 0;
`;

export const FooterCopyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const CopyrightText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #121212;
  opacity: 80%;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 750px) {
    margin-top: 20px;
  }
`;

export const Copyright2 = styled.div`
  display: none;
  font-size: 15px;
  font-weight: 500;
  color: #121212;
  opacity: 80%;

  @media screen and (max-width: 750px) {
    display: block;
    padding-left: 15px;
  }

  @media screen and (max-width: 460px) {
    font-size: 12px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;

export const PaymentMethod = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaymentMethodIcon = styled.img`
  padding: 0 5px;
  filter: grayscale(100%);
  opacity: .8;
  transition: 0.3s ease;
  width: 50px;

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }

  @media screen and (max-width: 460px) {
    width: 40px;
  }
`;

export const AuthorText = styled.div`
  color: #121212;
  font-weight: 500;
  opacity: 80%;
  text-decoration: underline;
  font-size: 15px;

  @media screen and (max-width: 460px) {
    font-size: 12px;
  }

  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;

export const AuthorName = styled.span`
  font-weight: 700;
  color: var(--color-blue);
  font-size: 15px;
  
  & span{
    color: var(--color-blue);
  }

  @media screen and (max-width: 460px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;