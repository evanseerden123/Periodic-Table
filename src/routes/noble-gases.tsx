import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/noble-gases')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nonmetals"!</div>
}
