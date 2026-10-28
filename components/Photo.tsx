// Shows a photo as a background. If the photo file is not added yet,
// a soft navy colour shows instead, so the layout never breaks.
export function Photo({
  src,
  className = "",
  children,
  position = "center",
}: {
  src: string;
  position?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`bg-[#2b3577] bg-cover ${className}`}
      style={{ backgroundImage: `url(${src})`, backgroundPosition: position }}
    >
      {children}
    </div>
  );
}
