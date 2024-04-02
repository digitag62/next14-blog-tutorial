import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger" | "success";
}

export const Callout = ({
  children,
  type = "default",
  ...props
}: CalloutProps) => {
  return (
    <div
      className={cn(
        "my-6 items-start rounded-md border boder-l-4 p-4 w-full dark:max-w-none",
        {
          "border-red-900 bg-red-100 dark:prose": type === "danger",
          "border-yellow-900 bg-yellow-100 dark:prose": type === "warning",
          "border-emerald-900 bg-emerald-100 dark:prose": type === "success",
        }
      )}
      {...props}
    >
      <div>{children}</div>
    </div>
  );
};
