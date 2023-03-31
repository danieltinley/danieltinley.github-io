function formatTel() {
    const inputNumber = document.getElementById("phone").value;
  
    // Remove any non-digit characters from the input
    let cleanedNumber = inputNumber.replace(/[^\d]/g, '');
  
    // Check if the number starts with "+61" and remove it if it does
    if (cleanedNumber.startsWith("61")) {
      cleanedNumber = cleanedNumber.slice(2);
    }
  
    // Determine whether the number is a mobile or landline number based on the first digit
    let formattedNumber;
    if (/^0[2378]\d{8}$/.test(cleanedNumber)) {
      // Landline number: format as 0X 0000 0000
      formattedNumber = cleanedNumber.replace(/(^\d{1,2})(\d{4})(\d{4}$)/, '$1 $2 $3');
    } else if (cleanedNumber.startsWith("04")) {
      // Mobile number: format as 0X00 000 000
      formattedNumber = cleanedNumber.replace(/(^\d{4})(\d{3})(\d{3}$)/, '$1 $2 $3');
    } else {
      // Invalid number: return the cleaned number without formatting
      formattedNumber = cleanedNumber.replace(/(^\d{4})(\d{4}$)/, '$1 $2');
    }
  
    // Add the leading zero if it's missing
    if (!formattedNumber.startsWith("0")) {
      formattedNumber = "0" + formattedNumber;
    }
  
    // Set the formatted value back to the input field
    document.getElementById("phone").value = formattedNumber;
}

const form = document.getElementById("quote_form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    formatTel();
    form.submit();
});