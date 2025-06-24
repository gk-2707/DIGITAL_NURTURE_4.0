public class FinancialForecast {

    public static void main(String[] args) {
        double currentValue = 10000.0;
        double growthRate = 0.05;
        int years = 5;

        System.out.printf("Base value: ₹%.2f%n", currentValue);

        double futureVal = futureValueRecursive(currentValue, growthRate, years);
        System.out.printf("Future value after %d years at %.2f%% growth: ₹%.2f%n", years, growthRate * 100, futureVal);
    }

    public static double futureValueRecursive(double currentValue, double growthRate, int yearsRemaining) {
        if (yearsRemaining == 0) {
            return currentValue;
        }
        return futureValueRecursive(currentValue * (1 + growthRate), growthRate, yearsRemaining - 1);
    }
}
