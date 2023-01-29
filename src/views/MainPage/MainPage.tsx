import { Footer, Header, Layout, ScrollToTopButton } from '@src/components';
import {
  ActivityDescription,
  BannerImage,
  CoporatePartner,
  CorporateLinkedActivities,
  DetailedInformation,
  PartDescription,
  SoptHistory,
} from '@src/views/MainPage/components';
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <>
      <Layout>
        <Header />
        <ScrollToTopButton />
        <BannerImage />
        <div className={styles.container}>
          <div className={styles.content}>
            <SoptHistory />
            <PartDescription />
            <ActivityDescription />
            <DetailedInformation />
            <CoporatePartner />
            <CorporateLinkedActivities />
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default MainPage;
