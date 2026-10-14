# Hướng dẫn sử dụng Block Âm thanh & Dạng sóng Waveform

Phân hệ Show Viewer cung cấp làn âm thanh chuyên dụng (Audio Track) kết hợp hiển thị trực quan dạng sóng âm (Waveform) và hệ thống bắt nhịp beat tự động, giúp đồng bộ pháo hoa và chuyển động drone chính xác từng nốt nhạc.

---

## 1. Cách thêm và tải tệp âm thanh vào Kịch bản

*   **Cách 1:** Nhấp vào nút **`Thêm Âm thanh (Add Audio)`** trên thanh công cụ của Timeline và chọn tệp nhạc từ máy tính của bạn (hỗ trợ các định dạng `.mp3`, `.wav`, `.ogg`).
*   **Cách 2:** Kéo và thả trực tiếp tệp âm thanh từ thư mục máy tính vào làn Audio Track trên Timeline.
*   **Hiển thị sóng âm:** Ngay sau khi tải, hệ thống sẽ tự động phân tích và vẽ biểu đồ dạng sóng âm thanh (Waveform Visualization) trực tiếp trên thân block. Các dải sóng nhấp nhô giúp bạn nhìn thấy rõ các đoạn intro nhẹ nhàng, đoạn điệp khúc cao trào hoặc từng tiếng trống bass dồn dập.

---

## 2. Thao tác điều khiển trên Timeline

*   **Chọn Block:** Nhấp chuột trái vào block âm thanh để hiển thị các thông số chi tiết trong bảng **Property Inspector** ở góc phải màn hình.
*   **Di chuyển mốc thời gian:** Nhấn giữ chuột trái vào thân block và kéo sang trái hoặc phải để thay đổi thời điểm bài hát bắt đầu vang lên.
*   **Tua nghe thời gian thực (Audio Scrubbing):** Nhấp giữ chuột trái và kéo dọc theo thanh thước đo thời gian (Timeline Ruler) để nghe thử âm thanh tương ứng tại từng giây, hỗ trợ dò tìm chính xác thời điểm pháo hoa cần kích nổ.

---

## 3. Các thông số cấu hình trong Property Inspector

Khi nhấp chọn Block Âm thanh, bạn có thể điều chỉnh các thuộc tính:

*   **Tên tệp (Name):** Tên bản nhạc hiển thị trên thanh timeline.
*   **Thời gian bắt đầu (Start Time):** Mốc thời gian bắt đầu phát nhạc (tính bằng giây).
*   **Thời lượng (Duration):** Tổng chiều dài bản nhạc (tính bằng giây).
*   **Âm lượng (Volume):** Kéo thanh trượt từ 0% đến 100% để cân bằng độ lớn của nhạc nền với hiệu ứng âm thanh tiếng nổ của pháo.

---

## 4. Đánh dấu nhịp điệu (Beat Markers) & Bắt dính nhịp (Snap-to-beat)

Các điểm nhịp beat được thể hiện bằng các **chấm tròn màu vàng** chạy dọc theo dải sóng âm, đóng vai trò như các thỏi nam châm định vị:

*   **Thêm mốc nhịp thủ công:** Đưa kim chạy (Playhead) đến vị trí bạn muốn đặt nhịp và nhấn phím tắt **`B`**.
*   **Nhận diện nhịp tự động (Auto Beat Detection):** Nhấp vào nút phân tích nhịp trong Inspector để hệ thống tự động dò tìm các đỉnh tiết tấu trống mạnh và sinh các mốc nhịp tự động.
*   **Xóa mốc nhịp:** Nhấp đúp chuột trái (double-click) trực tiếp vào chấm vàng cần xóa bỏ.
*   **Chế độ Bắt dính nhịp (Snap-to-beat):** Khi bật biểu tượng nam châm (Snap), mỗi khi bạn kéo di chuyển một block drone hay một quả pháo hoa, đầu sự kiện sẽ tự động hít chặt (snap) vào đúng mốc beat gần nhất, loại bỏ hoàn toàn độ lệch nhịp mắt thường.

---

## 5. Quy tắc Lưu trữ và Tải âm thanh đồng hành (Companion Audio)

Khi lưu kịch bản ra tệp định dạng `.json`, tệp JSON chỉ lưu trữ các mốc thời gian và tên bài hát mà không nhúng trực tiếp dữ liệu nhị phân của tệp nhạc (nhằm giữ tệp kịch bản gọn nhẹ, tránh dung lượng lên tới hàng trăm MB).

*   **Quy ước đặt tên tệp đồng hành:** Hãy luôn đặt tệp âm thanh nằm cùng thư mục và có cùng tên với tệp kịch bản JSON (Ví dụ: `show_tet_2026.json` và `show_tet_2026.mp3`).
*   **Tự động tải lại:** Khi bạn mở lại tệp JSON kịch bản, phần mềm sẽ tự động dò tìm và nạp ngay tệp nhạc đồng hành, đồng thời vẽ lại toàn bộ dải sóng âm Waveform mà không cần thao tác thêm.
*   **Trường hợp đổi vị trí tệp nhạc:** Nếu tệp âm thanh bị di chuyển sang thư mục khác, hệ thống sẽ hiển thị hộp thoại thông báo để bạn chọn lại đường dẫn tệp nhạc tương ứng trên máy tính.
---

## Liên kết điều hướng

*   [**Bài tiếp theo: Bảng tùy chỉnh thông số Inspector**](./property-inspector.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Về Trang chủ Tài liệu Tổng quan**](../README.md)
