import app from "./app";
import { PORT } from "./config/environment";

app.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
