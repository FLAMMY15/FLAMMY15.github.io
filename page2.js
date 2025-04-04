function closePopup() {
    document.getElementById("คำชี้แนะ").classList.add("hidden");
}
document.getElementById("ส่ง").addEventListener("click", function() {
    let message = document.getElementById("รับเข้าข้อความ").value;
    
    if (message.trim() !== "") { // ตรวจสอบว่าไม่ใช่ข้อความว่างเปล่า
        let displayArea = document.getElementById("แสดงข้อความ");
        let newMessage = document.createElement("p");
        newMessage.textContent = message;
        displayArea.appendChild(newMessage);
         // แสดงข้อความเฉพาะในฝั่งคุณ (จะไม่แสดงให้ผู้ใช้เห็น)
         displayArea.style.display = 'block'; // ทำให้เห็นข้อความที่ส่ง

         document.getElementById("รับเข้าข้อความ").value = ""; // ล้างช่องพิมพ์หลังส่ง
    
    }
});
// ฟังก์ชั่นที่ทำให้ textarea ขยายตัวอัตโนมัติเมื่อพิมพ์
const textarea = document.querySelector("textarea");

textarea.addEventListener("input", function() {
    this.style.height = 'auto'; // รีเซ็ตความสูงก่อน
    this.style.height = (this.scrollHeight) + 'px'; // ตั้งค่าความสูงตามเนื้อหาที่พิมพ์
});

document.getElementById("รีเซ็ต").addEventListener("click", function() {
    // ลบข้อความที่แสดงใน #แสดงข้อความ
    document.getElementById("แสดงข้อความ").innerHTML = "";
});