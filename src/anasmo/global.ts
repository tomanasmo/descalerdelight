export class AnasmoGlobals {
  public static PRODUCT_NAME = "Lader";
  public static PRODUCT_NAME_PLURAL = "Ladere";
  public static DISCOUNT = 0.7;
  public static DISCOUNT_TEST = 0.90;
  public static DISCOUNT_PERCENT = this.DISCOUNT * 100;
  public static DISCOUNT_PERCENT_TEST = this.DISCOUNT_TEST * 100;
  public static CURRENCY_SYMBOL = "kr";
  public static PRICES = [395, 695, 895, 995];
  public static BEFORE_PRICES = [
    Math.round(this.PRICES[0] / (1 - this.DISCOUNT)),
    Math.round(this.PRICES[1] / (1 - this.DISCOUNT)),
    Math.round(this.PRICES[2] / (1 - this.DISCOUNT)),
    Math.round(this.PRICES[3] / (1 - this.DISCOUNT))
  ];
  public static PRICES_TEST = [
    Math.round(this.BEFORE_PRICES[0] * (1 - this.DISCOUNT_TEST)),
    Math.round(this.BEFORE_PRICES[1] * (1 - this.DISCOUNT_TEST)),
    Math.round(this.BEFORE_PRICES[2] * (1 - this.DISCOUNT_TEST)),
    Math.round(this.BEFORE_PRICES[3] * (1 - this.DISCOUNT_TEST))
  ];
  public static STRIPE_LINK_TEST = "fZefZa4DB35ddO06oq"; //"test_00g03s6eufbA6VW9AV";
  public static STRIPE_LINK = this.STRIPE_LINK_TEST; //"test_9AQ9E2dGW8Nc2FG5kE";
  public static CALL_TO_ACTION_BUTTON_TEXT = "";
  public static BUTTON_DISCOUNT_PERCENT = this.DISCOUNT_PERCENT_TEST;
}