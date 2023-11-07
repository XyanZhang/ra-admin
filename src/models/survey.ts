// 全局共享数据示例
import { DEFAULT_QUESTION_NAME } from '@/constants';
import { useState } from 'react';

const useSurveyTitle = () => {
  const [title, setTitle] = useState<string>(DEFAULT_QUESTION_NAME);
  return {
    title,
    setTitle,
  };
};

export default useSurveyTitle;
