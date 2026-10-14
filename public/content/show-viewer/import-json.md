# Hướng dẫn Xuất và Nhập kịch bản JSON (Export & Import Scenario)

Hệ thống sử dụng định dạng tệp chuẩn `.json` để lưu trữ, trao đổi và phục hồi toàn bộ dữ liệu show diễn gồm phi đội drone, các chùm pháo hoa 3D và các mốc nhịp âm thanh.

---

## 1. Xuất kịch bản ra tệp tin (Export JSON)

Sau khi hoàn tất biên đạo kịch bản trên Timeline:

*   **Thao tác thực hiện:** Nhấp vào nút **`Xuất kịch bản (Export JSON)`** trên thanh công cụ hoặc nhấn tổ hợp phím **`Ctrl + S`** (hoặc **`Shift + S`**).
*   **Dữ liệu được lưu trữ trong tệp JSON:**
    *   Toàn bộ các bước diễn của drone: Tọa độ 3D từng drone, màu sắc ánh sáng LED, hiệu ứng chuyển bước (Transition), hiệu ứng giữ vị trí (Hold).
    *   Toàn bộ các sự kiện pháo hoa: Vị trí bệ phóng, góc bắn, thời gian bay lên, thời điểm nổ, kích thước quả shell và loại hiệu ứng preset.
    *   Cấu hình âm thanh: Tên tệp bài hát, thời lượng, âm lượng và toàn bộ các mốc nhịp beat đánh dấu.

---

## 2. Nhập kịch bản vào Timeline (Import JSON)

Bạn có 3 phương thức linh hoạt để nạp dữ liệu kịch bản:

*   **Phương thức 1: Nhập đè toàn bộ (Import Sequence)**
    *   Nhấp vào nút **`Import Sequence`** trên thanh công cụ và chọn tệp `.json` từ máy tính.
    *   *Lưu ý:* Thao tác này sẽ làm mới hoàn toàn dòng thời gian và áp dụng kịch bản mới vào phiên làm việc.
*   **Phương thức 2: Ghép nối sự kiện (Append Events)**
    *   Nhấp vào nút **`Thêm kịch bản (Add Drone/Shell/Audio)`** để đọc dữ liệu từ tệp JSON và ghép nối tiếp vào mốc thời gian sau các sự kiện đang có.
*   **Phương thức 3: Kéo thả trực tiếp (Drag & Drop)**
    *   Mở thư mục máy tính, kéo trực tiếp tệp `.json` và thả vào khu vực hiển thị Timeline. Hệ thống sẽ tự động phân tích và nạp kịch bản vào phần mềm.

---

## 3. Xử lý Âm thanh khi Nhập Kịch bản (Companion Audio Loading)

Một lưu ý rất quan trọng khi làm việc với tệp JSON: **Tệp JSON chỉ lưu trữ văn bản cấu hình và mốc thời gian, không nhúng tệp âm thanh nhị phân** (nhằm đảm bảo tệp kịch bản luôn siêu nhẹ, chỉ vài chục đến vài trăm Kilobyte thay vì hàng trăm Megabyte).

### Cách đồng bộ âm thanh tự động:
1.  **Quy tắc đặt tên cùng thư mục (Khuyến nghị chuẩn):** Luôn lưu tệp âm thanh (`.mp3` hoặc `.wav`) có cùng tên và đặt chung thư mục với tệp `.json` (Ví dụ: `dem_giao_thua.json` và `dem_giao_thua.mp3`).
2.  **Tự động tải lại:** Khi bạn mở `dem_giao_thua.json`, ứng dụng sẽ tự động phát hiện tệp `dem_giao_thua.mp3` bên cạnh, tự động nạp tiếng và vẽ lại toàn bộ dải sóng âm Waveform.
3.  **Khi tệp nhạc bị di chuyển:** Nếu bạn tải kịch bản từ người khác hoặc đổi tên tệp nhạc, phần mềm sẽ hiển thị một thông báo nhắc nhở chọn tệp âm thanh tương ứng. Bạn chỉ cần nhấp vào và trỏ tới file nhạc trên máy tính là âm thanh sẽ được đồng bộ ngay lập tức.
---

## Liên kết điều hướng

*   [**Bài tiếp theo: Điều khiển Camera & Không gian 3D**](./show-view.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Về Trang chủ Tài liệu Tổng quan**](../README.md)
