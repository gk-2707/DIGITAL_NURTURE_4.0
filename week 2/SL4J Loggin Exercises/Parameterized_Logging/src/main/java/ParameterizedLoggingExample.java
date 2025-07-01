import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {
        String username = "Gokul";
        int userId = 101;

        logger.info("User {} with ID {} has logged in.", username, userId);
        logger.warn("User {} has attempted invalid access {} times.", username, 3);
        logger.error("User {} encountered an unexpected error: {}", username, "NullPointerException");
    }
}
