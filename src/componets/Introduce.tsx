import { useContext } from "react";
import { INTRODUCE_MESSAGE, INTRODUCE_TABLE } from "../constants";
import Text from "../elements/Text";
import ContentLanguage from "../store";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { ageHandler } from "../utils/ageHandler";
import TableCell from "../elements/Table/TableCell";

const Introduce = () => {
  const { language } = useContext(ContentLanguage);
  return (
    <div className="my-10 border h-[80vh] flex">
      <div className="flex-1">
        <Text text={INTRODUCE_MESSAGE["title"][language]} size="medium" />
        <Text
          text={INTRODUCE_MESSAGE["content"][language]}
          size="small"
          extraStyle="whitespace-pre-line"
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell text={INTRODUCE_TABLE["age"][language]} tableHead />
              <TableCell text={ageHandler().toString()} />
            </TableRow>
            <TableRow>
              <TableCell text={INTRODUCE_TABLE["tel"][language]} tableHead />
              <TableCell text="+81 80-2237-2483" />
            </TableRow>
            <TableRow>
              <TableCell text="Email" tableHead />
              <TableCell text="aubreylin1217@gmail.com" />
            </TableRow>
            <TableRow>
              <TableCell
                text={INTRODUCE_TABLE["address"][language]}
                tableHead
              />
              <TableCell text={INTRODUCE_TABLE["addressContent"][language]} />
            </TableRow>
            <TableRow>
              <TableCell
                text={INTRODUCE_TABLE["certification"][language]}
                rowSpan={4}
                tableHead
              />
              <TableCell text="JLPT N1" />
            </TableRow>
            <TableRow>
              <TableCell text="TOEIC 825" />
            </TableRow>
            <TableRow>
              <TableCell text="Udemy - The Complete 2022 Web Development Bootcamp" />
            </TableRow>
            <TableRow>
              <TableCell text="Coursera - Meta Front-End Developer Professional Certificate" />
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Introduce;
