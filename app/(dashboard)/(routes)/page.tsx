import {Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
        <p className="text-3xl font-medium w-full text-red-700">
          Protected page
        </p>
        <Button variant="destructive">
            Click Me 
        </Button>
        </div>
  )
}
