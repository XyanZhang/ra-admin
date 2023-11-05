import axios from '@/utils/ajax';

import type { ResDataType } from '@/types';

type SearchOption = {
  keyword: string;
  isStar: boolean;
  isDeleted: boolean;
  page: number;
  pageSize: number;
};

// 获取（查询）问卷列表
export async function getQuestionListService(
  opt: Partial<SearchOption> = {},
): Promise<ResDataType> {
  const url = '/api/question';
  const data = (await axios.get(url, { params: opt })) as ResDataType;
  return data;
}
