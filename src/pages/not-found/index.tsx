import Text from '@/components/atoms/text';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
      <Text variant="h1" className="text-5xl/12 font-bold text-orange-500 mb-4">
        404
      </Text>
      <Text className="text-xl text-gray-400 font-semibold tracking-wide mb-2">
        Oops! Page not found.
      </Text>
      <Text className="text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </Text>
    </div>
  );
}
