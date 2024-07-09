import { Controller, useFormContext } from "react-hook-form";
import MyTextField from "~components/my-text-field";

const InformationTab = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name="information.name"
        rules={{
          required: "Dữ liệu không hợp lệ",
        }}
        render={({ field }) => (
          <MyTextField
            {...field}
            label="Tên chiến dịch"
            error={!!errors?.name}
            helperText={errors?.name?.message as string}
            required
            sx={{ mb: 3 }}
          />
        )}
      />
      <Controller
        control={control}
        name="information.describe"
        render={({ field }) => <MyTextField {...field} label="Mô tả" />}
      />
    </>
  );
};

export default InformationTab;
