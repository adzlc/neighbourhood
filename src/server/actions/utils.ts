export function checkNotSet(
  data: FormDataEntryValue | null,
): FormDataEntryValue | null {
  return data === "notset" ? null : data;
}
