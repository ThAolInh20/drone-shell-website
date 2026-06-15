# Biên tập các Bước bay trên Timeline

Phần dưới của giao diện biên tập hoạt cảnh động chứa **Dòng thời gian bước bay (Timeline Step Panel)**. Trình diễn drone được xây dựng bằng cách nối tiếp nhiều bước bay (Steps), trong đó mỗi bước chứa một trạng thái phân bố tọa độ cố định của drone.

---

## Thao tác với thẻ Bước bay (Step Cards)

Mỗi Step trên Timeline được hiển thị dưới dạng một thẻ card chứa các thông tin:
*   **Tên bước:** Ví dụ: `Bước 1`, `Bước 2`...
*   **Mốc thời gian kích hoạt:** Mili-giây (`ms`). Ví dụ: `3000 ms` tương ứng với giây thứ 3.0 của show.
*   **Màu sắc thẻ (UI Color):** Đổi màu sắc thẻ trên Step Panel ở cột bên phải.
*   **Xem trước bước bay:** Click chuột trái vào một thẻ Step Card bất kỳ khi đang tạm dừng để chuyển vạch kim thời gian (`playbackTime`) về thời điểm của bước đó và hiển thị tọa độ drone tương ứng.

---

## Kéo thả thay đổi thứ tự bay (Drag & Drop)

Thay đổi thứ tự xuất hiện của các hình khối trong kịch bản:

*   Click giữ chuột trái vào thẻ Step muốn chuyển vị trí. Thẻ card sẽ mờ đi 50%.
*   Kéo thẻ rê qua các thẻ khác. Đường biên của thẻ bên dưới sẽ hiển thị màu xanh lá cây khi vị trí đó có thể thả (drop).
*   Thả chuột (Drop).
*   **Tự động cập nhật:**
    *   Hệ thống cập nhật thứ tự Step trong mảng dữ liệu.
    *   Tính toán lại các mốc thời gian bắt đầu của tất cả các Step phía sau dựa trên thời lượng Transition và Hold.
    *   Cập nhật hiển thị trong Viewport 3D.

---

## Thêm và Xóa các Bước bay

*   **Thêm bước mới:** Click nút **`Thêm bước +`** (Add Step) ở góc trái timeline. Hệ thống nhân bản bước hiện tại và nối tiếp vào cuối dòng thời gian.
*   **Xóa bước bay:** Click nút **`×`** ở góc trên bên phải của thẻ Step Card để xóa bước này khỏi kịch bản.

---

## Chọn nhóm điều phối (Active Group Dropdown)

Cạnh nút phát có một menu thả xuống: **`Nhóm đang chọn`** (Active Group).
*   Mặc định áp dụng cho toàn bộ drone.
*   Nếu chọn một nhóm cụ thể (ví dụ: `Group A`): Các thay đổi về tọa độ, hiệu ứng bay, hiệu ứng màu sắc ở Step hiện tại chỉ tác động lên các drone thuộc `Group A`. Các drone thuộc nhóm khác được giữ nguyên trạng thái cũ.
