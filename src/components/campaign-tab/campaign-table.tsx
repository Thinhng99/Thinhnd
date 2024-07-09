import {
  Button,
  Input,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Ad } from "~/types";

interface CampaignFormTableProps {
  indexAds: number;
  subCampaignData: Ad[];
}
const CampaignTable = ({ indexAds }: CampaignFormTableProps) => {
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `subCampaigns[${indexAds}].ads`,
  });

  const handleAddRow = () => {
    append({
      name: `Quảng cáo ${fields.length + 1}`,
      quantity: 0,
    });
  };
  const handleRemoveRow = (index: number) => {
    remove(index);
  };

  return (
    <div>
      <div style={{ margin: "40px 0" }}>Danh sách quảng cáo</div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "40%" }}>Tên quảng cáo</TableCell>
              <TableCell style={{ width: "40%" }}>Số lượng</TableCell>
              <TableCell style={{ width: "20%" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddRow}
                >
                  Thêm
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((item: any, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Controller
                    name={`subCampaigns[${indexAds}].ads[${index}].name`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        value={getValues(
                          `subCampaigns[${indexAds}].ads[${index}].name`
                        )}
                        onChange={(e) => {
                          console.log(
                            getValues(`subCampaigns[${indexAds}].ads`)
                          );
                          setValue(
                            `subCampaigns[${indexAds}].ads[${index}].name`,
                            e.target.value
                          );
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`subCampaigns[${indexAds}].ads[${index}].quantity`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="number"
                        {...field}
                        value={getValues(
                          `subCampaigns[${indexAds}].ads[${index}].quantity`
                        )}
                        onChange={(e) => {
                          setValue(
                            `subCampaigns[${indexAds}].ads[${index}].quantity`,
                            e.target.value
                          );
                        }}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleRemoveRow(index)}
                  >
                    Xóa
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CampaignTable;
