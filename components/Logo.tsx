export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src="/images/logo-icon.png" alt="" className={className} />;
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <img src="/images/logo-wordmark.png" alt="Tech Kidz" className="h-5 w-auto md:h-6" />
    </span>
  );
}
