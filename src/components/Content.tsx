import { Checkbox, List } from 'antd';
import { HeaderProps } from '../models/models';
export const Content = ({ selectedIds, setSelectedIds, data }: HeaderProps) => {
  const onItemCheckChange = (id: number, checked: boolean) => {
    const newSelectedIds = checked
      ? [...selectedIds, id]
      : selectedIds.filter((selectedId) => selectedId !== id);
    setSelectedIds(newSelectedIds);
  };
  const itemChecked = (id: number) => selectedIds.includes(id);
  return (
    <List
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Checkbox
            checked={itemChecked(item.id)}
            onChange={(e) => onItemCheckChange(item.id, e.target.checked)}>
            {item.name} {item.price}
          </Checkbox>
        </List.Item>
      )}
    />
  );
};
