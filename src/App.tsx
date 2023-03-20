import React, { Suspense } from 'react';
import { Data } from './Data';
import { ErrorBoundary } from './ErrorBoundary';

export default function App () {
  return (
    <div className='main'>
      <ErrorBoundary fallback={<div>Error</div>} >
        <Suspense fallback={<div>Loading...</div>} >
          <Data url='https://dummyjson.com/products/1' />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
