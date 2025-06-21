public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second");

        Logger logger3 = Logger.getInstance();
        logger3.log("Third");

        if (logger1 == logger2 && logger2 == logger3) {
            System.out.println("All loggers are the same instance.");
        } else {
            System.out.println("Different instances detected.");
        }
    }
}
