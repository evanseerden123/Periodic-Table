import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/metalloids')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/metalloids"!</div>
}
