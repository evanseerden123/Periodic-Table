import { createFileRoute } from '@tanstack/react-router'
import NobleGasesEssay from "../../components/Articles/NobleGasesEssay"

export const Route = createFileRoute('/categories/noble-gas')({
  component: RouteComponent,
})

function RouteComponent() {
  return <NobleGasesEssay />
}
