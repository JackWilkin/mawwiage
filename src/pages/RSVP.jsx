import styled from 'styled-components';

export default function RSVP() {

  return (
    <Background>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScG9byDlzRt0n4xlyCsfs0Yic1xI8tlwkClZzy8ZJBESiL8vw/viewform?embedded=true" width="640" height="1135" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Background>
  );
}

const Background = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 767px) {
    iframe[src*="docs"] {
      width: 100% !important;
      height: 90vh !important;
      max-width: 100% !important;
      border: none !important;
      display: block;
    }
  }
`;



