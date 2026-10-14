# Bảng Thuộc tính Đối tượng (Property Inspector)

Bảng **Property Inspector** nằm ở góc dưới bên phải giao diện Show Viewer, cung cấp toàn bộ các trường thông số có thể tùy biến của khối sự kiện đang được chọn trên dòng thời gian Timeline (Khối Âm thanh, Khối Pháo hoa Đơn hoặc Chuỗi Pháo hoa Tuần tự).

---

## 1. Mở Bảng Property Inspector

1.  Mở dòng thời gian bằng phím tắt `Ctrl + T`.
2.  Nhấp chuột trái vào một khối bất kỳ trên Timeline (Khối Âm thanh hoặc Khối Pháo hoa).
3.  Bảng **Property Inspector** sẽ tự động hiển thị các tham số cấu hình tương ứng với loại khối được chọn.

---

## 2. Bảng Danh mục Tham số Chi tiết

### Nhóm thông số Khối Âm thanh (Audio Track)

| Tham số | Ý nghĩa kỹ thuật | Kiểu dữ liệu & Giới hạn giá trị |
| :--- | :--- | :--- |
| `time` | Mốc thời gian bắt đầu phát nhạc | Số thực (giây), bước nhảy `0.1` (Ví dụ: `0.0`, `1.5`, `12.3`) |
| `volume` | Âm lượng đầu ra của nhạc nền | Số thực từ `0.0` (tắt tiếng) đến `1.0` (âm lượng tối đa) |
| `url` | Đường dẫn tệp tin âm thanh cục bộ | Văn bản (Text) - Đường dẫn tham chiếu tệp (`.mp3`, `.wav`, `.ogg`) |

### Nhóm thông số Khối Pháo hoa & Chuỗi Bắn (Sequence & Shells)

| Tham số | Ý nghĩa kỹ thuật | Kiểu dữ liệu & Giới hạn giá trị |
| :--- | :--- | :--- |
| `time` | Thời điểm bắt đầu kích hoạt phát bắn / chuỗi bắn | Số thực (giây), bước nhảy `0.1` |
| `type` | Phân loại kiểu chuỗi sự kiện | Giá trị lựa chọn: `sequence` (phổ thông), `cometsequence` (sao chổi), `finale` (kết thúc) |
| `pattern` | Kiểu phân bổ / mẫu đường bắn | Giá trị lựa chọn: `random`, `sweep-left`, `sweep-right`, `converge`, `diverge`, `zigzag`, `fan`, `continuous`, `fan-sweep-left`, `fan-sweep-right`, `fan-sweep-continuous`, `fan-burst` |
| `preset` | Mẫu hiệu ứng pháo hoa cài sẵn | Các preset trong hệ thống: `random`, `strobe`, `crackle`, `willow`, `ring`, `double_ring`, `heart`, `sphere`... |
| `count` | Số lượng phát bắn trong một mẫu pattern | Số nguyên dương, bước nhảy `1` (Ví dụ: `10`, `20`, `50`) |
| `duration` | Tổng thời gian diễn ra toàn bộ chuỗi bắn | Số thực (giây), bước nhảy `0.1` |
| `sectorId` | Phân vùng vị trí bắn chỉ định | Giá trị lựa chọn: `left` (bên trái), `center` (ở giữa), `right` (bên phải), hoặc để trống (`none` - phân bổ đều) |
| `shellSize` | Đường kính / kích thước hiển thị của quả pháo | Số thực, bước nhảy `0.1` |
| `color` | Mã màu sắc của hạt pháo sáng | Chuỗi mã màu Hex (`#ff0000`) hoặc tên màu chuẩn (`blue`, `gold`) |
| `pistil` | Hiệu ứng nhụy phụ nở tại tâm quả pháo | Hộp kiểm (Checkbox): `true` (có nhụy) hoặc `false` (không có) |
| `instantBurst` | Kích nổ tức thì không qua giai đoạn bay lên | Hộp kiểm (Checkbox): `true` (nổ tại bệ) hoặc `false` (bắn lên không) |
| `strobe` | Hiệu ứng nhấp nháy sáng chớp | Hộp kiểm (Checkbox): `true` hoặc `false` |
| `crackle` | Hiệu ứng âm thanh và hạt nổ lách tách | Hộp kiểm (Checkbox): `true` hoặc `false` |
| `ratioX` | Tọa độ điểm bắn cố định theo trục ngang X | Số thực từ `0.0` (biên trái) đến `1.0` (biên phải) |
| `ratioY` | Tọa độ điểm nổ cố định theo trục dọc Y (Độ cao) | Số thực từ `0.0` (chân trời/thấp nhất) đến `1.0` (đỉnh trời/cao nhất) |
| `x1` / `x2` | Phạm vi giới hạn phân bổ pattern theo trục ngang X | Số thực từ `0.0` (cực trái) đến `1.0` (cực phải) |
| `y1` / `y2` | Phạm vi giới hạn phân bổ pattern theo trục dọc Y | Số thực từ `0.0` (thấp nhất) đến `1.0` (cao nhất) |

---

## 3. Quy tắc Vận hành của Pattern và Preset

### Cấu trúc Mẫu bắn (Pattern)
*   **Khái niệm:** Pattern xác định quy luật và không gian phân bổ các phát bắn trong một khối sự kiện.
*   Một khối pattern chứa tổng số `count` quả pháo (`shell`). Các quả pháo này được kích hỏa nối tiếp nhau đều đặn trong khoảng thời gian `duration` (giây).
*   Không gian nổ của pattern được giới hạn trong hình chữ nhật tọa độ từ `x1` đến `x2` theo phương ngang và từ `y1` đến `y2` theo phương thẳng đứng.
*   Khi thiết lập giá trị cụ thể cho `ratioX` hoặc `ratioY`, vị trí nổ sẽ được cố định tại tọa độ đó thay vì lấy ngẫu nhiên trong vùng giới hạn.

### Cấu trúc Mẫu pháo (Preset)
*   **Khái niệm:** Preset định nghĩa hình dạng hạt nổ, màu sắc và âm học của từng quả pháo.
*   Mỗi quả pháo đơn lẻ chịu sự chi phối của các thuộc tính:
    *   Mẫu hiệu ứng cơ sở (`preset`).
    *   Màu sắc hạt sáng (`color`).
    *   Kích thước vùng nổ (`shellSize`).
    *   Nhụy phụ tại tâm (`pistil`).
    *   Kích nổ tức thời (`instantBurst`).
    *   Hiệu ứng chớp nháy (`strobe`).
    *   Hiệu ứng nổ lách tách (`crackle`).

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Xuất và Nhập Kịch bản JSON**](./import-json.md)
*   [**Trở về Mục lục Show Viewer**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
