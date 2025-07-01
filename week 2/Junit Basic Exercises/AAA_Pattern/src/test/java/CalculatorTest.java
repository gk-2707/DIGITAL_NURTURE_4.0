import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown complete");
    }

    @Test
    public void testAdd() {

        int a = 10;
        int b = 20;


        int result = calculator.add(a, b);


        assertEquals(30, result);
        System.out.println("testAdd passed");
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 50;
        int b = 20;


        int result = calculator.subtract(a, b);


        assertEquals(30, result);
        System.out.println("testSubtract passed");
    }
}