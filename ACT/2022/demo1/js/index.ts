// This is common utils which paths defined in outter tsconfig.json
import { addPrefix } from "UTIL/index";

// I hope typescript can recognize this, and point to '../api' TODO:
import { api } from "@/api";

api().then((res) => {
  document.write(addPrefix(res));
});
