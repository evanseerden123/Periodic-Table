import { createFileRoute } from '@tanstack/react-router'
import AlkalineEarthMetalsEssay from "../../components/Articles/AlkalineEarthMetalsEssay"

export const Route = createFileRoute('/categories/alkaline-earth-metal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AlkalineEarthMetalsEssay />
}
