import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(203, "T-shirt", "Apparel"),
                new Product(150, "Headphones", "Electronics"),
                new Product(305, "Shoes", "Footwear"),
                new Product(120, "Mobile", "Electronics")
        };

        int targetId = 150;

        // Linear Search
        Product result1 = linearSearch(products, targetId);
        System.out.println("Linear Search Result: " + result1);

        // Binary Search (sorted by productId)
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        Product result2 = binarySearch(products, targetId);
        System.out.println("Binary Search Result: " + result2);
    }

    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.productId == targetId) {
                return product;
            }
        }
        return null;
    }

    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
