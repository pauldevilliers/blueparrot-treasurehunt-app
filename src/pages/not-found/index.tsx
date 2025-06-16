import { Typography } from '@mui/material';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <Typography variant="h1" className="!mb-4">
        404
      </Typography>
      <Typography className="!mb-2">Oops! Page not found.</Typography>
      <Typography className="!mb-6">
        The page you're looking for doesn't exist or has been moved.
      </Typography>
    </div>
  );
}
