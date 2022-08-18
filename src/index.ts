import getData from "./getData";

async function run(target: string | HTMLElement, url: string) {
  let targetEl
  const data = await getData()
  if (typeof target === 'string') {
    targetEl = document.getElementById(target);
  } else {
    targetEl = target
  }
  targetEl.innerHTML = data.hobby
  return targetEl
}

export default run
