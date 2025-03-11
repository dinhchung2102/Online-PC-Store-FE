import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function About() {
  const [hoveredId, setHoveredId] = useState(null); // State để theo dõi nút đang hover
  const category = [
    {
      id: 1,
      name: "LAPTOP",
      filterName: [
        {
          type_id: '67b9f9af410eaa776b3f0467',
          type: "Thương hiệu",
          icon: '',
          end: [
            {
              id: 1,
              name: "acer",
            },
            {
              id: 2,
              name: "asus",
            },
          ],
        },
        {
          id: 2,
          type: "Giá bán",
          end: [
            {
              id: 1,
              name: "5-10",
            },
            {
              id: 2,
              name: "10-15",
            },
          ],
        },
        {
          id: 2,
          type: "Giá bán",
          end: [
            {
              id: 1,
              name: "5-10",
            },
            {
              id: 2,
              name: "10-15",
            },
          ],
        },
        {
          id: 2,
          type: "Giá bán",
          end: [
            {
              id: 1,
              name: "5-10",
            },
            {
              id: 2,
              name: "10-15",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "PC",
      filterName: [
        {
          id: 1,
          type: "Thương hiệu",
          end: [
            {
              id: 1,
              name: "acer",
            },
            {
              id: 2,
              name: "asus",
            },
          ],
        },
        {
          id: 2,
          type: "Giá bán",
          end: [
            {
              id: 1,
              name: "5-10",
            },
            {
              id: 2,
              name: "10-15",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "PC",
      filterName: [
        {
          id: 1,
          type: "Thương hiệu",
          end: [
            {
              id: 1,
              name: "acer",
            },
            {
              id: 2,
              name: "asus",
            },
          ],
        },
        {
          id: 2,
          type: "Giá bán",
          end: [
            {
              id: 1,
              name: "5-10",
            },
            {
              id: 2,
              name: "10-15",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Box sx={{ padding: 0, maxHeight: "100vh", width: "100vw", alignItems: 'center', justifyContent: 'center', }}>
      <Box sx={{ display: "inline-flex", flexDirection: "column", position: "relative", }}>
        {category.map((item) => {
          return (
            <Box
              sx={{
                display: "inline-block",
                marginRight: 2,
              }}
              key={item.id}
            >
              <Button
                sx={{
                  
                }}
                onMouseEnter={() => setHoveredId(item.id)} // Khi hover vào nút, set state
                onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi nút, reset state
              >
                {item.name}
              </Button>

              {/* Hiển thị Box khi hover vào nút */}
              {hoveredId === item.id && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    width: 500,
                    minHeight: 200,
                    backgroundColor: "#c1c1c1",
                    "&:hover": {
                      backgroundColor: "#ff6347",
                    },
                    transition: "background-color 0.3s",
                    padding: 2,
                    borderRadius: 2, // Cải thiện giao diện
                  }}
                >
                  <Typography sx={{ textAlign: "center", paddingBottom: 2 }}>
                    Hover Box {item.name}
                  </Typography>

                  {/* Hiển thị danh sách các type từ filterName */}
                  {item.filterName?.map((itemFilter) => {
                    return (
                      <Box key={itemFilter.id}>
                        <Typography sx={{ fontWeight: "bold" }}>
                          {itemFilter.type}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: 2,
                          }}
                        >
                          {/* Hiển thị các item trong 'end' */}
                          {itemFilter.end?.map((endItem) => (
                            <Typography key={endItem.id}>
                              {endItem.name}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
