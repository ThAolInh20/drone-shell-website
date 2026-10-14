# Hướng dẫn sử dụng Bộ Biên tập Dòng thời gian (Timeline Sequencer)

Bộ Biên tập Dòng thời gian (**Timeline Sequencer**) là trung tâm điều phối tổng thể của phân hệ Show Viewer, cho phép thiết lập nhạc nền, lập lịch trình phóng pháo hoa và đồng bộ hóa các chuyển động tạo hình của phi đội drone trên cùng một trục thời gian chuẩn.

---

## 1. Mở và Điều hướng Dòng thời gian

*   **Phím tắt mở hoặc đóng:** Nhấn tổ hợp phím `Ctrl + T` tại bất kỳ màn hình nào trong phân hệ Show Viewer.
*   **Cấu trúc phân làn chuyên dụng (Multi-track):**
    *   **Làn Âm thanh (Audio Track):** Hiển thị khối tệp âm thanh và đồ thị dạng sóng (Waveform).
    *   **Làn Trình diễn Drone (Drone Show Track):** Chứa các khối bước diễn (Step Blocks), hiệu ứng chuyển trạng thái (Transition) và thời gian giữ hình (Hold).
    *   **Làn Pháo hoa (Fireworks Track):** Chứa các khối pháo hoa đơn lẻ hoặc chuỗi bắn pháo chùm kèm mốc phóng và mốc nổ.
*   **Điều chỉnh tỉ lệ thu phóng (Zoom Timeline):**
    *   Nhấn tổ hợp phím `Shift + 0` (hoặc phím `)`) để chuyển đổi tuần hoàn giữa 4 mức tỉ lệ hiển thị: `25 px/giây`, `50 px/giây`, `100 px/giây` và `200 px/giây`.

> [!TIP]
> Sử dụng mức thu phóng lớn (`100 px/giây` hoặc `200 px/giây`) khi cần căn chỉnh chi tiết mili-giây, và sử dụng mức nhỏ (`25 px/giây`) để quan sát toàn bộ kịch bản dài.

---

## 2. Hệ thống Kim Thời gian Đôi: Playhead và Anchor Head

Giao diện Timeline vận hành dựa trên hai loại kim chỉ thời gian độc lập:

### Kim thời gian thực (Playhead - Màu Cam / Đỏ)
*   Chỉ định mốc thời gian phát thực tế của kịch bản trình diễn.
*   Khi nhấn phím `Space`, Playhead di chuyển từ trái sang phải trên trục thời gian; âm thanh được phát và các sự kiện drone/pháo hoa kích hoạt tương ứng.
*   Nhấp chuột trái trực tiếp lên thước đo thời gian hoặc làn sự kiện để dịch chuyển Playhead đến mốc thời gian mong muốn.

### Kim neo mốc (Anchor Head - Màu Xanh lam)
*   Được thiết lập bằng cách nhấp chuột trái vào dải thước đo thời gian (Ruler).
*   **Điểm chuẩn cho thao tác dán:** Khi sao chép một khối (`Ctrl + C`) và nhấn dán (`Ctrl + V`), khối mới sẽ được đặt chính xác tại vị trí của kim Anchor Head.
*   **Mốc bắt đầu diễn tập lặp lại:** Cho phép phát thử nhiều lần một phân đoạn nhất định mà không phải kéo tua lại thủ công sau mỗi lần tạm dừng.

---

## 3. Thao tác Chọn, Nhóm và Sắp xếp Khối Sự kiện (Blocks)

*   **Chọn một khối:** Nhấp chuột trái trực tiếp vào khối cần thao tác.
*   **Quét chọn vùng (Box Selection):** Nhấn giữ chuột trái trên vùng trống của Timeline và kéo để tạo khung chữ nhật bao quanh các khối cần chọn.
*   **Chọn bổ sung (Multi-select):** Nhấn giữ phím `Ctrl` hoặc `Shift` rồi lần lượt nhấp chuột trái vào từng khối.
*   **Gộp nhóm khối (Group Blocks - Phím `G`):** Sau khi chọn nhiều khối sự kiện, nhấn phím `G` để gộp chúng thành một nhóm liên kết duy nhất.
*   **Hủy gộp nhóm khối (Ungroup Blocks - Phím `Shift + G`):** Nhấn phím `Shift + G` để rã nhóm các khối đang chọn trở về trạng thái độc lập.
*   **Di chuyển đồng bộ:** Sau khi chọn nhiều khối hoặc một nhóm khối, kéo một khối bất kỳ; toàn bộ các khối liên quan sẽ dịch chuyển đồng thời, giữ nguyên khoảng cách thời gian tương đối giữa các sự kiện.
*   **Thay đổi thời lượng khối:** Di chuyển con trỏ chuột vào mép phải của khối drone. Khi con trỏ chuyển sang biểu tượng mũi tên hai chiều, nhấn giữ chuột trái và kéo sang trái/phải để rút ngắn hoặc kéo dài thời lượng của bước diễn.

---

## 4. Chế độ Bắt dính & Điều hướng Nhịp phách (Snap-to-beat & Seeking)

Nhấp vào biểu tượng **Nam châm** trên thanh công cụ Timeline để kích hoạt các chế độ bắt dính tự động:

*   **Bắt dính cạnh khối (Snap-to-edge):** Khi kéo một khối lại gần khối liền trước hoặc liền sau, mép của hai khối sẽ tự động hút dính vào nhau, tránh tạo ra các khoảng trống thời gian không mong muốn giữa các bước diễn.
*   **Bắt dính nhịp phách (Snap-to-beat):** Khi làn âm thanh đã được đánh dấu các mốc nhịp trống (Beat markers), các khối sự kiện pháo hoa và drone sẽ tự động bắt dính vào mốc nhịp gần nhất (ngưỡng bắt dính `0.15s`), đảm bảo tính đồng bộ chuẩn xác với tiết tấu âm nhạc.
*   **Nhảy nhanh qua các mốc nhịp:**
    *   Nhấn phím `]` hoặc `Alt + Mũi tên phải` để nhảy kim Playhead tiến tới mốc beat tiếp theo.
    *   Nhấn phím `[` hoặc `Alt + Mũi tên trái` để nhảy kim Playhead lùi về mốc beat liền trước.

---

## 5. Bảng Phím tắt Thao tác trên Dòng thời gian

| Phím tắt | Thao tác thực hiện |
| :--- | :--- |
| `Space` | Phát hoặc tạm dừng kịch bản từ vị trí hiện tại của kim Playhead |
| `Ctrl + T` | Mở hoặc đóng giao diện Timeline Sequencer |
| `Shift + 0` hoặc `)` | Chuyển đổi các mức thu phóng dòng thời gian (`25`, `50`, `100`, `200 px/s`) |
| `B` | Đặt mốc nhịp phách (**Tap Beat**) tại vị trí Playhead trên làn âm thanh |
| `[` hoặc `Alt + Mũi tên trái` | Nhảy kim Playhead lùi về mốc nhịp beat trước đó |
| `]` hoặc `Alt + Mũi tên phải` | Nhảy kim Playhead tiến tới mốc nhịp beat tiếp theo |
| `G` | Gộp các khối sự kiện đang chọn thành một nhóm (**Group**) |
| `Shift + G` | Hủy gộp nhóm các khối sự kiện (**Ungroup**) |
| `Ctrl + C` | Sao chép khối hoặc nhóm khối đang được chọn |
| `Ctrl + V` | Dán khối đã sao chép vào vị trí kim neo Anchor Head |
| `Delete` hoặc `Backspace` | Xóa các khối đang được chọn |
| `Ctrl + Z` | Hoàn tác (Undo) thao tác vừa thực hiện |
| `Ctrl + Y` / `Ctrl + Shift + Z` | Làm lại (Redo) thao tác vừa hoàn tác |
| `Ctrl + S` | Lưu kịch bản dự án |

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Khối Âm thanh & Dạng sóng Waveform**](./audio-block.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
