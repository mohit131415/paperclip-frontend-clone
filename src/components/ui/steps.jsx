"use client"

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Steps = forwardRef(({ className, value = 0, onChange, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-4", className)} {...props} />
));
Steps.displayName = "Steps";

const StepsContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
StepsContent.displayName = "StepsContent";

const StepsItem = forwardRef(({ value, title, className, ...props }, ref) => (
  <div ref={ref} role="tabpanel" className={cn("", className)} {...props} />
));
StepsItem.displayName = "StepsItem";

const StepsPanel = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm", className)}
    {...props}
  />
));
StepsPanel.displayName = "StepsPanel";

const StepsList = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-4", className)} {...props} />
));
StepsList.displayName = "StepsList";

const StepsListItem = forwardRef(({ value, title, description, isActive, isComplete, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative flex flex-1 items-center justify-center gap-2", isComplete && "text-primary", className)}
    {...props}
  >
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-medium",
        isActive && "border-primary bg-primary text-primary-foreground",
        isComplete && "border-primary bg-primary text-primary-foreground"
      )}
    >
      {isComplete ? (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        value + 1
      )}
    </div>
    <div className="hidden flex-col sm:flex">
      <div className="text-sm font-medium">{title}</div>
      {description && <div className="text-sm text-muted-foreground">{description}</div>}
    </div>
    {value !== 3 && (
      <div
        className={cn(
          "absolute left-[calc(50%+1rem)] right-[calc(-50%+1rem)] top-4 h-[2px]",
          isComplete ? "bg-primary" : "bg-border"
        )}
      />
    )}
  </div>
));
StepsListItem.displayName = "StepsListItem";

export { Steps, StepsContent, StepsItem, StepsPanel, StepsList, StepsListItem };
