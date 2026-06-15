# Quản lý Nhóm drone & Gizmo điều khiển

Static Formation Editor cung cấp hệ thống **Nhóm drone (Groups)** và **Phím điều khiển Gizmo** để thao tác hàng loạt trên nhiều drone cùng lúc.

---

## Cách chọn nhiều Drone trong Viewport

*   **Chọn đơn lẻ:** Click chuột trái vào drone để chọn.
*   **Chọn nhiều (Multi-select):** Nhấn giữ phím **`Ctrl`** và click chuột trái lần lượt vào các drone.
*   **Chọn nhanh cả nhóm:** Nhấp chọn một drone thuộc nhóm, sau đó tích chọn hộp kiểm **`Chọn toàn bộ nhóm trong Viewport`** ở panel bên phải.

---

## Tổ chức Nhóm drone (Groups Panel)

Sử dụng bảng **Nhóm drone** ở cột bên trái sau khi chọn nhiều drone:

*   **Gộp phân cấp (Nested Group):**
    *   Tạo nhóm dạng thư mục lồng nhau (Folder-tree).
    *   Cho phép di chuyển cả cụm lớn nhưng vẫn có thể chọn nhóm con bên trong để xoay riêng lẻ.
*   **Gộp phẳng (Flat Group):**
    *   Gộp toàn bộ các drone đã chọn vào một nhóm phẳng duy nhất không phân tầng.
*   **Hủy gộp (Ungroup):**
    *   Giải tán nhóm đang chọn, đưa các drone trở lại trạng thái tự do hoặc thuộc về nhóm cha cấp cao hơn.
*   **Khôi phục vị trí nhóm / Tâm xoay (Reset Group):**
    *   *Khôi phục nhóm & đưa tâm xoay về gốc (0, 20, 0):* Đưa toàn bộ nhóm drone và điểm xoay về tọa độ (0, 20, 0).
    *   *Khôi phục drone về tọa độ Step 1:* Đưa vị trí các drone về trạng thái đầu tiên của kịch bản gốc.
    *   *Chỉ khôi phục tâm xoay về (0, 20, 0):* Dời điểm Pivot về tâm tọa độ gốc mà không di chuyển drone.

---

## Bảng điều khiển Gizmo 3D

Sử dụng 3 phím điều hướng Gizmo ở góc phải màn hình:

*   **Move (Di chuyển):** Xuất hiện 3 mũi tên (Đỏ - X, Xanh lá - Y, Xanh dương - Z) để tịnh tiến nhóm drone.
*   **Rotate (Xoay):** Xuất hiện các vòng tròn để xoay nhóm drone quanh điểm tâm xoay (Pivot).
*   **Scale (Thu phóng):** Xuất hiện các khối vuông nhỏ để phóng to, thu nhỏ hoặc kéo giãn nhóm drone.

---

## Căn chỉnh Tâm xoay (Pivot Alignment)

Tâm xoay (Pivot) quyết định vị trí trung tâm mà nhóm drone sẽ xoay quanh hoặc co giãn theo.

*   **Hiển thị Tâm xoay:** Tích chọn **`Hiển thị Tâm xoay`** ở panel bên phải để hiển thị chấm sáng tại tâm xoay.
*   **Căn tâm xoay tự động:** Nhấp vào nút **`Đặt Tâm vào Nhóm đã Chọn (Center to Selection)`** để hệ thống tự động đặt tâm xoay vào trọng tâm hình học của các drone đang chọn.
