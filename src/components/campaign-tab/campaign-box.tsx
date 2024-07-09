import {
  Card,
  CardContent,
  CardProps,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Ad, SubCampaign } from "~/types";
import { Controller, useFormContext, useWatch } from "react-hook-form";

interface CampaignBoxProps extends CardProps {
  index: number;
  subCampaign: SubCampaign;
}

const CampaignBox = ({
  subCampaign,
  index,
  style,
  ...props
}: CampaignBoxProps) => {
  const {
    control,
    formState: { errors },
    watch,
    getValues,
  } = useFormContext();
  const watchStatus = watch(`subCampaigns[${index}].status`, true);
  const watchAdsTotal = watch(`subCampaigns[${index}].ads`, 0);
  const totalAds = watchAdsTotal?.reduce((total: any, init: Ad) => {
    return total + init?.quantity;
  }, 0);
  return (
    <Card
      sx={{
        minWidth: 210,
        height: 120,
        ml: 2,
        mb: 1,
        cursor: "pointer",
        border: "2px solid #fafafa",
        textAlign: "center",
        ...style,
      }}
      {...props}
    >
      <CardContent>
        <Typography variant="h6">
          <Controller
            name={`subCampaigns[${index}].name`}
            control={control}
            render={() => (
              <span>{getValues(`subCampaigns[${index}].name`)}</span>
            )}
          />
          <CheckCircleIcon
            sx={{ fontSize: 14, ml: 1 }}
            color={watchStatus ? "success" : "disabled"}
          />
        </Typography>
        <Typography variant="h6">{totalAds}</Typography>
      </CardContent>
    </Card>
  );
};

export default CampaignBox;
