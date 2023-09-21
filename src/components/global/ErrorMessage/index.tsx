import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type Props = PropsWithChildren & {
  show: boolean;
  type?: "success" | "error" | "info" | "warning";
};

export default function ErrorMessage({
  children,
  show,
  type = "success",
}: Props) {
  const [open, setOpen] = useState(false);

  const classes = useMemo(() => {
    switch (type) {
      case "success":
        return "bg-green-300";
      case "error":
        return "bg-red-300";
      case "info":
        return "bg-blue-300";
      case "warning":
        return "bg-orange-300";
      default:
        return "bg-green-300";
    }
  }, [type]);

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return open
    ? createPortal(
        <button
          className={`alert p-3 rounded cursor-pointer text-left ${classes}`}
          onClick={() => setOpen(false)}
        >
          {children}
        </button>,
        document.getElementById("alerts-container") as HTMLElement
      )
    : null;
}
