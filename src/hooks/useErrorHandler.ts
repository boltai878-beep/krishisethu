import { useState, useCallback } from 'react';

interface ErrorState {
  error: Error | null;
  isError: boolean;
}

interface UseErrorHandlerReturn {
  error: Error | null;
  isError: boolean;
  setError: (error: Error | null) => void;
  clearError: () => void;
  handleError: (error: unknown) => void;
}

export const useErrorHandler = (): UseErrorHandlerReturn => {
  const [errorState, setErrorState] = useState<ErrorState>({
    error: null,
    isError: false
  });

  const setError = useCallback((error: Error | null) => {
    setErrorState({
      error,
      isError: !!error
    });
  }, []);

  const clearError = useCallback(() => {
    setErrorState({
      error: null,
      isError: false
    });
  }, []);

  const handleError = useCallback((error: unknown) => {
    console.error('Error handled:', error);
    
    if (error instanceof Error) {
      setError(error);
    } else if (typeof error === 'string') {
      setError(new Error(error));
    } else {
      setError(new Error('An unknown error occurred'));
    }
  }, [setError]);

  return {
    error: errorState.error,
    isError: errorState.isError,
    setError,
    clearError,
    handleError
  };
};