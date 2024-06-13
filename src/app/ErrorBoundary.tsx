'use client';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen w-screen bg-primary flex flex-col items-center justify-center gap-6">
          <h2 className="font-bold text-lg text-secondary">Something went wrong!</h2>
          <div className="flex gap-6">
            <button
              className="bg-transparent border border-secondary px-6 py-4 rounded-[25px] text-secondary text-sm"
              onClick={this.handleReset}
            >
              Try again
            </button>
            <Link href="/">
              <button className="px-6 py-4 rounded-[25px] text-sm text-black bg-secondary">
                Back Home
              </button>
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
