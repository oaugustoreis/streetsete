// generate-tshirt-imports.js
import fs from "fs";
import path from "path";

const tshirtsDir = path.resolve("src/images/tshirts"); // ajuste o caminho se necessário
const outputFile = path.resolve("src/tshirtImports.ts"); // arquivo que será gerado

// função para converter nomes de pastas para camelCase
function toCamelCase(str) {
  return str
    .replace(/[-_](.)/g, (_, g1) => g1.toUpperCase())
    .replace(/^(.)/, (_, g1) => g1.toLowerCase());
}

// percorre todas as pastas dentro de tshirts
const folders = fs.readdirSync(tshirtsDir).filter((f) =>
  fs.statSync(path.join(tshirtsDir, f)).isDirectory()
);

let imports = `export type TShirtCategory = 'Graphic' | 'Minimalist' | 'Vintage';\n\n`;
let exports = `\nexport const tshirtImages = {\n`;

folders.forEach((folder) => {
  const varName = toCamelCase(folder);

  const frenteVar = `${varName}Frente`;
  const costaVar = `${varName}Costa`;

  imports += `import ${frenteVar} from "@/images/tshirts/${folder}/frente.png";\n`;
  imports += `import ${costaVar} from "@/images/tshirts/${folder}/costa.png";\n\n`;

  exports += `  ${varName}: {\n    front: ${frenteVar},\n    back: ${costaVar},\n  },\n`;
});

exports += `};\n`;

fs.writeFileSync(outputFile, imports + exports);

console.log(`✅ Arquivo gerado em: ${outputFile}`);
//rodar node scripts/generate-tshirt-imports.js
