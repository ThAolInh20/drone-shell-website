# Hệ thống Dẫn hướng (Guide System)

Hệ thống dẫn hướng ở panel bên phải hỗ trợ nhập hình ảnh hoặc mô hình 3D làm mẫu để đồ theo khi thiết kế đội hình drone.

---

## Chế độ 1: Hologram 3D (Mô hình 3D)

Chế độ này tải một mô hình 3D (định dạng hỗ trợ: `.glb` hoặc `.gltf`) làm khung ảo để xếp drone khớp vào các đỉnh (vertices) hoặc viền bề mặt của mô hình.

### Cách tải mô hình:
*   Tại panel bên phải, mục **Chế độ dẫn hướng (Guide Mode)** chọn **Hologram 3D (Model)**.
*   Tại mục **Import Model (3D)**, chọn file `.gltf` hoặc `.glb` từ máy tính.
*   Ứng dụng hiển thị mô hình dưới dạng khung lưới phát sáng bán trong suốt.

### Hiệu chỉnh mô hình:
Điều chỉnh mô hình mẫu thông qua các thanh trượt:
*   **Chiều cao (Y Offset):** Dịch chuyển mô hình lên cao hoặc xuống thấp.
*   **Dịch ngang (X Offset) & Dịch sâu (Z Offset):** Di chuyển mô hình sang trái, phải, tiến, lùi.
*   **Tỉ lệ (Scale):** Thu nhỏ hoặc phóng to mô hình.
*   **Góc xoay (Rotation Y):** Xoay mô hình quanh trục đứng Y.
*   **Độ mờ (Opacity):** Tăng giảm độ trong suốt của mô hình.
*   **Hiển thị khung lưới (Wireframe):** Bật tắt hiển thị dạng khung lưới hoặc dạng khối đặc.
*   **Xoá Hologram:** Nhấp nút để gỡ bỏ mô hình mẫu khỏi màn hình.

---

## Chế độ 2: Ảnh tham chiếu 2D (Reference Image)

Chế độ này tải một bức ảnh phẳng định dạng `.png` hoặc `.jpg` làm hình mẫu 2D.

### Cách tải ảnh nền:
*   Chọn **Ảnh tham chiếu (2D)** tại mục **Chế độ dẫn hướng**.
*   Click **Import Ảnh Nền (2D)** và chọn tệp ảnh của bạn.
*   Ảnh xuất hiện trong không gian 3D.

### Cấu hình hướng đặt ảnh (Orientation):
*   **Nằm ngang (XZ):** Ảnh trải phẳng song song với mặt đất.
*   **Thẳng đứng (XY):** Ảnh dựng thẳng đứng như tấm bảng.

### Hiệu chỉnh ảnh:
Sử dụng các thanh trượt để chỉnh:
*   **X / Y / Z Offset:** Tịnh tiến vị trí ảnh.
*   **Scale:** Thu phóng độ to nhỏ của bức ảnh.
*   **Rotation:** Xoay góc nghiêng của ảnh.
*   **Opacity:** Chỉnh độ trong suốt của ảnh.
*   **Xoá ảnh tham chiếu:** Gỡ bỏ hình ảnh mẫu.
