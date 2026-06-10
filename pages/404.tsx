import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  font-family: var(--font-outfit), sans-serif;
`;

const Code = styled.h1`
  font-size: clamp(80px, 20vw, 160px);
  font-weight: 600;
  color: #ffb800;
  margin: 0;
  line-height: 1;
  text-shadow: 0 0 40px rgba(255, 184, 0, 0.4);
`;

const Title = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 300;
  color: #ffffff;
  margin: 16px 0 8px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: clamp(14px, 2vw, 16px);
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 40px;
  max-width: 400px;
`;

const HomeLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #ffb800, #d4a017);
  color: #000000;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 32px;
  opacity: 0.9;
`;

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 – Strona nie istnieje | Lazy Swing Band</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Container>
        <Logo
          src="/logo-color.png"
          alt="Lazy Swing Band"
          width={80}
          height={80}
        />
        <Code>404</Code>
        <Title>Strona nie istnieje</Title>
        <Subtitle>
          Ta nuta gdzieś umknęła. Wróć na stronę główną i posłuchaj jak gramy.
        </Subtitle>
        <HomeLink href="/">← Wróć na stronę główną</HomeLink>
      </Container>
    </>
  );
}
