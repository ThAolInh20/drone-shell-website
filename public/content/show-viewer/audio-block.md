# Hướng dẫn sử dụng Khối Âm thanh & Dạng sóng Waveform

Phân hệ Show Viewer cung cấp làn âm thanh chuyên dụng (**Audio Track**) tích hợp hiển thị đồ thị dạng sóng (**Waveform**) và hệ thống đánh dấu nhịp phách (**Beat Markers**), phục vụ việc đồng bộ chính xác giữa chuyển động của drone, thời điểm kích nổ pháo hoa và tiết tấu âm nhạc.

---

## 1. Nạp Tệp Âm thanh vào Kịch bản

Hệ thống hỗ trợ các định dạng tệp âm thanh tiêu chuẩn: `.mp3`, `.wav` và `.ogg`.

### Quy trình nạp tệp:
1.  **Cách 1:** Nhấp vào nút **Thêm Âm thanh (Add Audio)** trên thanh công cụ của Timeline và chọn tệp nhạc từ trình duyệt tệp tin của hệ điều hành.
2.  **Cách 2:** Kéo và thả trực tiếp tệp âm thanh từ thư mục máy tính vào làn **Audio Track** trên Timeline.

Sau khi tệp được nạp thành công, hệ thống tự động phân tích biên độ tín hiệu và dựng đồ thị dạng sóng âm (Waveform Visualization) trực tiếp trên thân khối âm thanh. Các đỉnh sóng đại diện cho các đoạn âm lượng cao và các điểm nhấn tiết tấu.

---

## 2. Thao tác Điều khiển trên Làn Âm thanh

*   **Chọn khối âm thanh:** Nhấp chuột trái vào khối âm thanh để hiển thị chi tiết các trường cấu hình tại bảng **Property Inspector**.
*   **Di chuyển mốc thời gian bắt đầu:** Nhấn giữ chuột trái vào thân khối âm thanh và kéo sang trái hoặc phải trên trục thời gian để căn chỉnh thời điểm bắt đầu phát.
*   **Tua nghe âm thanh thời gian thực (Audio Scrubbing):** Nhấn giữ chuột trái và kéo dọc theo thanh thước đo thời gian (Timeline Ruler) để nghe kiểm tra âm thanh tại mốc thời gian tương ứng.

> [!TIP]
> Kết hợp phím phóng to dòng thời gian (`Shift + 0`) và tính năng Audio Scrubbing để định vị chính xác mili-giây xuất hiện tiếng trống mở màn hoặc điểm cao trào.

---

## 3. Các Thuộc tính Cấu hình trong Property Inspector

Khi chọn khối âm thanh, bảng **Property Inspector** ở góc phải màn hình cung cấp các trường thông số:

| Thuộc tính | Kiểu dữ liệu | Mô tả chức năng |
| :--- | :--- | :--- |
| **Tên tệp (Name)** | Văn bản (Text) | Tên bản nhạc hiển thị định danh trên làn Audio Track |
| **Thời gian bắt đầu (Start Time)** | Số thực (giây) | Mốc thời gian phát âm thanh trên trục Timeline (bước nhảy `0.1` giây) |
| **Thời lượng (Duration)** | Số thực (giây) | Tổng độ dài phát của tệp âm thanh |
| **Âm lượng (Volume)** | Số thực (`0.0` - `1.0`) | Tỉ lệ âm lượng đầu ra (từ `0.0` - tắt tiếng đến `1.0` - âm lượng tối đa) |

---

## 4. Hệ thống Đánh dấu Nhịp phách (Beat Markers)

Các mốc nhịp phách được thể hiện trực quan bằng các **chấm tròn màu vàng** phân bổ dọc theo đồ thị sóng âm:

*   **Tạo mốc nhịp thủ công:** Di chuyển kim Playhead đến vị trí cần đánh dấu trên trục thời gian và nhấn phím **`B`**.
*   **Nhận diện nhịp tự động (Auto Beat Detection):** Trong bảng Inspector của khối âm thanh, nhấp nút **Phân tích nhịp tự động** để hệ thống tự động quét các đỉnh xung năng lượng âm thanh và sinh các mốc nhịp tương ứng.
*   **Xóa mốc nhịp:** Nhấp đúp chuột trái vào điểm chấm vàng cần loại bỏ.
*   **Tính năng bắt dính nhịp (Snap-to-beat):** Khi biểu tượng Nam châm (**Snap**) trên thanh công cụ được bật, mọi thao tác kéo khối pháo hoa hoặc khối drone sẽ tự động hút dính vào mốc nhịp phách gần nhất.

---

## 5. Quy tắc Quản lý Tệp Âm thanh Đồng hành (Companion Audio)

Khi lưu kịch bản dự án ra tệp định dạng `.json`, tệp JSON chỉ lưu trữ các giá trị mốc thời gian và đường dẫn tham chiếu của tệp âm thanh chứ không nhúng trực tiếp dữ liệu nhị phân (binary) nhằm tối ưu dung lượng tệp kịch bản.

> [!IMPORTANT]
> **Quy ước đặt tên và vị trí lưu trữ:**
> *   Luôn lưu trữ tệp âm thanh trong cùng một thư mục với tệp kịch bản `.json` và đặt tên giống nhau (Ví dụ: `show_xuan_2026.json` đi kèm `show_xuan_2026.mp3`).
> *   Khi mở tệp kịch bản JSON, ứng dụng sẽ tự động nạp tệp âm thanh đồng hành cùng tên và tái tạo đồ thị sóng âm mà không yêu cầu thao tác thủ công.
> *   Nếu tệp âm thanh bị di chuyển, đổi tên hoặc bị xóa, ứng dụng sẽ hiển thị hộp thoại thông báo yêu cầu tái chỉ định đường dẫn tệp âm thanh trên máy tính.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Bảng Thuộc tính Đối tượng (Property Inspector)**](./property-inspector.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
