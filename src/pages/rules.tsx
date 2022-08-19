import styled from '@emotion/styled';
import Footer from '@src/components/common/Footer';
import Rules from '@src/components/Rules';
import RulesHead from '@src/components/Rules/RulesHead';
function rules() {
  return (
    <Styled.Root>
      <RulesHead />
      <Rules />
      <Footer />
    </Styled.Root>
  );
}

export default rules;

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
  `,
};
