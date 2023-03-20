import React, { type ReactNode } from 'react';

interface ErrorBoundaryProps {
  fallback: ReactNode
  children: ReactNode
}

interface ErrorBoundaryStates {
  hasError: boolean
  error: any
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryStates> {
  constructor (props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError (error: any) {
    return { hasError: true, error };
  }

  render (): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
