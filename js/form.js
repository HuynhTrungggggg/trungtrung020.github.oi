function toggleForm() {
    var form = document.getElementById("myForm");
    if (form.style.display === "none") {
        form.style.display = "block";
        setValidation(true); // Bật yêu cầu nhập đúng khi hiển thị form
    } else {
        form.style.display = "none";
        setValidation(false); // Tắt yêu cầu nhập đúng khi ẩn form
    }
}

function setValidation(enabled) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");

    if (enabled) {
            nameInput.required = true; // Bật yêu cầu nhập trường bắt buộc
            emailInput.required = true; // Bật yêu cầu nhập trường bắt buộc
        phoneInput.required = true; // Bật yêu cầu nhập trường bắt buộc
        phoneInput.pattern = "[0-9]{10,11}";
    } else {
        nameInput.required = false; // Tắt yêu cầu nhập trường bắt buộc
        emailInput.required = false; // Tắt yêu cầu nhập trường bắt buộc
        phoneInput.required = false; // Tắt yêu cầu nhập trường bắt buộc
        phoneInput.removeAttribute("pattern"); // Xóa định dạng số điện thoại
    }
}

