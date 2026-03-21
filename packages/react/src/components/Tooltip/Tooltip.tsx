type Props = React.HHTMLAttributes<HTMLDivElement> & {
  content;
  children;
  placement?: "right" | "left" | "bottom" | "top";
};

export function Tooltip({
  content,
  children,
  placement = "top",
  ...props
}: Props) {
  const placementClasses = {
    top: "bottom-full mb-1 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-1 left-1/2 -translate-x-1/2",
    left: "right-full mr-1 top-1/2 -translate-y-1/2",
    right: "left-full ml-1 top-1/2 -translate-y-1/2",
  };

  return (
    <div className="group relative flex flex-col items-center">
      {children}
      <div
        className={`${placementClasses[placement]} hidden group-hover:block bg-primary/90 absolute text-white rounded-sm text-sm py-[2px] px-1 whitespace-nowrap`}
        {...props}
      >
        {content}
      </div>
    </div>
  );
}
