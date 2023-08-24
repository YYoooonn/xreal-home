import { Files } from "notion-api-types/responses";
export default function resolveNotionImage(file?: Files.External | Files.File) {
  if (!file) return "";
  return file.type == "external" ? file.external.url : file.file.url; // internal notion file url has expired date
}
