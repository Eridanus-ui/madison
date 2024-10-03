import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function PDFCard({ title, description, pdfUrl }) {
  return (
    <Card className="max-w-xs mx-auto shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <CardMedia
        component="img"
        alt="PDF Thumbnail"
        height="140"
        image="https://via.placeholder.com/150"
        className="object-cover"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-lg font-semibold"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-gray-600"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={pdfUrl}
          target="_blank"
          className="text-blue-500 hover:text-blue-700"
        >
          View PDF
        </Button>
        <Button
          size="small"
          color="secondary"
          href={pdfUrl}
          download
          className="text-red-500 hover:text-red-700"
        >
          Download
        </Button>
      </CardActions>
    </Card>
  );
}
