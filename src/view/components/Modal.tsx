import * as RdxDialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import type React from "react";
import { cn } from "../../app/utils/cn";

interface ModalProps {
  open: boolean;
  title: string;
  rightAction?: React.ReactNode;
  children: React.ReactNode;
  onClose?(): void;
}

export function Modal({
  open,
  children,
  title,
  rightAction,
  onClose,
}: ModalProps) {
  return (
    <RdxDialog.Root
      open={open}
      onOpenChange={onClose}
    >
      <RdxDialog.Portal>
        <RdxDialog.Overlay
          className={cn(
            "fixed inset-0 bg-black/80 backdrop-blur-sm z-50",
            "data-[state=open]:animate-overlayShow",
          )}
        />
        <RdxDialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-51 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-100 outline-none ",
            "data-[state=open]:animate-content-show",
          )}
        >
          <header className="h-12 flex items-center justify-between text-gray-800">
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center outline-none cursor-pointer"
            >
              <Cross2Icon className="w-6 h-6" />
            </button>

            <RdxDialog.Title>
              <span className="text-lg tracking=[-1px] font-bold">{title}</span>
            </RdxDialog.Title>

            <div className="w-12 h-12 flex items-center justify-center">
              {rightAction}
            </div>
          </header>
          <div>{children}</div>
        </RdxDialog.Content>
      </RdxDialog.Portal>
    </RdxDialog.Root>
  );
}
