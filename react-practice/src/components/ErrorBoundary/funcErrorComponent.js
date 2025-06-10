// App.js
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorComponent from './ErrorComponent';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // optional: reset some state if needed
      }}
    >
      <ErrorComponent />
    </ErrorBoundary>
  );
}
