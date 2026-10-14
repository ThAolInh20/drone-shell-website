# Hiệu ứng Đứng yên & Kịch bản Đèn LED (Hold & LED Effects)

Trong phân hệ Animated Editor, việc kiểm soát chuyển động vi mô khi drone giữ hình và lập trình kịch bản ánh sáng LED đóng vai trò quyết định đến tính thẩm mỹ và độ tương phản của toàn bộ kịch bản trình diễn trên bầu trời đêm.

---

## 1. Hiệu ứng Vi động khi Giữ Vị trí (Hold Styles)

Khi phi đội hoàn thành giai đoạn bay chuyển tiếp và bước vào khoảng thời gian giữ hình (**Hold Time**), người dùng có thể áp dụng các kiểu chuyển động nhẹ để duy trì cảm giác sống động:

| Kiểu giữ vị trí | Tên tiếng Anh | Quy luật vi động |
| :--- | :--- | :--- |
| **Cố định** | `None` | Drone giữ yên hoàn toàn tại tọa độ đích. |
| **Sóng lượn** | `Wave` | Khối hình uốn lượn nhấp nhô tuần hoàn theo phương thẳng đứng. |
| **Dao động ngang** | `Swing` | Toàn bộ tạo hình đung đưa nghiêng nhẹ sang hai bên theo phương ngang. |
| **Nhịp thở (Co giãn)** | `Pulse` | Đội hình nở rộng ra xung quanh rồi co lại tuần hoàn như nhịp thở sinh học. |
| **Quỹ đạo tròn** | `Orbit` | Từng drone di chuyển quay quanh trục tâm hình học của nhóm. |
| **Xoắn ốc** | `Spiral` | Các hàng drone chuyển động xoắn vặn dần đều theo trục thẳng đứng. |
| **Nở rộng** | `Expand` | Từng cụm drone tản rộng dần từ tâm ra ngoài biên. |

---

## 2. Kịch bản Màu sắc Đèn LED (Light Styles)

Hệ thống hỗ trợ 7 chế độ điều khiển dải màu đèn LED công suất cao:

*   **Màu đơn sắc (Normal):** Đèn LED phát sáng màu cố định được thiết lập từ bảng mã màu RGB/Hex.
*   **Lấp lánh đơn sắc (Sparkle):** Các drone chớp tắt luân phiên với chu kỳ ngẫu nhiên nhằm mô phỏng bầu trời sao.
*   **Lấp lánh đa sắc (Sparkle Random):** Mỗi chu kỳ chớp sáng sẽ tự động đổi sang một màu sắc ngẫu nhiên khác nhau.
*   **Lấp lánh phân mảng (Patch Sparkle):** Hiệu ứng chớp nháy kích hoạt đồng bộ theo từng phân vùng hoặc từng cụm drone liền kề.
*   **Tắt sáng hoàn toàn (Blackout):** Tắt toàn bộ hệ thống đèn LED của phi đội.

> [!TIP]
> **Ứng dụng chế độ Blackout:** Áp dụng chế độ `Blackout` trong giai đoạn chuyển trạng thái (`Transition`) đối với các phân cảnh hoán đổi đội hình phức tạp. Việc ẩn đường bay trong bóng tối giúp tạo bất ngờ cho khán giả khi đội hình mới đồng loạt bật sáng tại vị trí đích.

*   **Dải màu cầu vồng (Rainbow):** Màu sắc đèn LED chuyển đổi tuần hoàn và mượt mà qua quang phổ 7 màu.
*   **Chớp xung đồng loạt (Strobe):** Toàn bộ phi đội chớp sáng và tắt đồng loạt với tần số cao.

---

## 3. Kịch bản Bật sáng khi Đến Vị trí (Landing Styles)

Xác định quy luật xuất hiện của ánh sáng ngay khi drone hoàn thành lộ trình bay và chuyển sang trạng thái Hold:

*   **Đồng loạt tức thì (Instant):** Toàn bộ các bóng đèn LED bật sáng cùng một thời điểm.
*   **Gợn sóng tỏa từ tâm (Radial Ripple):** Đèn LED kích hoạt bật sáng tuần tự từ các drone ở tâm khối hình lan dần ra các drone ở đường viền ngoài.
*   **Quét từ trái sang phải (Left-to-Right):** Hiệu ứng ánh sáng kích hoạt quét dần theo phương ngang từ mép trái qua mép phải.
*   **Quét từ phải sang trái (Right-to-Left):** Hiệu ứng ánh sáng kích hoạt quét ngược chiều từ mép phải qua mép trái.

---

## 4. Hướng và Chiều Xoay Đèn LED (Rotation Direction)

Đối với các hiệu ứng chuyển động xoay (như `Orbit` hoặc `Spiral`), người dùng có thể chọn chiều quay:

*   **Thuận chiều kim đồng hồ (CW):** Quay theo chiều kim đồng hồ.
*   **Ngược chiều kim đồng hồ (CCW):** Quay ngược chiều kim đồng hồ.
*   **Xen kẽ (Alternate):** Các tầng hoặc các vòng drone liền kề sẽ quay ngược chiều nhau tạo chiều sâu không gian.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Công cụ Gizmo 3D & Uốn Biến dạng Nhóm (Group Bending)**](./grizmo.md)
*   [**Trở về Mục lục Animation Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
