import { cn } from "@nuvra-ui/utils" 

export function PinInput({className, children, ...props}) {
  return (  
    <input 
      className={cn("bg-secondary border-2 text-center text-12 text-xl font-bold border-secondary-foreground rounded-md w-10 h-10", className)} 
      type="text" inputMode="numeric" maxLength={1} {...props} 
    />
  );
}
