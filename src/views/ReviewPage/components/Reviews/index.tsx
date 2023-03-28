import { useMemo } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import useFetch from '../../hooks/useFetch';
import { logoPath } from '../../libs/constants';
import { TAB } from '../../types';
import Loading from './Loading';
import * as S from './style';

type ReviewsProps = {
  selectedTab: TAB;
};

const Reviews = ({ selectedTab }: ReviewsProps) => {
  const reviews = useFetch(selectedTab);
  const isMobile = useIsMobile();
  const imageHeight = useMemo(() => (isMobile ? 216 : 240), [isMobile]);

  if (reviews._TAG === 'LOADING') return <Loading />;

  if (reviews._TAG !== 'OK') return null;

  return (
    <S.Wrapper>
      {reviews.data.map((review) => (
        <S.Card key={review.id} href={review.link} target="_blank">
          <S.Section>
            <S.ThumbnailWrapper css={{ height: imageHeight }}>
              <S.Thumbnail
                src={logoPath[review.semester]}
                alt={review.title}
                width={120}
                height="100%"
              />
            </S.ThumbnailWrapper>
            <S.ChipWrapper>
              <S.Chip>{review.part}</S.Chip>
              <S.Chip>{review.semester}기</S.Chip>
            </S.ChipWrapper>
          </S.Section>
          <S.Section>
            <S.Title>{review.title}</S.Title>
            <S.Desc>{review.subject}</S.Desc>
          </S.Section>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default Reviews;