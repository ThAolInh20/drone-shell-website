# Grizmo

Công cụ **Grizmo (Deformer)** cho phép co giãn, xoay hoặc uốn biến dạng toàn bộ nhóm drone được chọn trong Animated Editor.

---

## Cách kích hoạt

Công cụ hiển thị khi chọn nhóm drone trong Viewport:

*   Dùng chuột quét chọn hoặc nhấn giữ `Ctrl` + nhấp chuột trái để chọn nhóm drone.
*   Trong bảng điều khiển bên phải, chọn mục **Biến dạng nhóm (Uốn)**.
*   Nhấp nút **`Uốn nhóm: TẮT`** để chuyển thành **`BẬT`**.
*   Viewport 3D hiển thị 3 quả cầu điều hướng Neon.

---

## Hai chế độ Biến dạng (Deform Type)

Chọn chế độ trong menu **Loại biến dạng**:

### Chế độ 1: Uốn cong (Bend - Bezier)
*   **Mô tả:** Bẻ cong đội hình drone theo đường cong.
*   **Cách điều khiển:** Nhấp chuột vào quả cầu Neon ở giữa và sử dụng trục Gizmo để kéo tịnh tiến. Khối drone sẽ tự động uốn cong theo cung Bezier tương ứng với vị trí quả cầu được kéo.
*   **Ứng dụng:** Uốn một hàng drone thành vòng cung hoặc uốn hình hộp thành hình bán nguyệt.

### Chế độ 2: Kéo thẳng (Straighten - Linear)
*   **Mô tả:** Ép các drone xếp thẳng hàng hoặc điều chỉnh độ giãn cách.
*   **Cường độ kéo thẳng (Deform Strength):**
    *   Thanh trượt điều chỉnh từ `0%` đến `100%`.
    *   Tại mức `100%`: Các drone xếp thẳng hoàn toàn nối giữa hai điểm đầu - cuối.
    *   Mức nhỏ hơn `100%`: Giữ lại một phần độ cong nguyên bản của đội hình.

---

## Áp dụng hoặc Hủy bỏ biến dạng

*   **Nhấp nút Áp dụng (Apply):** Lưu tọa độ mới vào Step hiện tại của timeline và ghi nhận vào lịch sử thao tác (Undo/Redo).
*   **Nhấp nút Huỷ bỏ (Cancel):** Gỡ bỏ các quả cầu Neon điều hướng và đưa drone về hình dáng ban đầu.
