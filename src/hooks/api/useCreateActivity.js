import useAsync from '../useAsync';
import useToken from '../useToken';

import * as activitiesApi from '../../services/activities';

export default function useCreateActivity() {
  const token = useToken();

  const {
    loading: activitiesLoading,
    error: activitiesError,
    act: createActivity,
  } = useAsync((data) => activitiesApi.createActivity(data, token), false);

  return {
    activitiesLoading,
    activitiesError,
    createActivity,
  };
}
