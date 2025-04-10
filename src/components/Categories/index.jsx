import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router";
import { getCategories } from "~/services/productService";

const category = [
  {
    id: 1,
    name: "LAPTOP asdfasfasfsfasfdasfdasfdasdfasfas",
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
    name: "PC 3",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 3",
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
    id: 4,
    name: "PC 4",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 4",
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
    id: 5,
    name: "PC 5",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 5",
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
    id: 6,
    name: "PC 6",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 6",
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
    id: 7,
    name: "PC 7",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 7",
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
    id: 8,
    name: "PC 8",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 8",
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
    id: 9,
    name: "PC 9",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 9",
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
    id: 10,
    name: "PC 10",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 10",
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
    id: 11,
    name: "PC 11",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 11",
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
    id: 12,
    name: "PC 12",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 12",
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
    id: 13,
    name: "PC 13",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 13",
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
    id: 14,
    name: "PC 14",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 14",
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
    id: 15,
    name: "PC 15",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 15",
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
    id: 16,
    name: "PC 16",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 16",
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
    id: 17,
    name: "PC 17",
    filterName: [
      {
        id: 1,
        type: "Thương hiệu 17",
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

// Styled component for truncated text
const TruncatedText = styled(Typography)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '200px', // Adjust this width as needed
  textTransform: 'capitalize',
  fontSize: '0.8rem',
  fontWeight: 'bold',
  transition: '0 none'
});

function Categories() {

  const navigate = useNavigate()

  const [hoveredId, setHoveredId] = useState(null); // State để theo dõi nút đang hover

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    }
    fetchCategories();
  }, [])

  return (
    <Box sx={{ width: 300, position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          width: 250,
          minHeight: 600,
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '1px 1px 20px rgba(0,0,0,0.1)'

        }}>
        {categories?.map((item) => {
          return (
            <Box
              sx={{
                display: "inline-block",
              }}
              key={item._id}
            >
              <Box
                sx={{
                  backgroundColor: item._id === hoveredId ? 'red' : 'white',
                  position: 'relative',

                  // '&::after': {
                  //   content: '""',
                  //   display: "block",
                  //   width: "20px",
                  //   height: "40px",
                  //   backgroundColor: "transparent",
                  //   position: "absolute",
                  //   bottom: 0,
                  //   right: -20,
                  //   borderTop: '20px solid transparent',
                  //   borderBottom: '20px solid transparent',
                  //   borderLeft: `10px solid ${item.id === hoveredId ? 'red' : 'transparent'}`,
                  //   zIndex: 99,
                  // }
                }}
                onMouseEnter={() => setHoveredId(item._id)} // Khi hover vào nút, set state
                onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi nút, reset state
              >
                <Button
                  fullWidth
                  sx={{
                    justifyContent: 'space-between',
                    color: item._id === hoveredId ? 'white' : 'black',
                    paddingX: 2,
                    paddingY: 1,
                  }}
                  onClick={() => navigate(`/products/${item.name}`)}
                  endIcon={<KeyboardArrowRightIcon />}
                  onMouseEnter={() => setHoveredId(item._id)} // Khi hover vào nút, set state
                  onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi nút, reset state
                >
                  <TruncatedText>
                    {item.name}
                  </TruncatedText>
                </Button>
              </Box>

              {/* Hiển thị Box khi hover vào nút */}
              {hoveredId === item._id && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                    height: `calc(36px * ${category.length})`,
                    width: 'calc(1442px - 300px)',
                    minHeight: 200,
                    backgroundColor: "white",
                    padding: 2,
                    zIndex: 999,
                    boxShadow: '1px 1px 20px rgba(0,0,0,0.1)'
                  }}
                  onMouseEnter={() => setHoveredId(item._id)} // Khi hover vào nút, set state
                  onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi nút, reset state
                >
                  {/* Hiển thị danh sách các type từ filterName */}
                  <Grid container spacing={2} columns={5}>
                    {item.filterName?.map((itemFilter) => {
                      return (
                        <Grid key={itemFilter.id} sx={{ mb: 2 }} xs={1}>
                          <Typography variant="subtitle2" sx={{ color: 'red', cursor: 'pointer' }}>{itemFilter.type}</Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              marginLeft: 2,
                            }}
                          >
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Categories;