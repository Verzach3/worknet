import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_home/config/')({
  component: () => <div>Hello /_home/config/!</div>
})

