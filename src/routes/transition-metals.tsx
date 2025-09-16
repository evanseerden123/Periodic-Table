import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/transition-metals')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nonmetals"!</div>
}
