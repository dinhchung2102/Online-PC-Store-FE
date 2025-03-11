import React from "react";
import { Paper, Box, Typography, AvatarGroup, Avatar } from "@mui/material";

function Article({ title, summary, image, author }) {
  return (
    <Paper elevation={3} square>
      <img
        src={image}
        alt="Product"
        style={{ width: "100%", height: "auto" }}
      />
      <Box p={2}>
        <Typography variant="caption" gutterBottom>
          Product
        </Typography>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {summary}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{marginTop: 2}}> 
          <Box display="flex" flexDirection="row" alignItems="center">
          <Avatar alt="Author" src="/static/images/avatar/2.jpg" />
            <Typography variant="body2" sx={{ marginLeft: 2 }}>
              {author}
            </Typography>
          </Box>
          <Typography variant="caption">March 11, 2025</Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default Article;
