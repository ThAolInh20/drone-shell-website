# Công cụ Tạo hình Đội hình Cơ bản (Shape Generator)

Bảng điều khiển **Tạo hình đội hình (Shape Panel)** ở cột bên trái của phân hệ Static Formation Editor cung cấp các chế độ tự động tính toán và phân bổ tọa độ 3D của phi đội drone theo các mô hình hình học chuẩn hoặc ký tự văn bản.

---

## 1. Danh mục 10 Chế độ Tạo hình (Shape Types)

| Chế độ | Tên tiếng Anh | Mô tả phân bổ không gian |
| :--- | :--- | :--- |
| **Lưới phẳng** | `Grid` | Sắp xếp drone thành mạng lưới ô vuông 2D trên mặt phẳng nằm ngang (thường dùng làm bãi cất cánh). |
| **Đường thẳng** | `Line` | Tạo một hàng drone thẳng hàng theo phương chỉ định. |
| **Tam giác** | `Triangle` | Phân bổ drone dọc theo các cạnh hoặc bề mặt của hình tam giác cân. |
| **Hình tròn** | `Circle` | Xếp drone phân bổ đều trên đường chu vi hoặc diện tích hình tròn. |
| **Hình cầu** | `Sphere` | Phân bổ drone bao phủ đều bề mặt ngoài của khối cầu 3D. |
| **Hình hộp** | `Cube` | Xếp drone định hình khung viền hoặc các mặt của khối lập phương / hộp chữ nhật 3D. |
| **Hình trụ** | `Cylinder` | Tạo khối hình ống trụ thẳng đứng. |
| **Hình sao** | `Star` | Sinh hình ngôi sao đa giác phẳng với số lượng cánh tùy biến. |
| **Ký tự / Số** | `Text` | Tự động chuyển đổi các ký tự văn bản hoặc chữ số thành các điểm tọa độ drone. |
| **Tệp JSON** | `JSON File` | Nạp trực tiếp mảng tọa độ `[x, y, z]` từ tệp tin dữ liệu ngoài. |

---

## 2. Các Tham số Hiệu chỉnh Hình học

Sau khi chọn một chế độ tạo hình, thiết lập các thông số tương ứng:

*   **Số lượng (Count):** Tổng số drone tham gia vào hình khối được chọn.
*   **Bán kính / Khoảng cách (Spacing / Radius):**
    *   *Đối với Lưới / Đường thẳng:* Khoảng cách tối thiểu giữa hai drone liền kề (mét).
    *   *Đối với Hình tròn / Khối cầu / Hình sao:* Bán kính tối đa từ tâm đến đường biên ngoài (mét).
*   **Chiều cao (Height):** Kích thước chiều cao của khối hình trụ dọc theo trục Y.
*   **Số cánh sao (Star Points):** Số lượng đỉnh nhọn của hình sao (mặc định là `5`).
*   **Nội dung chữ (Text Content):** Chuỗi ký tự cần tạo hình khi sử dụng chế độ **Ký tự / Số**.
*   **Tọa độ tâm (Center X, Y, Z):** Điểm đặt trọng tâm của hình học trong không gian tọa độ 3D.
*   **Chế độ tô (Fill Mode):**
    *   `Đặc (Solid)`: Phân bổ drone dàn đều khắp bề mặt hoặc thể tích bên trong.
    *   `Rỗng (Outline)`: Chỉ phân bổ drone bám theo đường viền ngoài của hình khối.

> [!WARNING]
> **Quy chuẩn an toàn khoảng cách:** Luôn duy trì thông số `Spacing` tối thiểu từ `1.5m` đến `2.0m` giữa các drone để tránh nguy cơ va chạm cánh quạt và luồng gió quẩn khi đưa vào mô phỏng bay.

---

## 3. Quy trình Áp dụng Đội hình (Target Execution)

Thực hiện theo các bước sau để áp dụng cấu hình hình học:

1.  Tại mục **Đối tượng áp dụng (Target)**, chọn một trong hai phương thức:
    *   **Tạo drone mới (Create new drone):** Khởi tạo thêm số lượng drone mới vào khung cảnh theo hình dạng đã chọn.
    *   **Áp dụng vào nhóm chọn (Apply to selected):** Giữ nguyên số lượng drone hiện có, chỉ tái định vị tọa độ của những drone đang được chọn trong Viewport theo hình khối mới.
2.  Nhấp vào nút **Áp dụng tạo hình (Apply Shape)** ở cuối bảng điều khiển để hoàn tất.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Hệ thống Dẫn hướng: Mô hình 3D & Ảnh mẫu 2D**](./add-3d-2d.md)
*   [**Trở về Mục lục Static Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
