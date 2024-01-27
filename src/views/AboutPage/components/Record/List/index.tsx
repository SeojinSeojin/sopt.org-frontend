import Flex from '@src/components/common/Flex';
import { AboutInfoType } from '@src/lib/types/about';
import RecordItem from '../Item';

type RecordListProps = Pick<AboutInfoType, 'records'>;

const RecordList = (props: RecordListProps) => {
  return (
    <Flex
      dir={{ mobile: 'column', tablet: 'row', desktop: 'row' }}
      gap={{ mobile: 16, tablet: 20, desktop: 30 }}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <RecordItem
        type="block"
        title="활동 멤버"
        countNumber={props.records.memberCount}
        countString="명"
      />
      <RecordItem
        type="link"
        title="프로젝트"
        countNumber={props.records.projectCount !== 0 ? props.records.projectCount : undefined}
        countString={props.records.projectCount !== 0 ? '개' : '진행중'}
        href="/project"
      />
      <RecordItem
        type="link"
        title="스터디"
        countNumber={props.records.studyCount}
        countString="개"
        href="/study"
      />
    </Flex>
  );
};

export default RecordList;
