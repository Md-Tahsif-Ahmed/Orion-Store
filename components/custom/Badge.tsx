// import * as React from "react"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const badgeVariants = cva(
//    "inline-flex items-center text-xs font-semibold w-fit capitalize cursor-pointer",{
//     variants: {
//       variant: {
//         // color of badge 
//         primary: "",
//         secondary: "",
//         success: "",
//         danger: "",
//         warning:
//           "bg-warning-500 border border-warning-500 hover:bg-warning-600 disabled:bg-warning-200 dark:text-warning-500 dark:hover:bg-warning-50 dark:border-warning-500 dark:disabled:bg-danger-200 dark:disabled:border-danger-200 px-2.5 py-0.5",
//         outline: "",
//         gray: "",

//       },

//     active: {
//         true: "",
//         false: "",
//     },
//     size: {
//         rounded: "",
//     }
//     },
//     defaultVariants: {
//       variant: "primary",
//       active: false,
//     },
//   }
// )

// export interface BadgeProps
//   extends React.HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof badgeVariants> {}

// function Badge({ className, variant, ...props }: BadgeProps) {
//   return (
//     <div className={cn(badgeVariants({ variant }), className)} {...props} />
//   )
// }

// export { Badge, badgeVariants }
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center text-xs font-semibold w-fit capitalize cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-white px-2.5 py-0.5",
        secondary: "bg-secondary-500 text-white px-2.5 py-0.5",
        success: "bg-green-500 text-white px-2.5 py-0.5",
        danger: "bg-red-500 text-white px-2.5 py-0.5",
        warning:
          "bg-warning-500 border border-warning-500 hover:bg-warning-600 disabled:bg-warning-200 dark:text-warning-500 dark:hover:bg-warning-50 dark:border-warning-500 dark:disabled:bg-danger-200 dark:disabled:border-danger-200 px-2.5 py-0.5",
        outline: "border border-gray-300 text-gray-700 px-2.5 py-0.5",
        gray: "bg-gray-200 text-gray-700 px-2.5 py-0.5",
      },
      active: {
        true: "ring-2 ring-offset-1 ring-primary-500",
        false: "",
      },
      size: {
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      active: false,
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, active, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, active, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

