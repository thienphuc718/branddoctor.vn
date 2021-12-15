import { getDocument } from 'ssr-window'
const document = getDocument()
export default function formValidate(e) {
  const formFields = document.querySelectorAll(
    `#${e.target.id} :is(input, textarea)`,
  )
  const formValue = {}
  formFields.forEach((input) => {
    input.onclick = () => {
      input.parentNode.setAttribute('class', '')
    }
    if (input.value == '' && input.hasAttribute('data-required'))
      input.parentNode.setAttribute('class', 'error required')
    else formValue[input.name] = input.value
  })
  if (Object.keys(formValue).length == formFields.length) return true
}
