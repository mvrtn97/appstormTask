import { Collapse, Checkbox } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { HeaderProps } from '../models/models';
import { Content } from './Content';
import { CheckboxWrapper, HeaderWrapper } from '../styles/styled-components';

const { Panel } = Collapse;

export const Header = ({ selectedIds, setSelectedIds, data, labelName }: HeaderProps) => {
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setSelectedIds(e.target.checked ? data.map((item) => item.id) : []);
  };
  const isAllSelected = data.length > 0 && selectedIds.length === data.length;

  return (
    <>
      <HeaderWrapper>
        <CheckboxWrapper>
          <Checkbox
            onChange={onCheckAllChange}
            checked={isAllSelected}
            indeterminate={selectedIds.length > 0 && !isAllSelected}
          />
        </CheckboxWrapper>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (isActive ? <UpOutlined /> : <DownOutlined />)}
          className="site-collapse-custom-collapse"
          expandIconPosition="right">
          <Panel header={labelName} key="1">
            <Content selectedIds={selectedIds} setSelectedIds={setSelectedIds} data={data} />
          </Panel>
        </Collapse>
      </HeaderWrapper>
    </>
  );
};
