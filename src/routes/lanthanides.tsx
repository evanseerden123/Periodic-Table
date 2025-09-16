import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/lanthanides')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nonmetals"!</div>
}
