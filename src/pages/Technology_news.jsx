import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { Box, Container, Grid, Typography } from "@mui/material";

const NewsItem = ({ image, title, description, date, author }) => (
  <Box display="flex" mb={2}>
    <img
      src={image}
      alt={title}
      style={{ width: "35%", borderRadius: "8px",height:"300px" }}
    />
    <Box ml={2}>
      <Typography variant="h6" fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        📅 {date} • ✍ {author}
      </Typography>
    </Box>
  </Box>
);

function Technology_news() {
  const newsList = [
    {
      image: "/image/all1.png",
      title:
        "Class Diagram là gì? Hướng dẫn cách vẽ Class Diagram chi tiết nhất",
      date: "Thứ Sáu 28/02/2025",
      description:
        "Class Diagram là một trong những loại biểu đồ UML (Unified Modeling Language) phổ biến và quan trọng nhất, giúp mô tả trực quan cấu trúc của hệ thống phần mềm. Sơ đồ này thể hiện các lớp (class), các thuộc tính (attributes), phương thức (methods), cũng như mối quan hệ (relationships) giữa các lớp trong hệ thống.Bằng cách sử dụng Class Diagram, các nhà phát triển, kỹ sư phần mềm và kiến trúc sư hệ thống có thể dễ dàng hiểu được cách các thành phần trong hệ thống tương tác với nhau, xác định rõ các đối tượng, hành vi và kết nối của chúng. Điều này đặc biệt hữu ích khi thiết kế kiến trúc phần mềm, lập trình hướng đối tượng (OOP), cũng như giúp đội ngũ phát triển làm việc hiệu quả hơn nhờ một cái nhìn tổng quan, có tổ chức về toàn bộ hệ thống.Trong bài viết này, chúng ta sẽ cùng nhau tìm hiểu về Class Diagram một cách chi tiết, bao gồm các thành phần chính, các loại quan hệ, và đặc biệt là hướng dẫn cụ thể cách vẽ Class Diagram một cách khoa học và chuyên nghiệp. Nếu bạn đang muốn nâng cao kỹ năng thiết kế phần mềm của mình, đừng bỏ lỡ hướng dẫn chi tiết dưới đây!",
      author: "Lâm Trường Thảo Uyên",
    },
    {
        image: "/image/all2.png",
      title: "Hướng dẫn cách tải Free Fire PC và chơi trên máy tính",
      date: "Thứ Năm 27/02/2025",
        description:"Garena Free Fire là một trong những tựa game bắn súng sinh tồn đình đám nhất trên nền tảng di động, thu hút hàng triệu người chơi trên toàn thế giới. Với lối chơi nhanh, đồ họa đẹp mắt và những trận đấu gay cấn, Free Fire mang đến trải nghiệm tuyệt vời cho những ai yêu thích thể loại Battle Royale.Tuy nhiên, không phải ai cũng thích chơi game trên màn hình nhỏ của điện thoại. Nếu bạn muốn trải nghiệm Free Fire trên màn hình lớn với thao tác mượt mà hơn bằng bàn phím và chuột, thì chơi Free Fire trên PC chính là lựa chọn hoàn hảo!Trong bài viết này, chúng tôi sẽ hướng dẫn bạn cách tải và cài đặt Free Fire trên máy tính một cách dễ dàng, giúp bạn tận hưởng trò chơi với chất lượng đồ họa tốt hơn, điều khiển chính xác hơn và đặc biệt là không lo hết pin hay nóng máy như khi chơi trên điện thoại.Cùng khám phá ngay cách cài đặt Free Fire PC chỉ trong vài bước đơn giản và bắt đầu cuộc chiến sinh tồn ngay hôm nay! 🚀🔥",
      author: "Hoàng Minh Tuyết",
    },
    {
        image: "/image/all3.png",
      title:
        "Tổng hợp Code Attack on Titan Revolution được cập nhật mới nhất 2025",
      date: "Thứ Tư 26/02/2025",
      description:
      "Class Diagram là một trong những loại biểu đồ UML (Unified Modeling Language) phổ biến và quan trọng nhất, giúp mô tả trực quan cấu trúc của hệ thống phần mềm. Sơ đồ này thể hiện các lớp (class), các thuộc tính (attributes), phương thức (methods), cũng như mối quan hệ (relationships) giữa các lớp trong hệ thống.Bằng cách sử dụng Class Diagram, các nhà phát triển, kỹ sư phần mềm và kiến trúc sư hệ thống có thể dễ dàng hiểu được cách các thành phần trong hệ thống tương tác với nhau, xác định rõ các đối tượng, hành vi và kết nối của chúng. Điều này đặc biệt hữu ích khi thiết kế kiến trúc phần mềm, lập trình hướng đối tượng (OOP), cũng như giúp đội ngũ phát triển làm việc hiệu quả hơn nhờ một cái nhìn tổng quan, có tổ chức về toàn bộ hệ thống.Trong bài viết này, chúng ta sẽ cùng nhau tìm hiểu về Class Diagram một cách chi tiết, bao gồm các thành phần chính, các loại quan hệ, và đặc biệt là hướng dẫn cụ thể cách vẽ Class Diagram một cách khoa học và chuyên nghiệp. Nếu bạn đang muốn nâng cao kỹ năng thiết kế phần mềm của mình, đừng bỏ lỡ hướng dẫn chi tiết dưới đây!",
    author: "Lâm Trường Thảo Uyên",
    },
    {
        image: "/image/all4.png",
      title:
        "Chi tiết 3 cách liên kết Excel với Google Sheets cực nhanh và dễ làm",
      date: "Thứ Ba 25/02/2025",
      description:
      "Class Diagram là một trong những loại biểu đồ UML (Unified Modeling Language) phổ biến và quan trọng nhất, giúp mô tả trực quan cấu trúc của hệ thống phần mềm. Sơ đồ này thể hiện các lớp (class), các thuộc tính (attributes), phương thức (methods), cũng như mối quan hệ (relationships) giữa các lớp trong hệ thống.Bằng cách sử dụng Class Diagram, các nhà phát triển, kỹ sư phần mềm và kiến trúc sư hệ thống có thể dễ dàng hiểu được cách các thành phần trong hệ thống tương tác với nhau, xác định rõ các đối tượng, hành vi và kết nối của chúng. Điều này đặc biệt hữu ích khi thiết kế kiến trúc phần mềm, lập trình hướng đối tượng (OOP), cũng như giúp đội ngũ phát triển làm việc hiệu quả hơn nhờ một cái nhìn tổng quan, có tổ chức về toàn bộ hệ thống.Trong bài viết này, chúng ta sẽ cùng nhau tìm hiểu về Class Diagram một cách chi tiết, bao gồm các thành phần chính, các loại quan hệ, và đặc biệt là hướng dẫn cụ thể cách vẽ Class Diagram một cách khoa học và chuyên nghiệp. Nếu bạn đang muốn nâng cao kỹ năng thiết kế phần mềm của mình, đừng bỏ lỡ hướng dẫn chi tiết dưới đây!",
    author: "Lâm Trường Thảo Uyên",
    },
  ];

  return (
    <Container
      maxWidth={false}
      sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", width: "1442px" }}
    >
      {/* Header */}
      <Header />
      <Box
        component="img"
        src="/image/123.png"
        sx={{ width: 1394, borderRadius: 1, mt: 2 }}
      />
      <Box>
        <Grid container spacing={2}>
          {/* Cột trái - Tin tức chính */}
          <Grid item xs={12} md={8}>
            <Box sx={{ borderRadius: 1, bgcolor: "white", p: 2 }}>
              <img
                src="/image/5cach.png"
                alt="Main News"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 1.5 }}>
                Dưới đây là 5+ cách giúp bạn xem số điện thoại của mình một cách
                chính xác nhất cho từng nhà mạng như Viettel, Vinaphone,
                Mobifone, Vietnamobile và iTel.
              </Typography>
            </Box>
          </Grid>

          {/* Cột phải - Các tin tức nhỏ */}
          <Grid item xs={12} md={4}>
            <Box display="flex" mb={2}>
              <img
                src="/image/tonghop.png"
                alt="News 1"
                style={{ width: "35%", borderRadius: "8px" }}
              />
              <Box ml={2}>
                <Typography variant="body1" fontWeight="bold">
                  Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút
                  đông đảo...
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={2}>
              <img
                src="/image/tonghop.png"
                alt="News 1"
                style={{ width: "35%", borderRadius: "8px" }}
              />
              <Box ml={2}>
                <Typography variant="body1" fontWeight="bold">
                  Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút
                  đông đảo...
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={2}>
              <img
                src="/image/tonghop.png"
                alt="News 1"
                style={{ width: "35%", borderRadius: "8px" }}
              />
              <Box ml={2}>
                <Typography variant="body1" fontWeight="bold">
                  Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút
                  đông đảo...
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={2}>
              <img
                src="/image/tonghop.png"
                alt="News 1"
                style={{ width: "35%", borderRadius: "8px" }}
              />
              <Box ml={2}>
                <Typography variant="body1" fontWeight="bold">
                  Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút
                  đông đảo...
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={2}>
              <img
                src="/image/tonghop.png"
                alt="News 1"
                style={{ width: "35%", borderRadius: "8px" }}
              />
              <Box ml={2}>
                <Typography variant="body1" fontWeight="bold">
                  Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút
                  đông đảo...
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mb={2}>
              <img
                src="/image/tonghop.png"
                alt="News 1"
                style={{ width: "35%", borderRadius: "8px" }}
              />
              <Box ml={2}>
                <Typography variant="body1" fontWeight="bold">
                  Tổng hợp 5 cách tải video Threads về điện thoại và máy tính
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Mạng xã hội mới nổi của Meta là Threads đang ngày càng thu hút
                  đông đảo...
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ bgcolor: "white", borderRadius: 1 }}> 
        <Grid container spacing={2} direction="column" >
          {newsList.map((news, index) => (
            <Grid item xs={12} key={index} sx={{ mb: 10 }}>
              <NewsItem {...news} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Container>
  );
}

export default Technology_news;
