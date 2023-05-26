import useAsync from '../useAsync';

import * as gitHubApi from '../../services/gitHubApi';

export default function useGitHubSignIn() {
  const {
    loading: gitHubSignInLoading,
    error: gitHubSignInError,
    act: gitHubSignIn
  } = useAsync(gitHubApi.getToken, false);

  return {
    gitHubSignInLoading,
    gitHubSignInError,
    gitHubSignIn
  };
}
