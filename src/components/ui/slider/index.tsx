"use client";

import { cn } from "@/lib/utils";
import * as Slider from "@radix-ui/react-slider";
import { LegacyRef, forwardRef } from "react";

const SliderRoot = forwardRef<
  React.ElementRef<typeof Slider.Root>,
  React.ComponentPropsWithoutRef<typeof Slider.Root>
>(({ className, ...props }: Slider.SliderProps, ref) => (
  <Slider.Root
    ref={ref}
    className={cn(
      (className =
        "w-full max-w-[350px] md:max-w-none h-5 flex items-center relative select-none touch-none"),
      className
    )}
    {...props}
  />
));
SliderRoot.displayName = Slider.Root.displayName;

const SliderTrack = forwardRef<
  React.ElementRef<typeof Slider.Track>,
  React.ComponentPropsWithoutRef<typeof Slider.Track>
>(({ className, ...props }: Slider.SliderTrackProps, ref) => (
  <Slider.Track
    ref={ref}
    className={cn("h-1.5 flex-grow bg-primary relative rounded-sm", className)}
    {...props}
  />
));
SliderTrack.displayName = Slider.Track.displayName;

const SliderRange = forwardRef<
  React.ElementRef<typeof Slider.Range>,
  React.ComponentPropsWithoutRef<typeof Slider.Range>
>(({ className, ...props }: Slider.SliderRangeProps, ref) => (
  <Slider.Range
    ref={ref}
    className={cn("h-full absolute bg-white rounded-sm", className)}
    {...props}
  />
));
SliderRange.displayName = Slider.Range.displayName;

const SliderThumb = forwardRef<
  React.ElementRef<typeof Slider.Thumb>,
  React.ComponentPropsWithoutRef<typeof Slider.Thumb>
>(({ className, ...props }: Slider.SliderThumbProps, ref) => (
  <Slider.Thumb
    ref={ref}
    className={cn(
      "h-6 w-6 p-1 bg-white rounded-full !block focus:outline-none",
      className
    )}
    {...props}
  />
));
SliderThumb.displayName = Slider.Thumb.displayName;

export { SliderRoot, SliderTrack, SliderRange, SliderThumb };
