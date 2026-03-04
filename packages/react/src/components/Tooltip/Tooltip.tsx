export function Tooltip({
  content,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { content: React.ReactNode }) {
  return (
    <div className="group relative flex flex-col items-center">
      {children}
      <div
        className="hidden group-hover:block bg-primary/90 absolute bottom-full mb-1 text-white rounded-sm text-sm py-[2px] px-1 whitespace-nowrap"
        {...props}
      >
        {content}
      </div>
    </div>
  );
}
