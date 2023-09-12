import { extraTabs } from '@src/lib/constants/tabs';
import { ExtraPart, ExtraTabType } from '@src/lib/types/universal';
import * as S from './style';

type TabBarProps = {
  selectedTab: ExtraPart;
  onTabClick(targetTab: ExtraPart): void;
};

const TabBar = ({ onTabClick, selectedTab }: TabBarProps) => {
  return (
    <S.TabBar>
      {extraTabs.map((tab) => (
        <Tab
          key={tab.value}
          onClick={() => onTabClick(tab.value)}
          tab={tab}
          selected={selectedTab === tab.value}
        />
      ))}
    </S.TabBar>
  );
};

type TabProps = {
  onClick(): void;
  tab: ExtraTabType;
  selected: boolean;
};

const Tab = ({ onClick, tab, selected }: TabProps) => (
  <S.Tab selected={selected} onClick={onClick}>
    {tab.label}
  </S.Tab>
);

export default TabBar;
