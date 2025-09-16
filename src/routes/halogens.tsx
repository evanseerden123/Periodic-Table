import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/halogens')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nonmetals"!</div>
}
