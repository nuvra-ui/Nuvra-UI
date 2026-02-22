export function ComponentPreview({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="p-2 bg-gray-100 rounded-xl border border-gray-600 flex justify-center items-center h-64 m-5">
      {children}
    </div>
  );
}
