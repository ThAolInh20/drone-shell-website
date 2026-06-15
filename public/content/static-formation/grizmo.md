# Công cụ Vẽ & Kéo cong Bezier

Công cụ này cho phép tạo dải drone theo đường cong Bezier trong không gian 3D.

---

## Kích hoạt chế độ Bezier

*   Trong bảng **Shape** ở cột trái, chọn chế độ **Đường cong Bezier**.
*   Nhấp nút **`Vẽ & Kéo Cong Bezier: TẮT`** để chuyển sang **`BẬT`**.
*   Trên Viewport 3D sẽ xuất hiện 3 điểm kiểm soát nối bằng đường nét đứt:
    *   **`P0`**: Điểm bắt đầu.
    *   **`P1`**: Điểm kiểm soát hướng và độ cong.
    *   **`P2`**: Điểm kết thúc.

---

## Điều chỉnh đường cong bằng chuột

*   **Chọn điểm neo:** Nhấp chuột trái vào một trong các điểm cầu (`P0`, `P1`, `P2`) trong Viewport 3D.
*   **Sử dụng Gizmo:** Khi chọn điểm cầu, bộ mũi tên định hướng Gizmo (X - đỏ, Y - xanh lá, Z - xanh dương) sẽ xuất hiện tại tâm điểm đó.
*   **Kéo thả:** Nhấp giữ chuột trái vào các mũi tên và di chuyển chuột để kéo điểm neo tới tọa độ mới. Đường cong sẽ tự động cập nhật theo tọa độ mới.
*   **Chỉnh độ cao nhanh:** Kéo thanh trượt **`Y Offset (Chiều cao)`** ở cột bên trái để thay đổi tọa độ Y của điểm kiểm soát ở giữa (`P1`).

---

## Áp dụng phân bố drone lên đường cong

*   Thiết lập **Số lượng (Count)** drone muốn tạo (ví dụ: `20`).
*   Chọn **Đích (Target)**:
    *   *Tạo drone mới*: Tạo thêm số lượng drone tương ứng dọc theo đường cong.
    *   *Áp dụng vào nhóm chọn*: Di chuyển các drone đang chọn bám theo đường cong.
*   Nhấp nút **`Áp dụng tạo hình`** để hoàn tất phân bổ.
