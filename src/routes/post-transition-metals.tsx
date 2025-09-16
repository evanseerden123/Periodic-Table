import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post-transition-metals')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/nonmetals"!</div>
}
