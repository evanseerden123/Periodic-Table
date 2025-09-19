import { createFileRoute } from '@tanstack/react-router'
import HalogensEssay from "../../components/Articles/HalogensEssay"

export const Route = createFileRoute('/categories/halogen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HalogensEssay />
}
