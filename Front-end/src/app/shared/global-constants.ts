export class GlobalConstants {
  // Error Message
  public static genericError: string =
    'Error has occured. Please try again later.';

  // Regex -Name
  public static nameRegex: string = '[a-zA-Z0-9 ]*';
  // Regex -Email
  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
  // Regex -Contact Number
  public static contactNumberRegex: string = '^[e0-9]{10,10}$';

  // Variables
  public static error: string = 'error';
}
