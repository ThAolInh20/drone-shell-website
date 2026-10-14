# Hướng dẫn sử dụng Bộ Biên tập Dòng thời gian (Timeline Sequencer)

Bộ Biên tập Timeline là trung tâm điều phối toàn bộ show diễn, cho phép sắp đặt nhạc nền, lên lịch trình phóng pháo hoa và đồng bộ hóa các chuyển động tạo hình của phi đội drone trên cùng một trục thời gian.

---

## 1. Mở và Điều hướng Dòng thời gian

*   **Phím tắt mở / đóng:** Nhấn tổ hợp phím **`Ctrl + T`** bất kỳ lúc nào trong phân hệ Show Viewer.
*   **Cấu trúc phân làn chuyên dụng (Multi-track):**
    *   **Làn Âm thanh (Audio Track):** Chứa nhạc nền và đồ thị dạng sóng âm (Waveform).
    *   **Làn Trình diễn Drone (Drone Show Track):** Chứa các block bước diễn, hiệu ứng chuyển đổi và giữ vị trí của drone.
    *   **Làn Pháo hoa (Fireworks Track):** Chứa các quả pháo hoa đơn lẻ hoặc pháo chùm kèm mốc phóng và mốc nổ.
*   **Thu phóng Dòng thời gian (Zoom Timeline):**
    *   Nhấn phím **`Shift + 0`** (hoặc phím **`)`**) để chuyển đổi tuần hoàn giữa các mức tỉ lệ hiển thị: `25 px/giây`, `50 px/giây`, `100 px/giây` và `200 px/giây`.
    *   Mức thu phóng lớn giúp bạn căn chỉnh chi tiết từng phần trăm giây, trong khi mức nhỏ giúp quan sát toàn cảnh kịch bản dài nhiều phút.

---

## 2. Hệ thống Kim chỉ thời gian: Playhead và Anchor Head

Để thao tác chính xác, cần phân biệt rõ hai loại kim thời gian hiển thị trên Timeline:

*   **Playhead (Kim chạy thời gian - Màu Cam / Đỏ):**
    *   Thể hiện mốc thời gian diễn ra thực tế của show.
    *   Khi bạn nhấn phím **`Space`**, Playhead sẽ chuyển động mượt mà từ trái sang phải, đồng thời âm thanh vang lên và các drone/pháo hoa kích hoạt tương ứng.
*   **Anchor Head (Kim neo định vị - Màu Xanh lam):**
    *   Được thiết lập bằng cách nhấp chuột trái vào thanh thước đo thời gian (Ruler).
    *   Đóng vai trò làm mốc chuẩn cho lệnh dán: Khi bạn sao chép một block (`Ctrl + C`) và nhấn dán (**`Ctrl + V`**), block mới sẽ được đặt chính xác ngay tại vị trí kim Anchor Head.
    *   Làm mốc bắt đầu diễn tập: Giúp bạn liên tục phát thử một đoạn điệp khúc mà không cần phải tua lại thủ công sau mỗi lần dừng.

---

## 3. Các thao tác chọn và sắp xếp Block

*   **Chọn đơn lẻ:** Nhấp chuột trái trực tiếp vào block mong muốn.
*   **Quét chọn vùng (Box Selection):** Nhấn giữ chuột trái trên vùng trống của Timeline và kéo rê chuột để tạo một khung chữ nhật bao trọn tất cả các block cần thao tác.
*   **Chọn bổ sung (Multi-select):** Nhấn giữ phím **`Ctrl`** hoặc **`Shift`** rồi lần lượt click vào từng block.
*   **Di chuyển đồng bộ:** Sau khi đã chọn nhiều block, bạn chỉ cần kéo một block bất kỳ thì toàn bộ cụm block được chọn sẽ dịch chuyển cùng nhau, giữ nguyên khoảng cách tương đối giữa các sự kiện.
*   **Kéo giãn thời lượng:** Đưa con trỏ chuột vào mép phải của block drone, khi con trỏ đổi sang hình mũi tên hai chiều, nhấn giữ và kéo để thay đổi thời lượng hiển thị của tạo hình.

---

## 4. Chế độ Bắt dính (Snap & Snap-to-beat)

Biểu tượng Nam châm trên thanh công cụ của Timeline cho phép kích hoạt tính năng bắt dính thông minh:

*   **Bắt dính cạnh block (Snap-to-edge):** Khi bạn kéo một block lại gần block phía trước hoặc phía sau, mép của hai block sẽ tự động hút dính vào nhau, ngăn ngừa các khoảng hở mili-giây gây gián đoạn đội hình.
*   **Bắt dính nhịp nhạc (Snap-to-beat):** Khi block âm thanh có các mốc nhịp vàng (beat), các sự kiện pháo hoa và drone sẽ tự động bắt dính vào đúng đỉnh nhịp trống, đảm bảo pháo hoa phát nổ ăn khớp tuyệt đối với giai điệu bài hát.

---

## 5. Bảng tổng hợp Phím tắt trên Timeline

| Phím tắt | Thao tác thực hiện |
| :--- | :--- |
| **`Space`** | Phát hoặc Tạm dừng kịch bản từ mốc thời gian hiện tại |
| **`Ctrl + T`** | Mở hoặc Đóng bộ biên tập Timeline |
| **`Shift + 0`** hoặc **`)`** | Chuyển đổi mức độ thu phóng (Zoom) dòng thời gian |
| **`B`** | Đặt mốc nhịp beat tại vị trí kim chỉ thời gian trên làn âm thanh |
| **`Ctrl + C`** | Sao chép block đang chọn |
| **`Ctrl + V`** | Dán block đã sao chép vào vị trí kim neo Anchor Head (xanh lam) |
| **`Delete`** / **`Backspace`** | Xóa toàn bộ các block đang được chọn |
| **`Ctrl + Z`** | Hoàn tác (Undo) thao tác vừa thực hiện |
| **`Ctrl + Y`** | Làm lại (Redo) thao tác vừa hoàn tác |
| **`Ctrl + S`** | Lưu kịch bản làm việc vào dự án |
---

## Liên kết điều hướng

*   [**Bài tiếp theo: Block Âm thanh & Waveform**](./audio-block.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Về Trang chủ Tài liệu Tổng quan**](../README.md)
