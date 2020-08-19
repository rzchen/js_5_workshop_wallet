window.addEventListener('DOMContentLoaded', function() {
  
  // 抓到 Form: item-form
  const itemForm = document.forms['item-form']
  let storage = []

  itemForm.addEventListener('submit', function(e) {

    // 拿到分類
    let category = itemForm.elements['category']
    let inputCate = category.options[category.selectedIndex].value
    
    // 拿到日期
    let date = itemForm.elements['date']
    let inputDate = date.value

    // 拿到金額
    let amount = itemForm.elements['amount']
    let inputAmount = amount.value

    // 拿到描述
    let description = itemForm.elements['description']
    let inputDes = description.value

    // 防止轉頁
    e.preventDefault()

    // 塞進 Object
    let inputTotal = {
      date: inputDate,
      category: inputCate,
      description: inputDes,
      amount: inputAmount 
    }
    // 清除內容
    itemForm.reset()
    
    // 單次 submit 塞進 array
    storage.push(inputTotal)

    // Object 塞進 localStorage
    localStorage.setItem('records',JSON.stringify(storage))

    // localStorage 拿出 object
    let getStorage = JSON.parse(localStorage.getItem("records"))

    // console.log(getStorage)



  })
})