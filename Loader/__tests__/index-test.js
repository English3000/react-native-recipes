import React from "react"
import "react-native"
import { create } from "react-test-renderer"
import VideoPlayer from "../index"

it("renders", () => {
  expect(
    create(<VideoPlayer />).toJSON()
  ).toMatchSnapshot()
})