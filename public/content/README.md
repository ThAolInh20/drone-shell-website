# Hướng dẫn Cài đặt & Khởi chạy Hệ thống

Chào mừng bạn đến với tài liệu hướng dẫn kỹ thuật của **Drone Shell Editor** — Hệ thống hỗ trợ biên tập trình diễn drone và pháo hoa 3D.

Tài liệu này sẽ hướng dẫn chi tiết cách thiết lập môi trường phát triển và khởi chạy ứng dụng trên máy tính cá nhân của bạn.

---

## Yêu cầu thiết bị

Dưới đây là cấu hình thiết bị tối thiểu và khuyến nghị để vận hành mượt mà hệ thống mô phỏng 3D:

| Thành phần | Cấu hình Tối thiểu | Cấu hình Khuyến nghị (500+ Drone) |
| :--- | :--- | :--- |
| **Hệ điều hành** | Windows 10 (64-bit) | Windows 11 (64-bit) |
| **Bộ vi xử lý (CPU)** | Intel Core i5 / AMD Ryzen 5 | Intel Core i7 / AMD Ryzen 7 hoặc mới hơn |
| **Bộ nhớ (RAM)** | 8 GB RAM | 16 GB RAM hoặc cao hơn |
| **Card đồ họa (GPU)** | NVIDIA GTX 1050 / AMD RX 560 (Hỗ trợ WebGL 2.0) | NVIDIA RTX 2060 / AMD RX 6600 hoặc tốt hơn |
| **Lưu trữ** | 500 MB dung lượng trống | 1 GB dung lượng trống (SSD) |
| **Trình duyệt** | Chrome, Edge hỗ trợ Hardware Acceleration | Google Chrome / Edge phiên bản mới nhất |
---

## Quy trình cài đặt

Hãy thực hiện theo các bước sau để cài đặt Drone Shell Editor trên máy tính chạy hệ điều hành Windows:

*   **Bước 1: Truy cập trang tải bộ cài đặt**
    *   Nhấp vào liên kết **[GitHub Releases](https://github.com/ThAolInh20/Shell-Drone_3d/releases)** để đi tới trang lưu trữ các phiên bản phần mềm.
*   **Bước 2: Tải xuống phiên bản phù hợp**
    *   Chọn thẻ (tag) phiên bản mới nhất hoặc phiên bản bạn mong muốn sử dụng.
    *   Chọn file `.exe` hoặc `.zip` để tải về - nên tải bằng file `.zip` để tốc độ khởi động lại app nhanh nhất.
*   **Bước 3: Thực hiện cài đặt**
    *   Chạy trực tiếp tệp tin `ShellDroneEditor.Setup.X.X.X.exe`(hoặc tương tự) đã tải về.
    *   Nếu giải nén từ file `.zip` thì chọn file `ShellDroneEditor.exe` và chạy.
    *   Trong trường hợp hiển thị thông tin cảnh báo từ windows defender, chọn `run anyway` để tiếp tục.(Mã nguồn hoàn toàn open souce tại [đây](https://github.com/ThAolInh20/Shell-Drone-Editor))
    *   Làm theo các bước hướng dẫn trên trình cài đặt để hoàn tất.

*Lưu ý:* Việc chọn ngôn ngữ trong quá trình cài đặt có thể bỏ qua và chọn Tiếng Việt sau khi cài đặt hoàn tất trong phần mềm.

## Các phân hệ chính trong Tài liệu hướng dẫn

Sau khi cài đặt xong, bạn có thể tham khảo chi tiết hướng dẫn của từng phân hệ qua menu bên trái:

*   **[Show Viewer (Ctrl + 1)](./show-viewer/README.md):** Điều khiển dòng thời gian Timeline, đồng bộ âm thanh Waveform, bảng thuộc tính Inspector và xuất nhập kịch bản JSON.
*   **[Static Formation Editor (Ctrl + 3)](./static-formation/README.md):** Các công cụ dựng đội hình tĩnh, tạo hình cơ bản, mô hình dẫn hướng 3D/2D, vẽ cong Bezier và sử dụng Gizmo 3D.
*   **[Animation Formation Editor (Ctrl + 2)](./animated-editor/README.md):** Thiết kế hoạt cảnh chuyển động theo các bước (Step Card), hiệu ứng chuyển trạng thái (Transition), giữ vị trí (Hold) và uốn nhóm (Group Bending).
*   **[Hệ thống Pháo hoa 3D (Fireworks)](./fireworks/README.md):** Biên đạo pháo hoa 3D trên Timeline, danh mục mẫu pháo nghệ thuật (Cúc đại đóa, Liễu rủ, Xoắn DNA, Thiên hà) và kỹ thuật bắn pháo chùm Bouquet.
