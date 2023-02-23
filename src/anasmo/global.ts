export class AnasmoGlobals {
  public static PRODUCT_NAME = "Quick Charger";
  public static PRODUCT_NAME_PLURAL = "Quick Chargers";
  public static DISCOUNT = 0.7;
  public static DISCOUNT_PERCENT = this.DISCOUNT * 100;
  public static CURRENCY_SYMBOL = "kr";
  public static PRICES = [395, 695, 895, 995];
  public static BEFORE_PRICES = [
    Math.round(this.PRICES[0] / (1 - this.DISCOUNT)),
    Math.round(this.PRICES[1] / (1 - this.DISCOUNT)),
    Math.round(this.PRICES[2] / (1 - this.DISCOUNT)),
    Math.round(this.PRICES[3] / (1 - this.DISCOUNT))
  ];
}