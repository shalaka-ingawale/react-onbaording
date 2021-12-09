import "./App.css";
import Container from "@mui/material/Container";
import AppRouter from "./routes/AppRoute";

function App() {
  return (
    <div>
      <Container maxWidth={false}>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
