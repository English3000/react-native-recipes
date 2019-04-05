import React from "react"
import "react-native"
import { create } from "react-test-renderer"
import Controls from "../Controls"

it("renders", () => {
  expect(
    create(<Controls />).toJSON()
  ).toMatchSnapshot()
})