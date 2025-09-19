import { createFileRoute } from '@tanstack/react-router'
import NonmetalsEssay from "../../components/Articles/NonmetalsEssay"

export const Route = createFileRoute('/categories/nonmetal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NonmetalsEssay />
}
