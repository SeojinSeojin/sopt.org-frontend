import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import { ExtraPart } from '@src/lib/types/universal';
import { OvalSpinner } from '@src/views/ProjectPage/components';
import { logoPath } from '../../assets/logo';
import useFetch from '../../hooks/useFetch';
import * as S from './style';

type ReviewsProps = {
  selectedTab: ExtraPart;
};

const Reviews = ({ selectedTab }: ReviewsProps) => {
  const { state: reviews, ref, canGetMoreReviews } = useFetch(selectedTab);
  const isMobile = useIsMobile();
  const imageHeight = useMemo(() => (isMobile ? 216 : 240), [isMobile]);

  if (!(reviews._TAG === 'OK' || reviews._TAG === 'LOADING')) return null;

  return (
    <>
      <S.Wrapper>
        {reviews.data.map((review, idx) => (
          <motion.div
            key={`${review.id}-${idx}`}
            initial={{
              opacity: 0,
              translateY: '30px',
              filter: 'none',
            }}
            transition={{ delay: (idx % 3) / 10 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            whileHover={{ filter: 'drop-shadow(2px 6px 8px rgba(0,0,0,0.8))', scale: 1.04 }}
          >
            <S.Card href={review.link} target="_blank">
              <S.Section>
                <S.ThumbnailWrapper>
                  <S.Thumbnail
                    src={logoPath[review.semester]}
                    alt={review.title}
                    width={120}
                    height={imageHeight}
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
          </motion.div>
        ))}
      </S.Wrapper>
      {(canGetMoreReviews || reviews._TAG === 'LOADING') && (
        <S.SpinnerWrapper ref={canGetMoreReviews ? ref : undefined}>
          <OvalSpinner />
        </S.SpinnerWrapper>
      )}
    </>
  );
};

export default Reviews;
