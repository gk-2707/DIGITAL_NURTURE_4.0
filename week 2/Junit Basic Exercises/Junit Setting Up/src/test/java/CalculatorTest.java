import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int result = calc.add(27, 70);
        assertEquals(97, result);
        System.out.println("testAdd passed successfully.");
    }
}
