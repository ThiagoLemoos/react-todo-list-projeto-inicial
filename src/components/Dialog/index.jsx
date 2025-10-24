import React, { useEffect, useRef } from "react";
import "./dialog.style.css"
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
    const dialogRef = useRef(null)

    useEffect(() => {
        console.log("Deveriamos mostrar a modal?", isOpen);
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
    };
    return (
        <React.Fragment>
            <dialog className="dialog" ref={dialogRef}>
                <div className="btn-close-wrapper">
                    <button
                        autoFocus
                        onClick={onClose}
                        className="btn-close">
                        <IconClose />
                    </button>
                </div>
                <div className="body">
                    {children}
                </div>
            </dialog>
        </React.Fragment>
    )
}