import { Meta, StoryObj } from "@storybook/react"
import { useMockStudy } from "../MockStudies"
import { PlotImportance } from "./PlotImportance"
import React from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { lightTheme } from "../styles/lightTheme"

const meta: Meta<typeof PlotImportance> = {
  component: PlotImportance,
  title: "PlotImportance",
  tags: ["autodocs"],
  decorators: [
    (Story, storyContext) => {
      const study = useMockStudy(storyContext.parameters?.studyId)
      if (!study) return <p>loading...</p>
      return (
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Story
            args={{
              study,
            }}
          />
        </ThemeProvider>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof PlotImportance>

export const MockStudy1: Story = {
  parameters: {
    studyId: 1,
  },
}
