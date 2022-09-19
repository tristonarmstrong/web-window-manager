import { Alert, Button, Stack } from '@mui/material'
import { Meta, Story } from '@storybook/react'

const Template: Story = props => {
  return (
    <Stack>
      <Button
        variant="contained"
        onClick={() =>
          window.WindowManager.openWindow({
            link: '?path=/story/lib-windowmanager--base',
            name: `new-${Math.random() * 100}`
          })
        }
      >
        Open Window
      </Button>
      <Button variant="contained" color="error" onClick={() => window.WindowManager.recursivelyCloseChildren()}>
        Close all children
      </Button>

      <Alert severity="info">
        The window manager will recursivly close all windows nested infinately.
        <br />
        Feel free to open as many windows as you want. <br />
        As well as open windows within the windows.
      </Alert>
    </Stack>
  )
}

export const Base = Template.bind({})
Base.parameters = {
  msw: { handlers: { gateway: null } }
}

export default {
  component: Base
} as Meta
