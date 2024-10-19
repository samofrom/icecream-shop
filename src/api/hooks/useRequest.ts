import { useState } from 'react';

import { ErrorType } from '../base.api.ts';

type Statuses = 'idle' | 'pending' | 'success' | 'failed';

export function useRequest<Req, Resp>(cb: (data?: Req) => Promise<Resp>) {
  const [status, setStatus] = useState<Statuses>('idle');
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<Resp | null>(null);

  const makeRequest = async (data?: Req) => {
    setStatus('pending');
    setError(null);

    try {
      const response = await cb(data);
      setResponse(response);
      setStatus('success');
    } catch (error) {
      const { message } = error as ErrorType;
      setStatus('failed');
      setError(message);
    }
  };

  return {
    makeRequest,
    response,
    error,
    status,
    isLoading: status === 'pending',
  };
}
