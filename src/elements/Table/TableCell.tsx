import MUICell from "@mui/material/TableCell";

type Props = {
  text: string;
  tableHead?: boolean;
  rowSpan?: number;
};

const TableCell = ({ text, tableHead = false, rowSpan = undefined }: Props) => {
  return (
    <MUICell
      component={tableHead ? "th" : undefined}
      scope={tableHead ? "row" : undefined}
      align="left"
      rowSpan={rowSpan}
      sx={{ width: tableHead ? "120px" : "auto", padding: "10px" }}
    >
      {text}
    </MUICell>
  );
};

export default TableCell;
