import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Let Us Proceed logo, go to homepage" className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/proceed-mark.svg" alt="" width={44} height={44} className="h-11 w-11" />
      <span className="font-sans text-[34px] font-semibold leading-none tracking-tight text-ink">
        Proceed
      </span>
    </Link>
  );
}
