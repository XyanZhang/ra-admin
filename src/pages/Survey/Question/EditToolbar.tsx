import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  RedoOutlined,
  UndoOutlined,
  UpOutlined,
} from '@ant-design/icons';
import { Button, Space, Tooltip } from 'antd';
import { FC } from 'react';

const EditToolbar: FC = () => {
  // 删除组件
  function handleDelete() {}

  // 隐藏组件
  function handleHidden() {}

  // 锁定组件
  function handleLock() {}

  // 复制
  function copy() {}

  // 粘贴
  function paste() {}

  // 上移
  function moveUp() {}

  // 下移
  function moveDown() {}

  // 撤销
  function undo() {}

  // 重做
  function redo() {}

  return (
    <Space>
      <Tooltip title="删除">
        <Button
          size="large"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={handleDelete}
        ></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          size="large"
          shape="circle"
          icon={<EyeInvisibleOutlined />}
          onClick={handleHidden}
        ></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          size="large"
          shape="circle"
          icon={<LockOutlined />}
          onClick={handleLock}
          // type={isLocked ? 'primary' : 'default'}
        ></Button>
      </Tooltip>
      <Tooltip title="复制">
        <Button
          size="large"
          shape="circle"
          icon={<CopyOutlined />}
          onClick={copy}
        ></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          size="large"
          shape="circle"
          icon={<BlockOutlined />}
          onClick={paste}
          // disabled={copiedComponent == null}
        ></Button>
      </Tooltip>
      <Tooltip title="上移">
        <Button
          size="large"
          shape="circle"
          icon={<UpOutlined />}
          onClick={moveUp}
          // disabled={isFirst}
        ></Button>
      </Tooltip>
      <Tooltip title="下移">
        <Button
          size="large"
          shape="circle"
          icon={<DownOutlined />}
          onClick={moveDown}
          // disabled={isLast}
        ></Button>
      </Tooltip>
      <Tooltip title="撤销">
        <Button
          size="large"
          shape="circle"
          icon={<UndoOutlined />}
          onClick={undo}
        ></Button>
      </Tooltip>
      <Tooltip title="重做">
        <Button
          size="large"
          shape="circle"
          icon={<RedoOutlined />}
          onClick={redo}
        ></Button>
      </Tooltip>
    </Space>
  );
};

export default EditToolbar;
