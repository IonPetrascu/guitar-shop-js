class Shopping {
  handlerClear () {
    ROOT_SHOPPING.innerHTML = ''
  }

  deleteItem (id) {
    const card = JSON.parse(localStorage.getItem('products'))
    const res = card.filter((el) => el !== id)
    localStorage.setItem('products', JSON.stringify(res))
    this.render()
    productsPage.render()
  }

  render () {
    const productsStore = localStorageUtil.getProducts()
    let htmlCatalog = ''
    let sumCatalog = 0

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
          <tr>
              <td class="shopping-element__name">⚡️a ${name}</td>
              <td class="shopping-element__price">${price.toLocaleString()} USD</td>
              <td class="shopping-element__price">${price.toLocaleString()} USD</td>

              <td><button class="shopping-btn" onclick="shoppingPage.deleteItem('${id}')">Delete from card</button></td>
          </tr>
        `
        sumCatalog += price
      }
    })

    const html = `
      <div class="shopping-container">
          <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
          <table>
              ${htmlCatalog}
              <tr>
                  <td class="shopping-element__name">💥 Сумма:</td>
                  <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
              </tr>
          </table>
      </div>
    `

    ROOT_SHOPPING.innerHTML = html
  }
}

const shoppingPage = new Shopping()
