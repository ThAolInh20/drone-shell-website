# Quản lý Nhóm Drone & Bộ Biến đổi Gizmo 3D

Phân hệ Static Formation Editor cung cấp hệ thống quản lý **Nhóm drone (Groups)** và bộ công cụ biến đổi trực quan **Gizmo 3D** nhằm hỗ trợ thao tác đồng bộ, xoay, tịnh tiến, co giãn hoặc lật đối xứng hàng loạt trên nhiều drone cùng lúc.

---

## 1. Phương thức Chọn Nhiều Drone trong Viewport

Trước khi thao tác biến đổi hoặc tạo nhóm, thực hiện chọn các drone theo một trong các cách sau:

*   **Chọn đơn lẻ:** Nhấp chuột trái trực tiếp vào drone cần chọn trong Viewport 3D.
*   **Chọn bổ sung (Multi-select):** Nhấn giữ phím `Ctrl` hoặc `Shift` và lần lượt nhấp chuột trái vào các drone tiếp theo.
*   **Chọn tất cả (Select All - `Ctrl + A`):** Nhấn phím `Ctrl + A` để chọn toàn bộ drone hiện có trong khung cảnh.
*   **Quét chọn vùng (Box Selection - `Ctrl + Kéo chuột trái`):** Nhấn giữ phím `Ctrl` và kéo chuột trái tạo khung chữ nhật; hệ thống sẽ ngăn ngừa xung đột xoay camera (OrbitControls) và chọn toàn bộ drone nằm trong khung.
*   **Chọn nhanh toàn bộ nhóm:** Nhấp chọn một drone bất kỳ thuộc nhóm, sau đó tích chọn hộp kiểm **Chọn toàn bộ nhóm trong Viewport** tại bảng thuộc tính bên phải.

---

## 2. Tổ chức và Phân cấp Nhóm Drone (Groups Panel)

Tại bảng **Nhóm drone** ở cột bên trái, thực hiện cấu trúc hóa các drone đã chọn:

*   **Gộp phân cấp (Nested Group):**
    *   Tạo cấu trúc nhóm dạng cây thư mục lồng nhau (`Parent_Name/Sub_Group`).
    *   Cho phép di chuyển toàn bộ cụm lớn đồng thời vẫn có thể chọn nhóm con bên trong để hiệu chỉnh độc lập.
*   **Gộp phẳng (Flat Group):**
    *   Gộp toàn bộ các drone đã chọn vào một nhóm phẳng duy nhất không phân cấp tầng (hệ thống tự động sinh tên duy nhất `Group_1`, `Group_2`...).
*   **Hủy nhóm (Ungroup):**
    *   Hủy bỏ lớp nhóm cha cao nhất của các drone đang chọn và hoàn trả các drone về trạng thái độc lập hoặc nhóm cấp trên.
*   **Khôi phục vị trí nhóm & Điểm chuẩn (Reset Group):**
    *   *Khôi phục nhóm & đưa tâm xoay về gốc (0, 20, 0):* Đưa toàn bộ nhóm drone và điểm xoay về tọa độ chuẩn `(0, 20, 0)`.
    *   *Khôi phục drone về tọa độ Step 1:* Hoàn trả tọa độ của các drone về trạng thái ban đầu của kịch bản gốc.
    *   *Chỉ khôi phục tâm xoay về (0, 20, 0):* Di chuyển điểm Pivot về tâm tọa độ gốc mà không làm thay đổi vị trí của drone.

---

## 3. Bộ Điều khiển Biến đổi Gizmo 3D & Phím tắt Nâng cao

Người dùng có thể chuyển đổi chế độ Gizmo bằng các nút trên thanh công cụ hoặc nhấn phím tắt **`Ctrl + G`** để chuyển đổi tuần hoàn:

*   **Move (Di chuyển - Phím `W` hoặc `Ctrl + G` lần 1):**
    *   Hiển thị 3 mũi tên định hướng: Đỏ (trục X), Xanh lá (trục Y), Xanh dương (trục Z).
    *   Nhấn giữ chuột trái vào mũi tên tương ứng và kéo để tịnh tiến nhóm drone theo trục mong muốn.
*   **Rotate (Xoay - Phím `E` hoặc `Ctrl + G` lần 2):**
    *   Hiển thị các vòng tròn xoay bao quanh tâm nhóm.
    *   Nhấn giữ và quay vòng tròn để xoay toàn bộ cụm drone quanh tâm xoay (Pivot).
*   **Scale (Thu phóng / Co giãn - Phím `R` hoặc `Ctrl + G` lần 3):**
    *   Hiển thị các khối vuông định hướng trên các trục.
    *   Kéo khối vuông trên từng trục để kéo dãn hoặc nén dẹp cụm drone theo một chiều, hoặc kéo khối lập phương ở tâm để phóng to/thu nhỏ đồng tỉ lệ.

### Tinh chỉnh bằng Bàn phím & Lật đối xứng (Mirroring):
*   **Nhân bản nhanh (`Ctrl + D`):** Nhân bản toàn bộ các drone đang chọn thành một cụm mới tại chỗ.
*   **Tinh chỉnh bước nhỏ (`Ctrl + Phím Mũi tên`):** Dịch chuyển, xoay hoặc co giãn nhóm drone theo từng nấc chính xác mà không sợ lệch chuột.
*   **Lật đối xứng trục ngang (`Ctrl + Shift + Mũi tên Trái / Phải`):** Lật ngược cụm drone qua trục đối xứng thẳng đứng (`scaleX = -1`), thích hợp để vẽ cánh chim, hoa văn hoặc biểu tượng đối xứng hai bên.
*   **Lật đối xứng trục dọc (`Ctrl + Shift + Mũi tên Lên / Xuống`):** Lật ngược cụm drone qua trục đối xứng nằm ngang (`scaleY = -1`).

> [!TIP]
> **Kỹ thuật dựng hình đối xứng nhanh:** Chọn nửa bên trái của tạo hình, nhấn `Ctrl + D` để nhân bản, sau đó nhấn `Ctrl + Shift + Mũi tên Phải` để lật đối xứng sang bên phải, tiết kiệm một nửa thời gian thiết kế!

---

## 4. Hiệu chuẩn Tâm xoay (Pivot Alignment)

Tâm xoay (**Pivot**) là điểm neo trung tâm mà toàn bộ cụm drone sẽ xoay quanh hoặc co giãn theo:

*   **Hiển thị điểm tâm xoay:** Tích chọn hộp kiểm **Hiển thị Tâm xoay** ở bảng điều khiển bên phải để làm nổi bật chấm sáng định vị Pivot trong Viewport.
*   **Căn tâm xoay tự động:** Nhấp vào nút **Đặt Tâm vào Nhóm đã Chọn (Center to Selection)**; hệ thống sẽ tự động tính toán trọng tâm hình học của các drone đang chọn và đặt điểm Pivot chính xác tại vị trí đó.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Công cụ Vẽ & Kéo cong Đường dẫn Bezier**](./grizmo.md)
*   [**Trở về Mục lục Static Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
