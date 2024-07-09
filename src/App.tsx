import { ThemeProvider } from "@mui/material";
import CampaignPage from "./features/campaign";
import "./App.css";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CampaignPage />
    </ThemeProvider>
  );
}

export default App;
