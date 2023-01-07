import styled from '@emotion/styled';
import { useState } from 'react';
import { useIsDesktop, useIsTablet } from '@src/hooks/useIsDesktop';
import { questionList, questionListMobile, questionListTablet } from '../../lib/constants';
import QuestionBox from './QuestionBox';

function FAQ() {
  const [status, setStatus] = useState(new Set());
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();
  const isMobile = !isDesktop && !isTablet;

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);

    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Title>FAQ</Styled.Title>
        <Styled.Caption>자주 묻는 질문</Styled.Caption>
      </Styled.Header>

      <Styled.FAQWrapper>
        {isDesktop &&
          questionList.map((info, index) => (
            <div key={index} onClick={() => toggleBox(index)}>
              <QuestionBox info={info} status={status.has(index)} />
            </div>
          ))}
        {isTablet &&
          questionListTablet.map((info, index) => (
            <div key={index} onClick={() => toggleBox(index)}>
              <QuestionBox info={info} status={status.has(index)} />
            </div>
          ))}
        {isMobile &&
          questionListMobile.map((info, index) => (
            <div key={index} onClick={() => toggleBox(index)}>
              <QuestionBox info={info} status={status.has(index)} />
            </div>
          ))}
      </Styled.FAQWrapper>
    </Styled.Root>
  );
}

export default FAQ;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      align-items: center;
    }
  `,
  Header: styled.div`
    margin-bottom: 100px;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,
  Title: styled.h1`
    font-family: 'SUIT';
    font-weight: 800;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: -0.01em;
    color: #ffffff;
    margin-bottom: 24px;
  `,
  Caption: styled.p`
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -0.01em;
    color: #787878;
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      font-size: 25px;
    }
  `,
  FAQWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 240px;
    & > div:not(:last-child) {
      margin-bottom: 30px;
    }
    /* 태블릿 뷰 */
    @media (max-width: 1280px) {
      padding-left: 38.5px;
      padding-right: 41.5px;
    }
  `,
};
