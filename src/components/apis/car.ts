import { Api } from './api';
import { ICarProps } from '../models/car.model';

const urlPath = 'https://jsonplaceholder.typicode.com/todos';

const AccountApi = Api.injectEndpoints({
  endpoints: builder => ({
    getCars: builder.query<ICarProps, void>({
      query: () => ({
        url: `${urlPath}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCarsQuery } = AccountApi;
