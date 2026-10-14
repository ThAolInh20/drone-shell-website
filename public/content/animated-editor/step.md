# Biên tập các Bước bay trên Timeline (Step Cards)

Bảng điều khiển **Thẻ bước bay (Timeline Step Panel)** ở cạnh dưới của phân hệ Animated Editor quản lý chuỗi diễn hoạt của phi đội drone. Một kịch bản trình diễn hoàn chỉnh được tạo nên từ nhiều bước bay (**Steps**) nối tiếp nhau, trong đó mỗi bước xác định một trạng thái tọa độ tĩnh của phi đội cùng thời lượng giữ hình và chuyển trạng thái tương ứng.

---

## 1. Cấu trúc Thông tin trên Thẻ Bước bay (Step Card)

Mỗi thẻ bước bay trên dòng thời gian hiển thị các thông tin cơ bản:

*   **Tên bước định danh:** Tên gọi nhận diện của bước diễn (ví dụ: `Bước 1`, `Bước 2`...).
*   **Mốc thời gian kích hoạt:** Đơn vị tính bằng mili-giây (`ms`). Ví dụ: `3000 ms` tương ứng với giây thứ `3.0` của kịch bản.
*   **Màu sắc phân loại (UI Color):** Tùy chỉnh màu sắc viền thẻ tại bảng thuộc tính bên phải để nhóm các phân đoạn trình diễn cùng chủ đề.
*   **Xem trước bước diễn:** Nhấp chuột trái vào một thẻ Step Card bất kỳ khi kịch bản đang tạm dừng để dịch chuyển vạch kim thời gian về mốc bắt đầu của bước đó và hiển thị bố cục 3D tương ứng trong Viewport.

---

## 2. Quy trình Kéo thả Thay đổi Thứ tự Bay (Drag & Drop)

Để tái sắp xếp thứ tự xuất hiện của các tạo hình trong kịch bản:

### Các bước thực hiện:
1.  Nhấn giữ chuột trái vào thẻ bước bay cần di chuyển. Thẻ sẽ giảm độ mờ hiển thị (opacity) xuống `50%` để báo hiệu trạng thái sẵn sàng kéo.
2.  Rê con trỏ chuột qua các thẻ khác trên dòng thời gian. Khi di chuyển qua khoảng trống giữa hai thẻ, đường viền của vị trí tiếp nhận sẽ phát sáng màu xanh lá cây.
3.  Thả chuột trái tại vị trí có viền xanh lá để xác nhận hoán đổi thứ tự.
4.  **Cơ chế tự động đồng bộ hóa:**
    *   Hệ thống cập nhật lại chỉ mục (index) của bước diễn trong mảng dữ liệu.
    *   Tự động tính toán lại mốc thời gian bắt đầu (`startTime`) của toàn bộ các bước diễn phía sau dựa trên tổng thời lượng chuyển đổi (Transition) và giữ hình (Hold) của các bước trước đó.
    *   Tái hiện hoạt cảnh chuyển động liền mạch trong Viewport 3D.

---

## 3. Khởi tạo và Xóa Bước bay

*   **Khởi tạo bước mới:** Nhấp vào nút **Thêm bước (Add Step)** trên thanh công cụ Timeline. Hệ thống sẽ nhân bản cấu hình tọa độ của bước hiện tại và tự động nối tiếp vào cuối chuỗi kịch bản.
*   **Xóa bước bay:** Nhấp vào biểu tượng dấu nhân **`×`** ở góc trên bên phải của thẻ Step Card cần xóa.

> [!WARNING]
> Thao tác xóa thẻ bước bay không thể hoàn tác nếu đã thực hiện lệnh lưu dự án. Hãy kiểm tra kỹ mốc thời gian trước khi xóa để không làm xáo trộn cấu trúc kịch bản tổng thể.

---

## 4. Phân bổ Tác vụ theo Nhóm (Active Group Dropdown)

Tại thanh công cụ điều khiển phát (Playback Controls), nhấp vào menu thả xuống **Nhóm đang chọn (Active Group)** để phân vùng phạm vi áp dụng:

*   **Tất cả nhóm (Mặc định):** Các chỉnh sửa về tọa độ, hiệu ứng bay và màu đèn LED ở bước hiện tại sẽ tác động lên toàn bộ phi đội drone.
*   **Nhóm chỉ định (Ví dụ: `Group A`):** Mọi điều chỉnh chỉ tác động cục bộ lên các drone thuộc `Group A`. Các drone thuộc nhóm khác sẽ giữ nguyên trạng thái tọa độ và màu sắc của bước liền trước.

---

## Liên kết Điều hướng

*   [**Bài tiếp theo: Cấu hình Hiệu ứng Chuyển trạng thái Transition**](./transition-effect.md)
*   [**Trở về Mục lục Animation Formation Editor**](./README.md)
*   [**Trang chủ Tài liệu Hướng dẫn**](../README.md)
