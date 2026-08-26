export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[4px] bg-line px-3 pt-[9px] pb-[7px] text-[16px] font-light leading-[16px] text-ink">
      {children}
    </span>
  );
}
