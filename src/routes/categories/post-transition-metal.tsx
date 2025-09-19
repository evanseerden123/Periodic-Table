import { createFileRoute } from '@tanstack/react-router'
import PostTransitionMetalsEssay from "../../components/Articles/PostTransitionMetalsEssay"

export const Route = createFileRoute('/categories/post-transition-metal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PostTransitionMetalsEssay />
}
