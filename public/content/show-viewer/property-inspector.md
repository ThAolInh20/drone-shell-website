# Bảng `Property Inspector`

Hướng dẫn sử dụng bảng `Property Inspector` trong timeline editor của show viewer.

## 1. Mở bảng Property Inspector

Nhấn vào block trên timeline để mở bảng Property Inspector ở góc dưới bên phải.
## 2. Các thông số
| Tên (Name) | Ý nghĩa | Thông số có thể điều chỉnh |
| :--- | :--- | :--- |
| **Dành cho Block Âm thanh (Audio)** | | |
| `time` | Thời gian bắt đầu phát nhạc | Số thực (giây), bước nhảy `0.1` (Ví dụ: `0.0`, `1.5`, `12.3`) |
| `volume` | Âm lượng nhạc nền | Số thực, bước nhảy `0.1` (Từ `0.0` - tắt tiếng đến `1.0` - âm lượng lớn nhất) |
| `url` | Đường dẫn tệp tin âm thanh | Văn bản (Text) - Đường dẫn đến tệp âm thanh (ví dụ: `.mp3`) |
| **Dành cho Block Pháo hoa (Sequence)** | | |
| `time` | Thời gian bắt đầu chuỗi bắn | Số thực (giây), bước nhảy `0.1` |
| `type` | Phân loại chuỗi sự kiện | Lựa chọn: `sequence` (phổ thông), `cometsequence` (sao chổi), `finale` (chuỗi bắn kết thúc) |
| `pattern` | Kiểu phân bổ / mẫu đường bắn | Lựa chọn: `random`, `sweep-left`, `sweep-right`, `converge`, `diverge`, `zigzag`, `fan`, `continuous`, `fan-sweep-left`, `fan-sweep-right`, `fan-sweep-continuous`, `fan-burst` |
| `preset` | Preset loại pháo hoa | Lựa chọn các preset có sẵn trong hệ thống (như `random`, `strobe`, `crackle`, `willow`, `ring`, `double_ring`, `heart`, `sphere`...) |
| `count` | Số lượng phát bắn trong 1 pattern | Số nguyên, bước nhảy `1` (Ví dụ: `10`, `20`, `50`) |
| `duration` | Thời gian thực hiện chuỗi bắn | Số thực (giây), bước nhảy `0.1` |
| `sectorId` | Khu vực bắn được chỉ định | Lựa chọn: `left` (trái), `center` (giữa), `right` (phải), hoặc để trống (`none` - phân bổ đều) |
| `shellSize` | Kích thước của quả pháo hoa | Số thực, bước nhảy `0.1` |
| `color` | Màu sắc của pháo hoa | Văn bản (Text) - Ví dụ: `#ff0000`, `blue`, `red`, `gold` |
| `pistil` | Thêm hiệu ứng nhụy phụ ở tâm pháo | Hộp kiểm (Checkbox): Bật (`true` - có nhụy) hoặc Tắt (`false`) |
| `instantBurst` | Kích nổ tức thì không qua bay lên | Hộp kiểm (Checkbox): Bật (`true` - nổ ngay tại bệ) hoặc Tắt (`false`) |
| `strobe` | Thêm hiệu ứng nháy (strobe) | Hộp kiểm (Checkbox): Bật (`true`) hoặc Tắt (`false`) |
| `crackle` | Thêm hiệu ứng nổ giòn (crackle) | Hộp kiểm (Checkbox): Bật (`true`) hoặc Tắt (`false`) |
| `ratioX` | Vị trí bắn theo trục ngang | từ `0.0` cực trái đến `1.0` cực phải |
| `ratioY` | Vị trí bắn theo trục dọc (Độ cao nổ) | từ `0.0` thấp nhất đến `1.0` cao nhất |
| `x1` / `x2` | Phạm vi giới hạn pattern theo trục ngang X | từ `0.0` cực trái đến `1.0` cực phải |
| `y1` / `y2` | Phạm vi giới hạn pattern theo trục dọc Y | từ `0.0` cực trái đến `1.0` cực phải |

## 3. Giải thích chi tiết

*   **Khái niệm Pattern (mẫu đường bắn)**: Là một chuỗi hành động phát bắn của block.  
    `→` Một pattern chứa nhiều quả pháo hoa (`shell`) được thiết lập qua chỉ số `count`. Tất cả các quả pháo này sẽ lần lượt được bắn lên trong khoảng thời gian `duration` (giây).  
    `→` Phạm vi phân bổ của pattern được giới hạn từ `x1` đến `x2` theo trục ngang, và từ `y1` đến `y2` theo trục dọc.  
    `→` Nếu có thuộc tính `ratioY`, pháo hoa sẽ nổ cố định tại độ cao `ratioY` thay vì phân bổ ngẫu nhiên.  
    `→` Nếu có thuộc tính `ratioX`, pháo hoa sẽ nổ cố định tại vị trí ngang `ratioX`.  

*   **Khái niệm Preset (loại pháo hoa)**: Định nghĩa loại pháo hoa và các hiệu ứng đi kèm của block đó.  
    `→` Mỗi quả pháo hoa (`shell`) được cấu thành bởi các thuộc tính:  
        * Loại hiệu ứng gốc(`preset` )
        * Màu sắc (`color`)
        * Kích thước quả pháo (`shellSize`)
        * Nhụy phụ ở tâm (`pistil`)
        * Kích nổ tức thì (`instantBurst`)
        * Hiệu ứng nhấp nháy (`strobe`)
        * Và hiệu ứng nổ giòn (`crackle`)


