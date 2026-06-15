# Công cụ Tạo hình Đội hình Cơ bản

Bảng điều khiển **Tạo hình đội hình (Shape Panel)** ở cột bên trái giúp sinh tọa độ drone theo các dạng cấu trúc hình học hoặc ký tự.

---

## Chi tiết 10 Chế độ Tạo hình (Shape Type)

Hệ thống hỗ trợ các loại tạo hình sau:

*   **Lưới (Grid):** Xếp drone thành mạng lưới phẳng dạng lưới ô vuông (2D). Thường dùng làm đội hình xuất phát trên mặt đất.
*   **Đường thẳng (Line):** Tạo một hàng drone thẳng hàng. Có thể kéo nghiêng hoặc xoay hàng này trong không gian.
*   **Tam giác (Triangle):** Phân bổ drone dọc theo chu vi của một hình tam giác cân.
*   **Hình tròn (Circle):** Xếp drone đều trên đường biên tròn.
*   **Hình cầu (Sphere):** Phân bổ drone đều trên mặt ngoài của khối cầu 3D rỗng.
*   **Hình hộp (Cube):** Xếp drone tạo thành khung/bề mặt của hình hộp chữ nhật hoặc hình lập phương 3D.
*   **Hình trụ (Cylinder):** Tạo khối ống trụ rỗng.
*   **Hình sao (Star):** Sinh hình ngôi sao nhiều cánh. Có thể điều chỉnh số lượng cánh sao.
*   **Chữ / Số (Text):** Nhập ký tự chữ hoặc số tùy ý. Hệ thống sử dụng font chữ định sẵn để tự động sinh tọa độ drone theo nét vẽ chữ.
*   **Tệp JSON:** Đọc tọa độ từ một danh sách các điểm `x, y, z` từ tệp tin JSON ngoài.

---

## Các thông số hiệu chỉnh hình học

Khi chọn một hình dạng, bạn cần cấu hình các tham số bên dưới:

*   **Số lượng (Count):** Tổng số lượng drone sẽ tạo hoặc áp dụng.
*   **Bán kính / Khoảng cách (Spacing / Radius):**
    *   Với Lưới/Đường thẳng: Cự ly giữa hai drone cạnh nhau.
    *   Với Hình tròn/Hình cầu/Hình sao: Bán kính lớn nhất của hình.
*   **Chiều cao (Height):** Chiều cao của khối ống trụ (chỉ dùng cho Hình trụ).
*   **Số cánh sao (Star Points):** Số đỉnh cánh sao (mặc định là 5).
*   **Nội dung chữ (Text):** Ô nhập ký tự khi chọn chế độ tạo hình **Chữ / Số**.
*   **Tâm đội hình (Center X, Y, Z):** Tọa độ không gian nơi đặt tâm của hình học.
*   **Chế độ tô (Fill Mode):**
    *   `Đặc (Solid)`: Drone phân bổ đều khắp diện tích bề mặt/thể tích của hình.
    *   `Rỗng (Outline)`: Drone chỉ xếp trên đường biên ngoài của hình.

---

## Đối tượng áp dụng (Target)

Lựa chọn hành vi sinh drone:

1.  **Tạo drone mới (Create new drone):**
    *   Sinh thêm các drone mới vào cảnh theo số lượng đã chọn.
2.  **Áp dụng vào nhóm chọn (Apply to selected):**
    *   Không sinh thêm drone mới. Sắp xếp lại tọa độ của những drone đang được chọn trong khung nhìn theo hình học mới.
