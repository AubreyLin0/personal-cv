import Alert from "@mui/material/Alert";
import MUISnackbar from "@mui/material/Snackbar";
import { AlertType } from "../types";

type Props = {
  isOpen: boolean;
  type: AlertType;
  message: string;
  handleClose: () => void;
};

const Snackbar = ({ isOpen, type, message, handleClose }: Props) => {
  return (
    <MUISnackbar
      open={isOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MUISnackbar>
  );
};

export default Snackbar;
