// Hiển thị năm hiện tại ở chân trang.
document.getElementById("year").textContent = new Date().getFullYear();

// Mô phỏng pipeline để minh họa luồng check -> deploy trên giao diện.
const demoButton = document.getElementById("demo-button");
const demoResult = document.getElementById("demo-result");

demoButton.addEventListener("click", () => {
  demoResult.textContent = "Đang kiểm tra các tệp cần thiết...";
  demoButton.disabled = true;
  demoButton.textContent = "Đang chạy...";

  window.setTimeout(() => {
    demoResult.textContent = "✓ Check thành công! Trong workflow thực tế, job deploy sẽ được phép chạy.";
    demoButton.disabled = false;
    demoButton.textContent = "Chạy mô phỏng lần nữa";
  }, 700);
});
document.getElementById("myButton").addEventListener("click", function () {
    const now = new Date();
    document.getElementById("output").textContent =
        "Bây giờ là: " + now.toLocaleString("vi-VN");
});