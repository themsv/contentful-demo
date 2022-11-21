import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <h4>COMPANY</h4>
        <li>About Us</li>
        <li>Leadership Team</li>
        <li>Locations</li>
        <li>Success Stories</li>
        <li>Articles</li>
        <li>Privacy Policy</li>
      </FooterSection>
      <FooterSection>
        <h4>CAREERS</h4>
        <li>Working for Wissen</li>
        <li>Opportunities @ Wissen Technology</li>
        <li>Opportunities @ Wissen Infotech</li>
        <li>Opportunities @ Wissen Infotech USA</li>
      </FooterSection>
      <FooterSection>
        <h4>WISSEN TECHNOLOGY</h4>
        <FooterLogos>
          <ion-icon size="large" name="logo-facebook"></ion-icon>
          <ion-icon size="large" name="logo-twitter"></ion-icon>
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
          <ion-icon size="large" name="logo-youtube"></ion-icon>
        </FooterLogos>
        <h4>WISSEN INFOTECH</h4>
        <FooterLogos>
          <ion-icon size="large" name="logo-facebook"></ion-icon>
          <ion-icon size="large" name="logo-twitter"></ion-icon>
          <ion-icon size="large" name="logo-linkedin"></ion-icon>
          <ion-icon size="large" name="logo-youtube"></ion-icon>
        </FooterLogos>
      </FooterSection>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  display: flex;
  background-color: #ced4da;
  justify-content: space-around;
  color: #0a2246;
  padding: 1rem 0 4rem;
  margin-top: 1rem;
`;

const FooterSection = styled.ul`
  list-style: none;
  h4 {
    margin: 2rem 0;
    letter-spacing: 2px;
  }
  li {
    margin: 10px 0;
  }

  &:last-of-type {
    h4 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const FooterLogos = styled.div`
  display: flex;
  justify-content: space-between;
`;
