import { Card, CardContent, CardProps, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SubCampaign } from "~/types";

interface CampaignBoxProps extends CardProps {
  subCampaign: SubCampaign;
}

const CampaignBox = ({ subCampaign, style, ...props }: CampaignBoxProps) => {
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
          {subCampaign.name}
          <CheckCircleIcon
            sx={{ fontSize: 14, ml: 1 }}
            color={subCampaign.status ? "success" : "disabled"}
          />
        </Typography>
        <Typography variant="h6">{subCampaign.ads.length}</Typography>
      </CardContent>
    </Card>
  );
};

export default CampaignBox;
