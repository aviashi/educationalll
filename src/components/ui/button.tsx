import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/src/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D6FE8] disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default:
          'bg-[#1D6FE8] text-white hover:bg-[#165BC4] active:bg-[#134EA8] shadow-[0_1px_2px_rgba(29,111,232,0.2)]',
        secondary:
          'bg-[#EEF1F5] text-[#181C24] hover:bg-[#E2E6EC] active:bg-[#D5DCE6]',
        outline:
          'border border-[#E2E6EC] bg-white text-[#181C24] hover:bg-[#F6F7F9] hover:border-[#CFD6E0]',
        ghost:
          'text-[#5A6475] hover:bg-[#EEF1F5] hover:text-[#181C24]',
      },
      size: {
        default: 'min-h-[42px] px-4 py-2',
        sm: 'min-h-[38px] px-3 py-1.5 text-xs',
        lg: 'min-h-[46px] px-5 py-2.5 text-sm',
        icon: 'min-h-[44px] min-w-[44px] p-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { buttonVariants };
