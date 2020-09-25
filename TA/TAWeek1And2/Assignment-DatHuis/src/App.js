import React from 'react'

import Input from './components/Input'
const items = []
for (let i = 0; i < 10; ++i) {
  items.push(`Action ${i}`)
  items.push(`Gamma ${i}`)
  items.push(`Praxis ${i}`)
}

function App() {
  const [options, setOptions] = useState([])

  const handleChange = (e) => {
    setOptions(items.filter((item) => item.includes(e.target.value)))
  }
  return (
    <>
      Hello World
      {/* <Input
        items={options.length === 0 ? items : options}
        onInputChange={handleChange}
      /> */}
    </>
  )
}

export default App
