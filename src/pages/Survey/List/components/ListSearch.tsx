import { LIST_SEARCH_PARAM_KEY } from '@/constants';
import { useLocation, useNavigate, useSearchParams } from '@umijs/max';
import { Input } from 'antd';
import type { ChangeEvent } from 'react';
import { FC, useEffect, useState } from 'react';

const { Search } = Input;

const ListSearch: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const [value, setValue] = useState('');
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  // 获取 url 参数，并设置到 input value
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || '';
    setValue(curVal);
  }, [searchParams]);

  function handleSearch(value: string) {
    // 跳转页面，增加 url 参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`, // 去掉了 page pageSize
    });
  }

  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    />
  );
};

export default ListSearch;
