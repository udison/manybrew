import { Button } from "@/components/Button";
import { CoffeeIcon } from "lucide-react";

export default function Testing() {
  return (
    <div className="flex items-center gap-4 flex-col p-6">
      <Button size="sm"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button size="md"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button size="xl"><CoffeeIcon /> Let&apos;s get brewing!</Button>

      <div className="bg-gray-900 flex flex-col gap-4 p-2">
        <Button variant="secondary" size="sm"><CoffeeIcon /> Let&apos;s get brewing!</Button>
        <Button variant="secondary" size="md"><CoffeeIcon /> Let&apos;s get brewing!</Button>
        <Button variant="secondary" size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
        <Button variant="secondary" size="xl"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      </div>

      <Button variant="brand" size="sm"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="brand" size="md"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="brand" size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="brand" size="xl"><CoffeeIcon /> Let&apos;s get brewing!</Button>

      <Button variant="primary-outlined" size="sm"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="primary-outlined" size="md"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="primary-outlined" size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="primary-outlined" size="xl"><CoffeeIcon /> Let&apos;s get brewing!</Button>

      <div className="bg-gray-900 flex flex-col gap-4 p-2">
        <Button variant="secondary-outlined" size="sm"><CoffeeIcon /> Let&apos;s get brewing!</Button>
        <Button variant="secondary-outlined" size="md"><CoffeeIcon /> Let&apos;s get brewing!</Button>
        <Button variant="secondary-outlined" size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
        <Button variant="secondary-outlined" size="xl"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      </div>

      <Button variant="brand-outlined" size="sm"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="brand-outlined" size="md"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="brand-outlined" size="lg"><CoffeeIcon /> Let&apos;s get brewing!</Button>
      <Button variant="brand-outlined" size="xl"><CoffeeIcon /> Let&apos;s get brewing!</Button>
    </div>
  )
}
