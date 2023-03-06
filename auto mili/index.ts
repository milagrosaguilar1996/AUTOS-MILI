import Autos from "./Autos";
import {Registro} from "./Registro";
import * as fs from "fs";

let agencia:[] = [];

try {
    const data = fs.readFileSync("./autos.json", "utf8");
    const jsonFile = JSON.parse(data);
    agencia = jsonFile.map((item:any) => item);
} catch (error) {
    console.log("ha ocurrido un error");
}
