import {MockData} from "./types";

export default function getData(): Promise<MockData> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        width: 100,
        baseZIndex: 1,
        hobby: '33333'
      })
    }, 2000)
  })
}
