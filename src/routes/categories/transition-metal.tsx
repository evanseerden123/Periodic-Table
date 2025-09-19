import { createFileRoute } from '@tanstack/react-router'
import TransitionMetalsEssay from "../../components/Articles/TransitionMetalsEssay"

export const Route = createFileRoute('/categories/transition-metal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TransitionMetalsEssay />
}
