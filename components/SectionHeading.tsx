import { cn } from "@/lib/cn";

export function SectionHeading({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[32px] font-semibold leading-[36px] tracking-[-0.01em] lg:text-[64px] lg:leading-[66px] lg:tracking-normal text-ink",
        className
      )}
    >
      {children}
    </h2>
  );
}
