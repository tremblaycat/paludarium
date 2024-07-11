// because this is typescript we can declare types like this!
// types give us autocomplete and prevent calling on null
// the little question marks mean they're optional (their default is null)
export interface SelectionModeData {
  title?: string;
  icon_url?: string;
  icon_alt?: string;
}