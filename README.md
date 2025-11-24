# Playwright Automation - Practice Software Testing

This project contains automated UI tests for **https://practicesoftwaretesting.com/** using **Playwright**.  
It covers form submission validation and cart functionality.

---

## 🧪 Test Scenarios

### 1) Contact Form Submission & Validation
**Objectives**
- Verify validation messages for empty form fields
- Submit form with valid data
- Assert successful submission message

**Flow**
1. Navigate to **Contact** page  
2. Click Submit with blank fields → Validate error messages  
3. Enter valid details (Name, Email, Message, File upload)  
4. Submit and verify success alert

---

### 2) Add to Cart & Update Quantity
**Objectives**
- Add product to shopping cart
- Verify product is listed in cart
- Update quantity to **3**
- Ensure subtotal price updates correctly

**Flow**
1. Visit Product page (e.g., *Combination Pliers*)  
2. Add item to cart → Confirm success alert  
3. Go to Cart page  
4. Change quantity to **3**  
5. Verify updated price calculation

---

## ✍️ Author

**Etu Mahmuda Era**  
GitHub: [etu296](https://github.com/etu296)  
Portfolio: [etu296.github.io](https://etu296.github.io/Etu_Mahmuda_Era/)


