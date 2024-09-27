import { useFetch } from '../../hooks';

type PostData = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const Demo1 = () => {
  const { data, isLoading, error, refetch } = useFetch<PostData[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div>
      <div>
        <button onClick={() => refetch({ _limit: '5' })}>Refetch</button>
      </div>
      {isLoading && 'Loading...'}
      {error && 'Something went wrong'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
    </div>
  );
};
