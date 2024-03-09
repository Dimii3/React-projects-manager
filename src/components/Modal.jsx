import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, ButtonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 rounded-md p-4 shadow-md"
    >
      {children}
      <form method="dialog">
        <button className="duration-300 border-solid border-[1px] border-stone-800 text-stone-800 hover:bg-stone-950 hover:text-stone-50 rounded-md py-1 px-4">
          {ButtonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
