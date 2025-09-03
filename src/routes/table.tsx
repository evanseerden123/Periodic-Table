import { createFileRoute } from '@tanstack/react-router'
import PeriodicTable from "../components/PeriodicTable";

export const Route = createFileRoute('/table')({
  component: ShowTable,
})


export default function ShowTable () {
  return (
    <PeriodicTable />
  )
}