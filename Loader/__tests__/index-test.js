import React from "react"
import "react-native"
import { create } from "react-test-renderer"
import Loader from "../index"

it("renders", () => {
  expect(
    create(<Loader />).toJSON()
  ).toMatchSnapshot()
})