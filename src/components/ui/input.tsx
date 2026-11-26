import * as React from 'react';
import { cn } from '@/src/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'flex min-h-[44px] w-full rounded-lg border border-[#E2E6EC] bg-white px-3.5 py-2 text-sm text-[#181C24] placeholder:text-[#788296] transition-colors duration-150 focus-visible:border-[#1D6FE8] focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-[#1D6FE8]/25 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
