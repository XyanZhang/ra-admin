import { useTitle } from 'ahooks';
import { FC } from 'react';
import EditHeader from './EditHeader';
// import EditCanvas from './EditCanvas'
// import LeftPanel from './LeftPanel'
// import RightPanel from './RightPanel'
import styles from './index.less';

const Edit: FC = () => {
  useTitle(`问卷编辑 - `);

  return (
    <div className={styles.container}>
      <EditHeader />
      <div className={styles['content-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>{/* <LeftPanel /> */}</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              {/* <EditCanvas loading={loading} /> */}
            </div>
          </div>
          <div className={styles.right}>{/* <RightPanel /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
