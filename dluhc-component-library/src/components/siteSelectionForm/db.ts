import Dexie from "dexie";
import { FormState } from "./types";

interface IFormData {
  id?: number;
  data: FormState;
}

class FormDataDB extends Dexie {
  formDataStore: Dexie.Table<IFormData>;

  constructor() {
    super("FormDataDB");
    this.version(1).stores({
      formDataStore: "++id, data",
    });
    this.formDataStore = this.table("formDataStore");
  }
}

const db = new FormDataDB();
export default db;
