import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@mantine/core'
import { testfunc } from "@/backend/functions/testfunc.telefunc"

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Button type='button' onClick={() => {
        testfunc()
      }}>
        click
      </Button>

      <h3>Welcome Home!</h3>
    </div>
  )
}
