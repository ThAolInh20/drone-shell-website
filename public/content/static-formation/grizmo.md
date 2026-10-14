# Công cụ Vẽ & Kéo cong Đường dẫn Bezier (Bezier Tool)

Công cụ **Đường cong Bezier** trong phân hệ Static Formation Editor cho phép người dùng kiến tạo các hàng drone uốn lượn mềm mại trong không gian 3D dựa trên thuật toán đường cong bậc hai với 3 điểm kiểm soát trực quan.

---

## 1. Kích hoạt Chế độ Đường cong Bezier

1.  Tại bảng điều khiển **Shape** ở cột bên trái, chọn chế độ **Đường cong Bezier**.
2.  Nhấp vào nút **Vẽ & Kéo Cong Bezier: TẮT** để chuyển trạng thái sang **BẬT**.
3.  Trong Viewport 3D, hệ thống sẽ hiển thị 3 khối cầu kiểm soát được liên kết bằng đường nét đứt:
    *   **`P0` (Start Point):** Điểm xuất phát của đường cong.
    *   **`P1` (Control Point):** Điểm điều khiển hướng tiếp tuyến và độ võng/cong của đường dẫn.
    *   **`P2` (End Point):** Điểm kết thúc của đường cong.

---

## 2. Thao tác Điều chỉnh Đường cong Không gian

Thực hiện hiệu chỉnh hình dạng đường cong trực tiếp bằng chuột hoặc thanh trượt tham số:

*   **Chọn điểm kiểm soát:** Nhấp chuột trái vào một trong ba khối cầu (`P0`, `P1` hoặc `P2`) trong Viewport 3D.
*   **Hiệu chỉnh bằng Gizmo:** Khi một điểm kiểm soát được chọn, bộ mũi tên định hướng Gizmo (Đỏ - X, Xanh lá - Y, Xanh dương - Z) sẽ xuất hiện tại tâm của điểm đó. Nhấn giữ chuột trái vào mũi tên và kéo để tịnh tiến điểm đến tọa độ mới. Quỹ đạo đường cong sẽ tái tính toán tức thời theo thời gian thực.
*   **Hiệu chỉnh độ cao nhanh:** Kéo thanh trượt **Y Offset (Chiều cao)** tại bảng thuộc tính bên trái để nâng cao hoặc hạ thấp tọa độ trục đứng của điểm điều khiển giữa (`P1`).

---

## 3. Quy trình Phân bổ Drone lên Quỹ đạo Cong

Sau khi đạt được đường cong mong muốn:

1.  Nhập thông số **Số lượng (Count):** Số lượng drone cần phân bổ dọc theo chiều dài đường cong (Ví dụ: `30`).
2.  Chọn **Đối tượng áp dụng (Target):**
    *   **Tạo drone mới:** Khởi tạo thêm số lượng drone mới rải đều dọc theo đường cong.
    *   **Áp dụng vào nhóm chọn:** Tái phân bổ vị trí của các drone đang được chọn để bám dọc theo đường cong vừa thiết lập.
3.  Nhấp vào nút **Áp dụng tạo hình (Apply Shape)** để ghi nhận tọa độ mới vào cảnh diễn.

> [!TIP]
> Để tạo các dải sóng uốn lượn liên hoàn (S-Curve), hãy chia kịch bản thành các phân đoạn Bezier nối tiếp nhau, trong đó điểm `P2` của phân đoạn trước đóng vai trò là điểm `P0` của phân đoạn kế tiếp.

---

## Liên kết Điều hướng

*   [**Công cụ Tạo hình Đội hình Cơ bản**](./shape.md)
*   [**Trở về Mục lục Static Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
