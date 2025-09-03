import { createFileRoute } from '@tanstack/react-router'
import '../index.css';

export const Route = createFileRoute('/testing')({
  component: Hi,
})


export default function Hi () {

}