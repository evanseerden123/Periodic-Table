import { createFileRoute } from '@tanstack/react-router'
import AlkaliMetalsEssay from "../../components/Articles/AlkaliMetalsEssay"

export const Route = createFileRoute('/categories/alkali-metal')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AlkaliMetalsEssay />
}
