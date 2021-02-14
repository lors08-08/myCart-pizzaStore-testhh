import React from "react";
import { Dialog, DialogActions, DialogTitle, Slide } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function OrderSucceed({ onClose, open }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Ваш заказ отправлен на готовку, вы его скоро получите!"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            <h3>Ok</h3>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default OrderSucceed;
