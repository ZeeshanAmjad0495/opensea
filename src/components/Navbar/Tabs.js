import { Tabs as AntTabs } from 'antd';

import { TabsData } from './TabsData';

const { TabPane } = AntTabs;

function callback(key) {
  console.log(key);
}

const Tabs = () => (
  <AntTabs defaultActiveKey="1" onChange={callback}>
    {TabsData.map((id, title) => {
      return (
        <TabPane key={id} tab={title}>
          Content
        </TabPane>
      );
    })}
  </AntTabs>
);

export default Tabs;
