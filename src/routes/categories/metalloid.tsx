import { createFileRoute } from '@tanstack/react-router'
import MetalloidsEssay from "../../components/Articles/MetalloidsEssay"

export const Route = createFileRoute('/categories/metalloid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MetalloidsEssay />
}
