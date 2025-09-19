import { createFileRoute } from '@tanstack/react-router'
import LanthanidesEssay from "../../components/Articles/LanthanidesEssay"

export const Route = createFileRoute('/categories/lanthanide')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LanthanidesEssay />
}
