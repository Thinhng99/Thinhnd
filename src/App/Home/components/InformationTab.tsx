import { Grid, TextField } from "@mui/material";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { CampaignInformation } from "../../../utils/home.type";
import TextFieldComp from "../../../components/TextFieldComp";
import { renderRequireField } from "../../../utils/helper";

const initialValue: CampaignInformation = {
  name: "",
  describe: "",
};
const InformationTab: React.FC = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="information.name"
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextFieldComp
              {...field}
              label={renderRequireField("Tên chiến dịch")}
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          control={control}
          name="information.describe"
          render={({ field }) => <TextFieldComp {...field} label="Mô tả" />}
        />
      </Grid>
    </Grid>
  );
};

export default InformationTab;
