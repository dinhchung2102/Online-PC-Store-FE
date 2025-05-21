import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid2';
import { useNavigate } from "react-router";
// import { getCategories } from "~/services/productService";
import { getAllFilter } from "~/services/searchFilterService";
import { keyToVietnamese } from "~/utils/utils";
import { getFilterByKey } from "../../services/searchFilterService";
import { useDispatch } from "react-redux";
import { setProducts, clearProducts } from "~/redux/filterProductSlide";

// const category = [
//   {
//     id: 1,
//     name: "LAPTOP asdfasfasfsfasfdasfdasfdasdfasfas",
//     filterName: [
//       {
//         type_id: "67b9f9af410eaa776b3f0467",
//         type: "Thương hiệu",
//         icon: "",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "PC",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "PC 3",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 3",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "PC 4",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 4",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "PC 5",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 5",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "PC 6",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 6",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "PC 7",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 7",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "PC 8",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 8",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 9,
//     name: "PC 9",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 9",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: "PC 10",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 10",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: "PC 11",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 11",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 12,
//     name: "PC 12",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 12",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 13,
//     name: "PC 13",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 13",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 14,
//     name: "PC 14",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 14",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 15,
//     name: "PC 15",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 15",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 16,
//     name: "PC 16",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 16",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 17,
//     name: "PC 17",
//     filterName: [
//       {
//         id: 1,
//         type: "Thương hiệu 17",
//         end: [
//           {
//             id: 1,
//             name: "acer",
//           },
//           {
//             id: 2,
//             name: "asus",
//           },
//         ],
//       },
//       {
//         id: 2,
//         type: "Giá bán",
//         end: [
//           {
//             id: 1,
//             name: "5-10",
//           },
//           {
//             id: 2,
//             name: "10-15",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const dummyCategories = [
//   {
//     _id: "681c6ad8eedfbc3d6da43ccf",
//     categoryId: {
//       _id: "678fea143f45c782eb49e4a9",
//       name: "Laptop Gaming",
//       description: "Laptop chuyên dụng cho chơi game với cấu hình mạnh mẽ.",
//       image: "https://example.com/images/laptop_gaming.jpg",
//     },
//     filters: [
//       {
//         header: "BRAND",
//         options: [
//           {
//             label: "DELL PHAI",
//             api_url: "/products/DELL",
//             _id: "681c6ad8eedfbc3d6da43cd1",
//           },
//           {
//             label: "ASUS",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cd2",
//           },
//           {
//             label: "HP",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cd3",
//           },
//           {
//             label: "LENOVO",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cd4",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cd0",
//       },
//       {
//         header: "PRICE",
//         options: [
//           {
//             label: "Under $500",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cd6",
//           },
//           {
//             label: "$500 - $1000",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cd7",
//           },
//           {
//             label: "Over $1000",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cd8",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cd5",
//       },
//       {
//         header: "SCREEN SIZE",
//         options: [
//           {
//             label: "13 inch",
//             api_url: "",
//             _id: "681c6ad8eedfbc3d6da43cda",
//           },
//           {
//             label: "15 inch",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cdb",
//           },
//           {
//             label: "17 inch",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cdc",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cd9",
//       },
//       {
//         header: "RAM",
//         options: [
//           {
//             label: "4 GB",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cde",
//           },
//           {
//             label: "8 GB",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cdf",
//           },
//           {
//             label: "16 GB",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce0",
//           },
//           {
//             label: "32 GB",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce1",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cdd",
//       },
//       {
//         header: "STORAGE",
//         options: [
//           {
//             label: "128 GB SSD",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce3",
//           },
//           {
//             label: "256 GB SSD",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce4",
//           },
//           {
//             label: "512 GB SSD",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce5",
//           },
//           {
//             label: "1 TB SSD",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce6",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43ce2",
//       },
//       {
//         header: "PROCESSOR",
//         options: [
//           {
//             label: "Intel i3",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce8",
//           },
//           {
//             label: "Intel i5",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ce9",
//           },
//           {
//             label: "Intel i7",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cea",
//           },
//           {
//             label: "AMD Ryzen 5",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ceb",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43ce7",
//       },
//       {
//         header: "GRAPHICS CARD",
//         options: [
//           {
//             label: "Integrated",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43ced",
//           },
//           {
//             label: "NVIDIA GTX 1650",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cee",
//           },
//           {
//             label: "NVIDIA RTX 3060",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cef",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cec",
//       },
//       {
//         header: "USAGE",
//         options: [
//           {
//             label: "Office",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf1",
//           },
//           {
//             label: "Gaming",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf2",
//           },
//           {
//             label: "Graphic Design",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf3",
//           },
//           {
//             label: "Student",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf4",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cf0",
//       },
//       {
//         header: "OPERATING SYSTEM",
//         options: [
//           {
//             label: "Windows",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf6",
//           },
//           {
//             label: "macOS",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf7",
//           },
//           {
//             label: "Linux",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cf8",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cf5",
//       },
//       {
//         header: "WEIGHT",
//         options: [
//           {
//             label: "Under 1.5kg",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cfa",
//           },
//           {
//             label: "1.5kg - 2kg",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cfb",
//           },
//           {
//             label: "Over 2kg",
//             api_url: "...",
//             _id: "681c6ad8eedfbc3d6da43cfc",
//           },
//         ],
//         _id: "681c6ad8eedfbc3d6da43cf9",
//       },
//     ],
//     createdAt: "2025-05-08T08:27:04.723Z",
//     updatedAt: "2025-05-08T08:27:04.723Z",
//     __v: 0,
//   },
//   {
//     _id: "681c6b20eedfbc3d6da43cfe",
//     categoryId: {
//       _id: "678fea143f45c782eb49e4a8",
//       name: "Laptop",
//       description:
//         "Laptop mỏng nhẹ, di động với hiệu suất tốt cho công việc và học tập.",
//       image: "https://example.com/images/laptop.jpg",
//     },
//     filters: [
//       {
//         header: "BRAND",
//         options: [
//           {
//             label: "DELL",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d00",
//           },
//           {
//             label: "ASUS",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d01",
//           },
//           {
//             label: "HP",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d02",
//           },
//           {
//             label: "LENOVO",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d03",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43cff",
//       },
//       {
//         header: "PRICE",
//         options: [
//           {
//             label: "Under $500",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d05",
//           },
//           {
//             label: "$500 - $1000",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d06",
//           },
//           {
//             label: "Over $1000",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d07",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d04",
//       },
//       {
//         header: "SCREEN SIZE",
//         options: [
//           {
//             label: "13 inch",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d09",
//           },
//           {
//             label: "15 inch",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d0a",
//           },
//           {
//             label: "17 inch",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d0b",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d08",
//       },
//       {
//         header: "RAM",
//         options: [
//           {
//             label: "4 GB",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d0d",
//           },
//           {
//             label: "8 GB",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d0e",
//           },
//           {
//             label: "16 GB",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d0f",
//           },
//           {
//             label: "32 GB",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d10",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d0c",
//       },
//       {
//         header: "STORAGE",
//         options: [
//           {
//             label: "128 GB SSD",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d12",
//           },
//           {
//             label: "256 GB SSD",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d13",
//           },
//           {
//             label: "512 GB SSD",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d14",
//           },
//           {
//             label: "1 TB SSD",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d15",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d11",
//       },
//       {
//         header: "PROCESSOR",
//         options: [
//           {
//             label: "Intel i3",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d17",
//           },
//           {
//             label: "Intel i5",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d18",
//           },
//           {
//             label: "Intel i7",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d19",
//           },
//           {
//             label: "AMD Ryzen 5",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d1a",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d16",
//       },
//       {
//         header: "GRAPHICS CARD",
//         options: [
//           {
//             label: "Integrated",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d1c",
//           },
//           {
//             label: "NVIDIA GTX 1650",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d1d",
//           },
//           {
//             label: "NVIDIA RTX 3060",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d1e",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d1b",
//       },
//       {
//         header: "USAGE",
//         options: [
//           {
//             label: "Office",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d20",
//           },
//           {
//             label: "Gaming",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d21",
//           },
//           {
//             label: "Graphic Design",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d22",
//           },
//           {
//             label: "Student",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d23",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d1f",
//       },
//       {
//         header: "OPERATING SYSTEM",
//         options: [
//           {
//             label: "Windows",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d25",
//           },
//           {
//             label: "macOS",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d26",
//           },
//           {
//             label: "Linux",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d27",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d24",
//       },
//       {
//         header: "WEIGHT",
//         options: [
//           {
//             label: "Under 1.5kg",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d29",
//           },
//           {
//             label: "1.5kg - 2kg",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d2a",
//           },
//           {
//             label: "Over 2kg",
//             api_url: "...",
//             _id: "681c6b20eedfbc3d6da43d2b",
//           },
//         ],
//         _id: "681c6b20eedfbc3d6da43d28",
//       },
//     ],
//     createdAt: "2025-05-08T08:28:16.410Z",
//     updatedAt: "2025-05-08T08:28:16.410Z",
//     __v: 0,
//   },
//   {
//     _id: "681c6b29eedfbc3d6da43d2d",
//     categoryId: {
//       _id: "678fea143f45c782eb49e4aa",
//       name: "PC",
//       description:
//         "Các phụ kiện hỗ trợ cho máy tính như tai nghe, túi laptop, chân đỡ màn hình...",
//       image: "https://example.com/images/phu_kien.jpg",
//     },
//     filters: [
//       {
//         header: "BRAND",
//         options: [
//           {
//             label: "DELL",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d2f",
//           },
//           {
//             label: "ASUS",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d30",
//           },
//           {
//             label: "HP",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d31",
//           },
//           {
//             label: "LENOVO",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d32",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d2e",
//       },
//       {
//         header: "PRICE",
//         options: [
//           {
//             label: "Under $500",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d34",
//           },
//           {
//             label: "$500 - $1000",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d35",
//           },
//           {
//             label: "Over $1000",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d36",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d33",
//       },
//       {
//         header: "SCREEN SIZE",
//         options: [
//           {
//             label: "13 inch",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d38",
//           },
//           {
//             label: "15 inch",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d39",
//           },
//           {
//             label: "17 inch",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d3a",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d37",
//       },
//       {
//         header: "RAM",
//         options: [
//           {
//             label: "4 GB",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d3c",
//           },
//           {
//             label: "8 GB",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d3d",
//           },
//           {
//             label: "16 GB",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d3e",
//           },
//           {
//             label: "32 GB",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d3f",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d3b",
//       },
//       {
//         header: "STORAGE",
//         options: [
//           {
//             label: "128 GB SSD",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d41",
//           },
//           {
//             label: "256 GB SSD",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d42",
//           },
//           {
//             label: "512 GB SSD",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d43",
//           },
//           {
//             label: "1 TB SSD",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d44",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d40",
//       },
//       {
//         header: "PROCESSOR",
//         options: [
//           {
//             label: "Intel i3",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d46",
//           },
//           {
//             label: "Intel i5",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d47",
//           },
//           {
//             label: "Intel i7",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d48",
//           },
//           {
//             label: "AMD Ryzen 5",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d49",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d45",
//       },
//       {
//         header: "GRAPHICS CARD",
//         options: [
//           {
//             label: "Integrated",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d4b",
//           },
//           {
//             label: "NVIDIA GTX 1650",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d4c",
//           },
//           {
//             label: "NVIDIA RTX 3060",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d4d",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d4a",
//       },
//       {
//         header: "USAGE",
//         options: [
//           {
//             label: "Office",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d4f",
//           },
//           {
//             label: "Gaming",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d50",
//           },
//           {
//             label: "Graphic Design",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d51",
//           },
//           {
//             label: "Student",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d52",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d4e",
//       },
//       {
//         header: "OPERATING SYSTEM",
//         options: [
//           {
//             label: "Windows",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d54",
//           },
//           {
//             label: "macOS",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d55",
//           },
//           {
//             label: "Linux",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d56",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d53",
//       },
//       {
//         header: "WEIGHT",
//         options: [
//           {
//             label: "Under 1.5kg",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d58",
//           },
//           {
//             label: "1.5kg - 2kg",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d59",
//           },
//           {
//             label: "Over 2kg",
//             api_url: "...",
//             _id: "681c6b29eedfbc3d6da43d5a",
//           },
//         ],
//         _id: "681c6b29eedfbc3d6da43d57",
//       },
//     ],
//     createdAt: "2025-05-08T08:28:25.873Z",
//     updatedAt: "2025-05-08T08:28:25.873Z",
//     __v: 0,
//   },
// ];

// console.log(dummyCategories);



// Styled component for truncated text
const TruncatedText = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "200px", // Adjust this width as needed
  textTransform: "capitalize",
  fontSize: "0.8rem",
  fontWeight: "bold",
  transition: "0 none",
});

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hoveredId, setHoveredId] = useState(null); // State để theo dõi nút đang hover

  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllFilter();
      setCategories(data);
      console.log("data filter:", data);
    };
    fetchCategories();
  }, []);

  return (
    <Box sx={{ width: 300, position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          width: 250,
          minHeight: 600,
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          boxShadow: "1px 1px 20px rgba(0,0,0,0.1)",
          zIndex: 999,
        }}
      >
        {categories.length > 0 ? (
          categories?.map((item, index) => {
            return (
              <Box
                sx={{
                  display: "inline-block",
                }}
                key={index}
              >
                <Box
                  sx={{
                    backgroundColor: item._id === hoveredId ? "red" : "white",
                    position: "relative",

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
                      justifyContent: "space-between",
                      color: item._id === hoveredId ? "white" : "black",
                      paddingX: 2,
                      paddingY: 1,
                    }}
                    onClick={() =>
                      navigate(`/products/${item.categoryId.name}`)
                    }
                    endIcon={<KeyboardArrowRightIcon />}
                    onMouseEnter={() => setHoveredId(item._id)} // Khi hover vào nút, set state
                    onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi nút, reset state
                  >
                    <TruncatedText>{item.categoryId.name}</TruncatedText>
                  </Button>
                </Box>

                {/* Hiển thị Box khi hover vào nút */}
                {hoveredId === item._id && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: "100%",
                      // height: `calc(36px * ${dummyCategories.length})`,
                      width: "calc(1442px - 300px)",
                      minHeight: 600,
                      backgroundColor: "white",
                      padding: 2,
                      zIndex: 999,
                      boxShadow: "1px 1px 20px rgba(0,0,0,0.1)",
                    }}
                    onMouseEnter={() => setHoveredId(item._id)} // Khi hover vào nút, set state
                    onMouseLeave={() => setHoveredId(null)} // Khi rời khỏi nút, reset state
                  >
                    {/* Hiển thị danh sách các type từ filterName */}
                    <Grid container spacing={2}>
                      {item.filters?.map((itemFilter, index) => {
                        return (
                          <Grid key={index} size={{ xs: 6, md: 4, lg: 2.4 }}>
                            <Typography
                              variant="h6"
                              sx={{ color: "red", cursor: "pointer" }}
                            >
                              {keyToVietnamese(itemFilter.header)}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                              {itemFilter.options?.map((itemOption, index) => {
                                return (
                                  <Box
                                    key={index}
                                    onClick={async () => {
                                      navigate(itemOption.api_url, { state: { url: itemOption.api_url } })
                                      const product = await getFilterByKey(itemOption.api_url)
                                      dispatch(clearProducts())
                                      dispatch(setProducts(product))
                                    }}
                                  >
                                    <Typography sx={{ color: "#333", cursor: "pointer", fontWeight: "bold", paddingX: 1, paddingY: 0.5 }}>
                                      {itemOption.label}
                                    </Typography>
                                  </Box>
                                );
                              })}
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                )}
              </Box>
            );
          })
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}

export default Categories;
