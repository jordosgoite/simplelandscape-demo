import React, { useEffect, useRef } from "react";
import Button from "./Button";
import styles from "./modal.module.css";

type BoxProps = {
  modalStyle?:string;
  children?: React.ReactNode; 
  show:boolean;
  onClose: ()=>void;
  backdropStyle?: string;
};

const Modal = (props: BoxProps) => {
  const modalRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (props.show) {
      modalRef.current?.classList.add(styles.visible);
    } else {
      modalRef.current?.classList.remove(styles.visible);
    }
  }, [props.show]);
  return (
    <React.Fragment>
      <div
        ref={modalRef as React.RefObject<HTMLDivElement>}
        style={props.backdropStyle}
        className={`${styles.modal__wrap}`}
      >
        <div style={props.modalStyle} className={styles.modal}>
          <Button
            onClick={props.onClose}
            style={{
              width: 30,
              height: 30,
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "transparent",
              border: "none",
              color: "#ffffff",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            className={styles.close__btn}
          >
            X
          </Button>
          {props.children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
