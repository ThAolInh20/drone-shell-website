# Hướng dẫn Cài đặt & Khởi chạy Hệ thống

Tài liệu này hướng dẫn người dùng cuối quy trình thiết lập môi trường, cài đặt và khởi chạy ứng dụng máy tính **Drone Shell Editor** — Phần mềm chuyên dụng cho thiết kế, biên đạo và mô phỏng trình diễn drone kết hợp pháo hoa 3D.

---

## 1. Yêu cầu Cấu hình Hệ thống

Trước khi cài đặt, hãy kiểm tra phần cứng và hệ điều hành của máy tính để đảm bảo ứng dụng vận hành ổn định:

| Thành phần | Cấu hình Tối thiểu | Cấu hình Khuyến nghị (Dự án 500+ Drone) |
| :--- | :--- | :--- |
| **Hệ điều hành** | Windows 10 (64-bit) | Windows 11 (64-bit) |
| **Bộ vi xử lý (CPU)** | Intel Core i5 hoặc AMD Ryzen 5 | Intel Core i7 / AMD Ryzen 7 trở lên |
| **Bộ nhớ (RAM)** | 8 GB | 16 GB trở lên |
| **Card đồ họa (GPU)** | NVIDIA GTX 1050 / AMD RX 560 (Hỗ trợ WebGL 2.0 / OpenGL) | NVIDIA RTX 2060 / AMD RX 6600 trở lên |
| **Dung lượng lưu trữ** | 500 MB dung lượng trống | 1 GB dung lượng trống (Ổ cứng SSD) |
| **Màn hình hiển thị** | Độ phân giải tối thiểu 1366 × 768 | Full HD (1920 × 1080) hoặc cao hơn |

---

## 2. Quy trình Cài đặt Ứng dụng

Thực hiện lần lượt các bước sau để tải và cài đặt Drone Shell Editor trên hệ điều hành Windows:

### Bước 1: Truy cập trang phát hành
Truy cập kho lưu trữ chính thức tại: [GitHub Releases](https://github.com/ThAolInh20/Shell-Drone_3d/releases).

### Bước 2: Tải gói cài đặt phù hợp
Tại mục phát hành mới nhất (Latest Release), lựa chọn một trong hai định dạng:
*   **Gói cài đặt tự động (`.exe`):** Tệp tin dạng `ShellDroneEditor.Setup.X.X.X.exe`. Khuyến nghị cho người dùng cá nhân muốn tích hợp ứng dụng vào Start Menu và Desktop.
*   **Gói nén di động (`.zip`):** Tệp tin nén chứa toàn bộ thư mục chạy trực tiếp không cần quyền Quản trị viên (Administrator).

### Bước 3: Cài đặt và cấp quyền thực thi
1.  **Đối với tệp `.exe`:** Nhấp đúp chuột vào tệp tin đã tải về và làm theo chỉ dẫn của trình hướng dẫn thiết lập.
2.  **Đối với tệp `.zip`:** Giải nén toàn bộ thư mục vào ổ đĩa mong muốn, sau đó mở tệp tin `ShellDroneEditor.exe`.

> [!NOTE]
> **Xử lý cảnh báo Windows Defender SmartScreen:**
> Nếu màn hình hiển thị thông báo "Windows protected your PC", hãy nhấp vào dòng chữ **More info** và chọn nút **Run anyway** để tiếp tục. Mã nguồn của phần mềm được công khai minh bạch tại [kho lưu trữ GitHub Shell-Drone-Editor](https://github.com/ThAolInh20/Shell-Drone-Editor).

---

## 3. Khởi chạy và Thiết lập Ngôn ngữ Ban đầu

1.  Mở ứng dụng từ phím tắt ngoài màn hình Desktop hoặc tệp `ShellDroneEditor.exe`.
2.  Trong lần đầu khởi chạy, ứng dụng hiển thị giao diện mặc định.
3.  Để chuyển đổi ngôn ngữ hiển thị sang tiếng Việt, nhấp vào menu **Settings (Cài đặt)** ở góc trên thanh công cụ và chọn **Tiếng Việt**. Cài đặt sẽ được lưu trữ tự động cho các phiên làm việc tiếp theo.

---

## 4. Các Phân hệ Chức năng Chính

Ứng dụng Drone Shell Editor được chia thành 4 phân hệ làm việc chuyên biệt:

*   [**Show Viewer (`Ctrl + 1`)**](./show-viewer/README.md): Quản lý dòng thời gian đa làn (Multi-track Timeline), đồ thị âm thanh Waveform, bảng thuộc tính Inspector và xuất nhập khẩu kịch bản diễn tập JSON.
*   [**Static Formation Editor (`Ctrl + 3`)**](./static-formation/README.md): Dựng đội hình tĩnh, tạo hình khối hình học 3D/2D cơ bản, vẽ đường cong dẫn hướng Bezier và hiệu chỉnh tọa độ thông qua bộ công cụ Gizmo 3D.
*   [**Animation Formation Editor (`Ctrl + 2`)**](./animated-editor/README.md): Thiết kế chuỗi bước diễn nối tiếp (Step Cards), thiết lập thời lượng chuyển động (Transition), thời gian giữ hình (Hold) và uốn biến dạng nhóm drone.
*   [**Hệ thống Pháo hoa 3D (Fireworks)**](./fireworks/README.md): Định vị bệ phóng pháo hoa, căn chỉnh góc bắn và độ cao nổ, phân bổ mẫu bắn chùm (Bouquet) và danh mục mẫu pháo nghệ thuật cài sẵn (Presets).
