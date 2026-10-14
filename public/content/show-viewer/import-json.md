# Hướng dẫn Xuất và Nhập Kịch bản JSON (Import & Export Scenario)

Hệ thống lưu trữ toàn bộ dữ liệu kịch bản trình diễn — bao gồm quỹ đạo bay của phi đội drone, vị trí bệ phóng và chuỗi bắn pháo hoa, cùng các mốc thời gian âm thanh — dưới định dạng tệp chuẩn `.json`.

---

## 1. Xuất Kịch bản ra Tệp tin (Export JSON)

Sau khi hoàn tất việc biên đạo trên dòng thời gian Timeline:

### Các bước thực hiện:
1.  Nhấp vào nút **Xuất kịch bản (Export JSON)** trên thanh công cụ Timeline, hoặc nhấn tổ hợp phím `Ctrl + S` (hoặc `Shift + S`).
2.  Chọn thư mục lưu trữ trên máy tính và đặt tên tệp tin (ví dụ: `kich_ban_tet_2026.json`).
3.  Nhấp nút **Save** để hoàn tất.

### Cấu trúc dữ liệu được lưu trữ trong tệp JSON:
*   **Hoạt cảnh Drone:** Tọa độ không gian 3D từng drone, hiệu ứng chuyển trạng thái (Transition), thời gian giữ hình (Hold) và màu sắc ánh sáng LED.
*   **Sự kiện Pháo hoa:** Tọa độ bệ phóng, góc bắn, độ cao nổ, kích thước quả pháo và tên mẫu hiệu ứng (Preset).
*   **Dữ liệu Âm thanh:** Tên tệp tin âm thanh tham chiếu, thời lượng, âm lượng và danh sách toàn bộ các mốc nhịp phách (Beat Markers).

---

## 2. Nhập Kịch bản vào Timeline (Import JSON)

Hệ thống cung cấp 3 phương thức nạp kịch bản:

### Phương thức 1: Nhập đè toàn bộ (Import Sequence)
1.  Nhấp vào nút **Import Sequence** trên thanh công cụ.
2.  Chọn tệp `.json` kịch bản từ máy tính.
3.  Xác nhận nạp kịch bản.

> [!WARNING]
> Phương thức **Import Sequence** sẽ xóa toàn bộ các khối sự kiện hiện có trên dòng thời gian để thay thế bằng kịch bản mới. Hãy xuất bản sao lưu kịch bản hiện tại trước khi thực hiện.

### Phương thức 2: Ghép nối sự kiện (Append Events)
1.  Nhấp vào nút **Thêm kịch bản (Add Drone/Shell/Audio)**.
2.  Chọn tệp `.json` cần ghép nối.
3.  Hệ thống sẽ nối tiếp toàn bộ sự kiện từ tệp mới vào ngay sau mốc thời gian kết thúc của kịch bản hiện tại.

### Phương thức 3: Kéo thả trực tiếp (Drag & Drop)
Kéo tệp `.json` từ trình quản lý tệp tin của hệ điều hành và thả trực tiếp vào vùng không gian làm việc của Timeline.

---

## 3. Quản lý Tệp Âm thanh Đồng hành (Companion Audio)

Tệp kịch bản `.json` được thiết kế dưới dạng văn bản có cấu trúc nhẹ, chỉ lưu trữ đường dẫn tham chiếu và mốc thời gian mà không nhúng dữ liệu nhị phân của bài hát.

### Quy chuẩn đồng bộ âm thanh:
1.  **Quy tắc cùng thư mục:** Đặt tệp âm thanh (`.mp3`, `.wav`) trong cùng một thư mục và có tên trùng khớp với tệp `.json` (Ví dụ: `show_tet.json` và `show_tet.mp3`).
2.  **Khôi phục tự động:** Khi mở tệp `show_tet.json`, hệ thống tự động phát hiện tệp âm thanh đồng hành `show_tet.mp3`, nạp âm thanh và vẽ lại đồ thị sóng âm Waveform.
3.  **Xử lý sai lệch đường dẫn:** Nếu tệp âm thanh bị đổi tên hoặc di chuyển sang thư mục khác, hệ thống sẽ mở hộp thoại yêu cầu chọn lại tệp âm thanh tương ứng trên ổ đĩa.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Điều khiển Camera & Không gian 3D (Show View)**](./show-view.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
