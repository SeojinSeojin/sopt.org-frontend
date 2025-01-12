import { track } from '@amplitude/analytics-browser';
import Image from 'next/image';
import { ReactComponent as ArrowLeft } from '@src/assets/icons/arrow_left_28x28.svg';
import { ReactComponent as ArrowRight } from '@src/assets/icons/arrow_right_28x28.svg';
import { useHorizontalScroll } from '@src/hooks/useHorizontalScroll';
import { corporatedLinkedActivities } from './constants';
import styles from './corporate-linked-activities.module.scss';

const CorporateLinkedActivities = () => {
  const {
    scrollableRef,
    onClickLeftButton,
    onClickRightButton,
    isLeftScrollable,
    isRightScrollable,
  } = useHorizontalScroll(930, 2);

  return (
    <section className={styles.container}>
      <div className={styles.summary}>
        <h3 className={styles.title}>SOPT와 함께한 기업 연계 활동</h3>
        <h4 className={styles.subtitle}>다양한 기업 및 단체와 함께 진행했어요.</h4>
      </div>
      <div className={styles.contentWrapper}>
        <div
          className={styles.arrowWrapper}
          onClick={() => {
            onClickLeftButton(scrollableRef.current);
            track('click_sponsor_activity_next');
          }}
        >
          <ArrowLeft stroke={isLeftScrollable ? 'white' : 'grey'} />
        </div>
        <div className={styles.content} ref={scrollableRef}>
          {corporatedLinkedActivities.map(({ year, name, description, subDescription, imgSrc }) => {
            return (
              <article className={styles.item} key={name}>
                <span className={styles.year}>{year}</span>
                <Image className={styles.activityImage} src={imgSrc} alt={name} />
                <h5 className={styles.name}>{name}</h5>
                <p className={styles.description}>{description}</p>
                {subDescription.length > 0 && (
                  <p className={styles.subDescription}>{subDescription}</p>
                )}
              </article>
            );
          })}
        </div>
        <div
          className={styles.arrowWrapper}
          onClick={() => {
            onClickRightButton(scrollableRef.current);
            track('click_sponsor_activity_next');
          }}
        >
          <ArrowRight stroke={isRightScrollable ? 'white' : 'grey'} />
        </div>
      </div>
    </section>
  );
};

export default CorporateLinkedActivities;
